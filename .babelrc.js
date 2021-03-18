module.exports = {
    "presets": ["@babel/preset-react"],
    "plugins": [
        [
            "styless",
            {
                "import": "~antd/lib/style/themes/default.less",
                "lessOptions": {
                    "modifyVars": require('./theme'),
                    "javascriptEnabled": true
                }
            }
        ]
    ]
}