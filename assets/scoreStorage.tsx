var RNFS = require('react-native-fs');
var path = RNFS.DocumentDirectoryPath + '/score.txt';

export const writeScore = (score: any) => {
  RNFS.writeFile(path, score, 'utf8')
    .then((success: any) => {
      console.log('FILE WRITTEN!');
    })
    .catch((err: any) => {
      console.log(err.message);
    });
};

export const readScore = async () => {
  return RNFS.readFile(path, 'utf8')
    .then((content: any) => {
      return content.toString();
    })
    .catch((err: any) => {
      return 'noscore';
    });
};
