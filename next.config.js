import  { withContentCollections }  from "@content-collections/next"

const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    experimental: {
        mdxRs: true
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            }
        ],
        unoptimized: true
    }
};

export default withContentCollections(nextConfig);
