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
import {server} from './gulp/tasks/server.js'

function watcher(){
    gulp.watch(app.path.watch.files, copy);
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.img, images);
}
const mainTasks = gulp.parallel(copy, html, images);

const dev = gulp.series(reset,mainTasks,  gulp.parallel(watcher , server));


gulp.task('default', dev);