exports.config = {
  bundles: [{ components: ['ts-button', 'ts-switch'] }],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
