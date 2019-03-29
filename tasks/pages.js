// 处理 ejs 模版文件的 gulp 构建脚本

import gulp from 'gulp';
import gulpIf from 'gulp-if';
import livereload from 'gulp-livereload';

import args from './util/args';

gulp.task('pages', () => {
  return gulp.src('src/**/*.ejs')
    // 把文件原封不动的拷贝到 serve
    .pipe(gulp.dest('server'))
    // 热更新
    .pipe(gulpIf(args.watch, livereload()))
});