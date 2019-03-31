/*
 * 处理 CSS 文件的 gulp 构建脚本
 */

import gulp from 'gulp';
import gulpIf from "gulp-if"; // 在 gulp 中使用 if
import gulpLivereload from "gulp-livereload"; // 热刷新
import args from "./util/args";

gulp.task('styles', () => {

    return gulp.src('src/**/*.css')

        // 把文件原封不动的拷贝到 server/public
        .pipe(gulp.dest('server/public'))

        // 热更新
        .pipe(gulpIf(args.watch, gulpLivereload()))

})
