module.exports = {
    entry: "./src/index.js",
    target: "web",
    resolve: {
        fallback: {
            "fs": false,
            "crypto": false,
            "path": require.resolve("path-browserify"),
            "os": require.resolve("os-browserify/browser"),
        },
    },
};