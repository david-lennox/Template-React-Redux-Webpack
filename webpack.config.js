module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./src/build",
    publicPath: "./build",
    filename: "bundle.js"
  },
 module: {
   loaders: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: { 
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.jsx']
 },
}