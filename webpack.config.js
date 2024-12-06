module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', // لو بتستخدم هذا النوع
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
  