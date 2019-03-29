// 清空 server 中编译后的文件

import gulp from 'gulp';
import del from "del"; // 删除文件

gulp.task('clean', (cb) => {
    return del(['server/public', 'server/views']);
});