import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

import { copy } from './gulp/config/tasks/copy.js';
import { reset } from './gulp/config/tasks/reset.js';
import { html } from './gulp/config/tasks/html.js';
import { images } from './gulp/config/tasks/images.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/config/tasks/scss.js';
import { js } from './gulp/config/tasks/js.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/config/tasks/fonts.js';

// Задача для копирования изображений
gulp.task('assets', function () {
    return gulp.src('./src/img/**/*', { encoding: false })
        .pipe(gulp.dest('./dist/img/'))
        .pipe(plugins.browsersync.stream());
});

function watcher() {
    gulp.watch(app.path.watch.files, copy);
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.img, images);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.js, js);
}

// Задачи со шрифтами
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Главные задачи выполняются параллельно
const mainTasks = gulp.parallel(fonts, copy, html, images, scss, js, 'assets');

// Задачи запускаются последовательно: сначала reset, потом mainTasks, потом watcher и server параллельно
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);