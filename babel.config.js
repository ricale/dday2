module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@/components': './src/components',
          '@/lib': './src/lib',
          '@/navigation': './src/navigation',
          '@/state': './src/state',
          '@/utils': './src/utils',
        },
      },
    ],
  ],
};
