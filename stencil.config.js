exports.config = {
   bundles: [{ components: ['my-name', 'st-button', 'st-switch'] }],
   collections: [{ name: '@stencil/router' }]
};

exports.devServer = {
   root: 'www',
   watchGlob: '**/**'
};
