/*
 * Gulp 默认任务，使用 `gulp` 命令运行该任务
 */

import gulp from "gulp";
import gulpSequence from "gulp-sequence"; // 设置 gulp task 的顺序

// borwser 要在 server 之前执行 | server 一定要放在最后执行
gulp.task('default', gulpSequence('clean', 'styles', 'pages', 'scripts', ['browser', 'server']));
