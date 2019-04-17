/*
 * 接口模块
 */

import $ from 'jquery';

export default class Interface {

  /**
   * 获取遗漏号码数据
   * 业务知识：这个号码有多少期没有开出了
   * @param { String } issue 当前期号
   */
  getOmit(issue) {
    let self = this;

    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: '/get/omit',
        data: {
          issue
        },
        dataType: 'json',
        success(res) {
          self.setOmit(res.data); // 调用 Base类中 setOmit()方法 | 设置遗落数据
          resolve.call(self, res);
        },
        error(err) {
          reject.call(err);
        }
      });
    });
  }

   /**
    * 获取开奖号码
    * @param { String } issue 当前期号
    */
  getOpenCode(issue) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'GET',
        url: '/get/opencode',
        data: {
          issue
        },
        dataType: 'json',
        success(res) {
          resolve(res);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }

  /*
   *  获取当前状态
   */
  getState(issue) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: "/get/state",
        data: {
          issue
        },
        dataType: "json",
        success(res) {
          resolve(res);
        },
        error(err) {
          reject(err);
        }
      });
    });
  }
}