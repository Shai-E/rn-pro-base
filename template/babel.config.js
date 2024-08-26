module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {
        useTransformReactJSXExperimental: true,
      },
    ],
    'module:@react-native/babel-preset',
  ],
  plugins: ['react-native-reanimated/plugin'],
};
