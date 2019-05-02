const path = require("path");

module.exports = {
    "mode": "production",
    "entry": {
        "polyfill": "@babel/polyfill",
        "bundle-1": "./src/profile.js",
        "bundle-2": "./src/tasks.js"
    },
    "output": {
        "path": path.resolve(__dirname, 'public'),
        "filename": "[name].js"
    },
    "module": {
        "rules": [
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                    "options": {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    }
};