const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          exclude: /node_modules/,
          use: [{ loader: 'ts-loader' }],
        },
        {
          test: /.node$/,
          loader: 'node-loader',
        },
      ],
    },
    output: {
      path: __dirname + '/build',
      filename: 'electronBuild.js',
    },
  },
  {
    mode: 'development',
    entry: './src/App.tsx',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          include: /src/,
          exclude: /node_modules/,
          use: [{ loader: 'ts-loader' }],
        },
        { 
          test: /\.jsx?/, 
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react'
              ],
              exclude: [
                /node_modules/
              ],
            }
          }
        },
        {
          test: /.(css|scss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    output: {
      path: __dirname + '/build',
      filename: 'bundle.js',
    },
    resolve: {
<<<<<<< HEAD
      extensions: ['.ts', '.tsx'],
=======
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
>>>>>>> dev
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  },
];
