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
    return 40;
  }
};
const getNavBarHeight = () => statusBarHeight() + titleBarHeight();
const getLeftIcon = () => {
  return 0;
};
exports.getLeftIcon = getLeftIcon;
exports.getNavBarHeight = getNavBarHeight;
exports.statusBarHeight = statusBarHeight;
exports.titleBarHeight = titleBarHeight;
