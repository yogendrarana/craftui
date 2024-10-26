const { withContentCollections } = require("@content-collections/next");

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

module.exports = withContentCollections(nextConfig);
