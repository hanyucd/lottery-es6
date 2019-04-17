
export default class Calculate {
  /**
   * 排列组合 | 即：从 arr 中 选取 size 个元素，组成一个集合，共有多少种方法
   * @param { Array } arr 参与组合运算的数组，如：[01, 02, 03, 04]
   * @param { Number } size 组合运算的基数，如：3
   */
  static combine(arr, size) {
    let allResult = []; // 保存最后各种组合的结果

    (function calc(arr, size, result) {
      // 当前传入的数组的长度
      let arrLen = arr.length; 
      // 如果所选号码个数 小于 玩法基数，则不进行排列组合运算
      if (size > arrLen) return;
      if (size === arrLen) {
        // 当所选号码个数 等于 玩法基数，则只存在一种
        allResult.push([].concat(result, arr));
      } else {
        for (let i = 0; i < arrLen; i++) {
          let newResult = [].concat(result);
          newResult.push(arr[i]);
          if (size === 1) {
            allResult.push(newResult);
          } else {
            let newArr = [].concat(arr);
            newArr.splice(0, i + 1);
            calc(newArr, size - 1, newResult);
          }
        }
      }
    })(arr, size, []); // result 初始为 []

    return allResult;
  }
   
  /**
   * 计算当前注数
   * @param { Number } activeCount 选中号码的个数
   * @param { String } playType  玩法 R2 - R8
   */
  calcCount(activeCount, playType) {
    let count = 0; // 默认注数为 0
    const exist = this.play_list.has(playType); // play_list是 map数据结构，有 has 来判断 | 判断玩法列表中是否存在该玩法
    const arr = new Array(activeCount).fill('0');

    // charAt() 返回指定位置的字符
    if (exist && playType.charAt(0) === 'r') {
      count = Calculate.combine(arr, playType.split('')[1]).length;
    }
    return count;
  }

  /**
   * 计算奖金范围
   * @param  { Number } activeCount 当前选中的号码的个数
   * @param  { string } type   当前选中的玩法类型，如：r3(任三)
   * @return { array }        奖金范围 [min, max]
   */
  calcBonus(activeCount, playType) {
    const self = this;
    let play = playType.split('');
    let arr = new Array(play[1] * 1).fill(0);
    let min, max;

    if (play[0] === 'r') {
      let min_active = 5 - (11 - activeCount); // 最小命中数
      if (min_active > 0) {
        if ((min_active - play[1]) >= 0) {
          arr = new Array(min_active).fill(0);
          min = Calculate.combine(arr, play[1]).length
        } else {
          if (play[1] - 5 > 0 && activeCount - play[1] >= 0) {
            arr = new Array(activeCount - 5).fill('0');
            min = Calculate.combine(arr, play[1] - 5).length;
          } else {
            min = activeCount - play[1] > -1 ? 1 : 0;
          }
        }
      } else {
        min = activeCount - play[1] > -1 ? 1 : 0;
      }

      if (play[1] - 5 > 0) {
        if (activeCount - play[1] >= 0) {
          arr = new Array(activeCount - 5).fill(0);
          min = Calculate.combine(arr, play[1] - 5).length;
        } else {
          max = 0;
        }
      } else if (play[1] - 5 < 0) {
        arr = new Array(Math.min(activeCount, 5)).fill(0);
        max = Calculate.combine(arr, play[1]).length;
      } else {
        max = 1;
      }
    }
    // 返回金额范围
    return [min, max].map(item => {
      return item * self.play_list.get(playType).bonus;
    });
  }
}