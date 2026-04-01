import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());



const buildFolder = './dist';
const srcFolder = './src';

 export const path = {
    build:{
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        img: `${buildFolder}/img/`,
    },
    src:{
        html: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg}`,
    },
    watch:{
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg}`,
    },
    clean: buildFolder,
    buildFolder:buildFolder,
srcFolder:srcFolder,
rootFolder:rootFolder,
srcFolder:srcFolder,
ftp:'' 


}