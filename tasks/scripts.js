// 处理 JS 文件的 gulp 构建脚本

import gulp from 'gulp';
import gulpIf from 'gulp-if'; // 在 gulp 中使用 if
import named from 'vinyl-named'; // 文件重命名标识
import livereload from 'gulp-livereload'; // 热刷新
import plumber from 'gulp-plumber'; // 信息流处理
import rename from 'gulp-rename'; // 文件重命名
import uglify from 'gulp-uglify'; // css、js 代码压缩
import { log, colors } from 'gulp-util'; // 命令行日志、命令行日志色彩输出
import webpackStream from 'webpack-stream'; // webpack 与 gulp 结合

import args from './util/args';

// scripts 任务
gulp.task('scripts', () => {
  return gulp.src(['src/js/index.js'])
    // 错误集中处理
    .pipe(plumber({
      errorHandler() {}
    }))
    .pipe(named())
    // JS 文件使用 babel 编译, ES6 转 ES5
    .pipe(webpackStream({
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel'
          }
        ]
      }
    }), null, (error, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunks: false
      }))
    })
    // 输出: 指定编译后的文件的存放路径
    .pipe(gulp.dest('server/public/js'))
    // 重命名
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
     // 压缩
    .pipe(uglify(
      {
        compress: { properties: false },
        output: {
          'quote_keys': true
        }
      }
    ))
    // 输出: 指定重命名、压缩后的文件的存放路径
    .pipe(gulp.dest('server/public/js'))
    // 热更新
    .pipe(gulpIf(args.watch, livereload()))
});