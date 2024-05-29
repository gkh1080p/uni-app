"use strict";
const common_vendor = require("../common/vendor.js");
let system = common_vendor.index.getSystemInfoSync();
let statusBarHeight = () => system.statusBarHeight || 0;
const titleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    let { top, height } = common_vendor.index.getMenuButtonBoundingClientRect();
    let titleBarHeight2 = height + (top - statusBarHeight()) * 2;
    return titleBarHeight2;
  } else {
    return 80;
  }
};
const getLeftIcon = () => {
  let { leftIcon: { left, width } } = tt.getCustomButtonBoundingClienRect();
  return left + parseInt(width) + 5;
};
exports.getLeftIcon = getLeftIcon;
exports.statusBarHeight = statusBarHeight;
exports.titleBarHeight = titleBarHeight;
