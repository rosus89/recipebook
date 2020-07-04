module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            navigation: './src/navigation',
            pages: './src/pages',
            services: './src/services',
            state: './src/state',
            styles: './src/styles'
            
          },
        },
      ],
    ]
  }
}