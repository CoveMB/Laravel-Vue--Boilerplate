const mix = require('laravel-mix');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (mix.inProduction()) {
  mix.js('resources/js/app.js', 'public/js/app.js')
    .babel('public/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({ processCssUrls: false, })
    .webpackConfig({
      devtool: mix.inProduction() ? '' : 'inline-source-map',
      mode: mix.inProduction() ? 'production' : 'development',
      output: { chunkFilename: 'js/[name].js?id=[chunkhash]', },
      optimization: mix.inProduction() ? {} : {
        minimize: true,
        namedModules: true,
        namedChunks: true,
        removeAvailableModules: true,
        flagIncludedChunks: true,
        occurrenceOrder: false,
        usedExports: true,
        concatenateModules: true,
        sideEffects: false,
      },
      plugins: [ new BrowserSyncPlugin({ files: [ 'app/**/*', 'public/**/*', 'resources/views/**/*', 'routes/**/*', ], }), ],
      watchOptions: { ignored: /node_modules/, },
    });
} else {
  mix.js('resources/js/app.js', 'public/js/app.js')
    .sass('resources/sass/app.scss', 'public/css')
    .options({ processCssUrls: false, })
    .webpackConfig({
      devtool: mix.inProduction() ? '' : 'inline-source-map',
      mode: mix.inProduction() ? 'production' : 'development',
      output: { chunkFilename: 'js/[name].js?id=[chunkhash]', },
      plugins: [ new BrowserSyncPlugin({ files: [ 'app/**/*', 'public/**/*', 'resources/views/**/*', 'routes/**/*', ], }), ],
      watchOptions: { ignored: /node_modules/, },
    });
}
