const { override, addPostcssPlugins } = require('customize-cra');
const rewireAlias = require('react-app-rewire-alias');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = override(
  addPostcssPlugins([
    tailwindcss,
    autoprefixer,
  ]),
  config => {
    config = rewireAlias.alias({
      '@': 'src'
    })(config);
    return config;
  }
);
