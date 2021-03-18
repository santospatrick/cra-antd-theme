const BabelRcPlugin = require('@jackwilsdon/craco-use-babelrc');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: require('./theme'),
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: BabelRcPlugin },
  ],
};