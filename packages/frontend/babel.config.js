module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
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
