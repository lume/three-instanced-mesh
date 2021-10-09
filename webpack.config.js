import path from 'path'

export default {
  entry: './global.esm.js',
  output: {
    filename: 'global.min.js',
    path: path.resolve('.')
  },
};
