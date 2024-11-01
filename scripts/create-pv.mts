import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs/promises";
import path from "path";

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Update base directory path calculation
const baseDir = path.join(__dirname, "../src/content");

const textDir = path.join(baseDir, "registry", "text");
const blocksDir = path.join(baseDir, "registry", "blocks");
const elementsDir = path.join(baseDir, "registry", "elements");
const componentDir = path.join(baseDir, "registry", "components");

const outputMapFilePath = path.join(baseDir, "previews.ts");

// Define an interface for the component item structure
interface ComponentItem {
    name: string;
    type: string;
    component: string;
    path: string;
    rawCode?: any;
}

// Function to get all files in a directory
async function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): Promise<string[]> {
    try {
        const files = await fs.readdir(dirPath);
        
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = await fs.stat(filePath);
            
            if (stat.isDirectory()) {
                arrayOfFiles = await getAllFiles(filePath, arrayOfFiles);
            } else if (file.endsWith(".tsx")) {
                arrayOfFiles.push(filePath);
            }
        }
        
        return arrayOfFiles;
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
        return arrayOfFiles;
    }
}

// function to get the category of the file
function getCategory(filePath: string) {
    if (filePath.includes(path.sep + "components" + path.sep)) return "component";
    if (filePath.includes(path.sep + "elements" + path.sep)) return "element";
    if (filePath.includes(path.sep + "text" + path.sep)) return "text";
    return "block";
}

async function main() {
    try {
        const allFiles = await Promise.all([
            getAllFiles(componentDir),
            getAllFiles(elementsDir),
            getAllFiles(blocksDir),
            getAllFiles(textDir),
        ]);

        const components = allFiles.flat().reduce(async (accPromise, filePath) => {
            const acc = await accPromise;
            const category = getCategory(filePath);

            if (!acc[category]) {
                acc[category] = {};
            }

            const name = path.basename(filePath, ".tsx");
            let type = "";
            
            if (category === "element") {
                type = filePath.split(path.sep).slice(-2)[0];
            }

            const content = await fs.readFile(filePath, "utf8");
            const relativePath = path.relative(baseDir, filePath)
                .split(path.sep)
                .join("/")
                .replace(".tsx", "");
            const importPath = `@/content/${relativePath}`;
            const key = relativePath.split("/").slice(1).join("/");

            acc[category][key] = {
                name,
                type,
                rawCode: content,
                component: importPath,
                path: relativePath
            };

            return acc;
        }, Promise.resolve({} as any));

        let previewContent = "// @ts-nocheck\n";
        previewContent += "// This file is autogenerated by scripts/create-pr-content.ts.\n";
        previewContent += "// Do not edit this file directly.\n\n";
        previewContent += "import React from 'react';\n\n";
        previewContent += "export type PreviewsType = typeof Previews;\n\n";
        previewContent += "export const Previews: Record<string, any> = {\n";

        for (const [category, items] of Object.entries(await components)) {
            previewContent += `  "${category}": {\n`;
            for (const [key, { component, rawCode, name, type }] of Object.entries(items as Record<string, ComponentItem>)) {
                previewContent += `    "${name}": {\n`;
                previewContent += `      name: "${name}",\n`;
                previewContent += `      path: "${key}",\n`;
                previewContent += `      component: React.lazy(() => import("${component}")),\n`;
                previewContent += `      type: "${type}",\n`;
                previewContent += `      rawCode: ${JSON.stringify(rawCode)},\n`;
                previewContent += `    },\n`;
            }
            previewContent += "  },\n";
        }
        previewContent += "};\n";

        await fs.writeFile(outputMapFilePath, previewContent);
        console.log(`Component map generated into ${outputMapFilePath}`);
    } catch (error) {
        console.error("Error generating component map:", error);
        process.exit(1);
    }
}

main();