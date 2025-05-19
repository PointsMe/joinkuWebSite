
// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8"
      ]
    },
    'postcss-pxtorem': {
      rootValue({ file }) {
        console.log("postcss-pxtorem==>",file)
        return 192
        // return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      propList: ['*'],
      selectorBlackList: ['.van-notify',], // 在黑名单中的类名，将不会自动rem转换
    },
  },
};