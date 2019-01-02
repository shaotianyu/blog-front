
module.exports = {
    apps: [{
        name: "prod-front",
        script: "./server.js",
        env: {
            "NODE_ENV": "production"
        }
    }]
}
