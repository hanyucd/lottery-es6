/*
 * 定时器模块
 */

export default class Timer {
  countDown(end, update, handle) {
    const now = new Date().getTime();
    const self = this;

    if (now - end) {
      handle.call(self);
    } else {
      const d_to_ms = 1000 * 60 * 60 * 24; // 一天的毫秒数
      const h_to_ms = 1000 * 60 * 60; // 一小时的毫秒数
      const m_to_ms = 1000 * 60; // 一分钟的毫秒数
      const s_to_ms = 1000; // 一秒的毫秒数
          
      let last_time = end - now; // 时间差

      let d = Math.floor(last_time / d_to_ms); // 计算 天
      let h = Math.floor((last_time - d * d_to_ms) / h_to_ms); // 计算 小时
      let m = Math.floor((last_time - d * d_to_ms - h * h_to_ms) / m_to_ms); // 计算 分钟
      let s = Math.floor((last_time - d * d_to_ms - h * h_to_ms - m * m_to_ms) / s_to_ms); // 计算 秒

      let arr = [];
      if (d > 0) arr.push(`${d}天`);
      if (h > 0 || arr.length > 0) arr.push(`${h}小时`);
      if (m > 0 || arr.length > 0) arr.push(`${m}分钟`);
      if (s > 0 || arr.length > 0) arr.push(`${s}秒`);

      self.last_time = arr.join('');
      update.call(self, arr.join(''));

      setTimeout(function () {
          self.countDown(end, update, handle);
      }, 1000);
    }
  }
}