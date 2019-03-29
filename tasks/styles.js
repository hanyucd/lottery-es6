// 处理 CSS 文件的 gulp 构建脚本

import gulp from 'gulp';
import gulpIf from 'gulp-if';
import livereload from 'gulp-livereload';

import args from './util/args';

gulp.task('styles', () => {
  return gulp.src('src/**/*.css')
     // 把文件原封不动的拷贝到 server/public
    .pipe(gulp.dest('server/public'))
    // 热更新
    .pipe(gulpIf(args.watch, livereload()))
});