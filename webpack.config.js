import path from 'path'

export default {
  entry: './build.js',
  output: {
    filename: 'build.js',
    path: path.resolve('.')
  },
  mode: 'development',
};
