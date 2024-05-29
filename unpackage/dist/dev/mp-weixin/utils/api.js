"use strict";
const common_vendor = require("../common/vendor.js");
function api(url, parameter, method = "GET") {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      method,
      header: {
        "access-key": "gkh1080p"
      },
      data: parameter,
      success: (res) => {
        if (res.data.errCode === 0) {
          resolve(res);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.api = api;
