const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOOGLE_SERVICE_PRIVATE_KEY: process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY,
        SITE_FRONT_URL: process.env.SITE_FRONT_URL
    },
    i18n,
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'blog.gopeak.io'
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/privacy-policys',
                destination: '/privacy-policy',
                permanent: true,
            },
            {
                source: '/main-reasons-to-outsource-your-seo',
                destination: '/blog/main-reasons-to-outsource-your-seo',
                permanent: true,
            },
            {
                source: '/best-link-building-strategies-and-tricks',
                destination: '/blog/best-link-building-strategies-and-tricks',
                permanent: true,
            },
            {
                source: '/order',
                destination: '/booking',
                permanent: true,
            },
        ]
    },
    webpack: (config, { isServer }) => {
        replaceReactWithPreact(config, isServer);
        handleSVGs(config);

        return config;
    },
};

function replaceReactWithPreact(config, isServer) {
    // if (!isServer && process.env.NODE_ENV === "production") {
    //     config.resolve.alias["react"] = "preact/compat";
    //     config.resolve.alias["react-dom"] = "preact/compat";
    //
    // }
}

function handleSVGs(config) {
    const fileLoaderRule = findSVGFileLoaderRule(config);

    if (fileLoaderRule) {
        config.module.rules.push(
            getSVGURLRule(fileLoaderRule),
            getSVGRule()
        );

        fileLoaderRule.exclude = /\.svg$/i;
    }
}

function findSVGFileLoaderRule(config) {
    return config.module.rules.find(rule => rule.test?.test?.(".svg"));
}

function getSVGURLRule(existingRule) {
    return {
        ...existingRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // Match if *.svg?url
    };
}

function getSVGRule() {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // Exclude if *.svg?url
        use: ["@svgr/webpack"],
    };
}

module.exports = nextConfig;