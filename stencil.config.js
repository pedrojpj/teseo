exports.config = {
  bundles: [
    { components: ['ts-button', 'ts-switch', 'ts-input', 'ts-textarea'] },
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
