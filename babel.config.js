module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@src': './src',
          '@screens': './src/screens',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
