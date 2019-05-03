const withPlugins = require('next-compose-plugins');

const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const withManifest = require('next-manifest');
const withSize = require('next-size');
const withProgressBar = require('next-progressbar');
const withBabelMinify = require('next-babel-minify');

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

module.exports = withPlugins([
  nextEnv({
    staticPrefix: 'STATIC_',
    publicPrefix: 'PUBLIC_',
  }),
  [withTypescript],
  [withSass],
  [withSize],
  [
    withManifest,
    {
      manifest: {
        name: 'Auto Delovi',
        short_name: 'autodelovi',
        start_url: '/',
        display: 'standalone',
        background_color: '#EBEBEB',
        theme_color: '#0054ce',
        icons: {
          src: './assets/pwa-icon.png',
          cache: true,
        },
      },
    },
  ],
  [
    withBabelMinify,
    {
      comments: false,
    },
  ],
  [
    withProgressBar,
    {
      progressBar: {
        profile: true,
      },
    },
  ],
]);
