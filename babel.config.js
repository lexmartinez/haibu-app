module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'transform-flow-strip-types',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
          '~screens': './src/screens',
          '~axios': './src/utils/axios',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        allowUndefined: true,
      },
    ],
  ],
};
