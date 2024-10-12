import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatId(id: string) {
    return `#${id.toString().padStart(4, "0")}`;
}

export function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

export function toSentenceCase(str: string) {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}