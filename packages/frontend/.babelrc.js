module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-twin',
    'babel-plugin-macros',
    [
      '@emotion/babel-plugin',
      {
        importMap: {
          '@emotion/styled': {
            default: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@emotion/styled', 'default'],
            },
          },
          '@emotion/react': {
            default: {
              canonicalImport: ['@emotion/react', 'default'],
            },
          },
        },
      },
    ],
  ],
};
