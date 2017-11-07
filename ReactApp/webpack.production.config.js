module.exports = {
  entry: './components/routeDashboard.jsx',
  output: {
    path: './',
    filename: "../build/dashboard.js",
  },
  devServer: { // opciones para el servidor de desarrollo
   inline: true, // para que se recargue automáticamente cuando cambie un archivo
   port: 3333 // puerto donde funcionará el servidor
 },


  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
        
      { test: /\.css$/, loader: "style-loader!css-loader" }
      
    ]
  }
};

