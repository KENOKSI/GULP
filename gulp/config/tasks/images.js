import webp from 'gulp-webp';

export const images = () => {
    return app.gulp.src(`${app.path.src.img}`)
        .pipe(webp({quality: 80}))
        .pipe(app.gulp.dest(app.path.build.img));
};