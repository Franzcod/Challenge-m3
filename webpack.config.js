const path = require("path");

module.exports = (paths) => ({
  entry: {
    // main: path.resolve(__dirname, 'src/js/index.js'),
    main: ["./src/js/index.js", "./src/js/services.js" ]
  },
  output: {
    path: path.resolve(__dirname, paths.dest),
    filename: "bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, paths.scripts.src),
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                { targets: { browsers: ["last 2 versions"] } },
              ],
            ],
            cacheDirectory: true,
          },
        },
      },
    ],
  },
});
