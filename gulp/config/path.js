import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        fonts: `${buildFolder}/fonts/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        img: `${buildFolder}/img/`,      // ← важно: img
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`,       // или *.pug
        files: `${srcFolder}/files/**/*.*`,
        fonts: `${srcFolder}/fonts/**/*.*`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,  // ← важно
        svg: `${srcFolder}/img/**/*.svg`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ''
}