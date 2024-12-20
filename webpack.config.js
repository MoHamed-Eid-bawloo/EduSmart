module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // لو بتستخدم هذا النوع
          'css-loader',
          'postcss-loader',
          "source-map-loader"
        ],
        enforce: "pre"
      }
    ]
  }
  