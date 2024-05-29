"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/userInfo",
  "https://tea.qingnian8.com/api/bizhi/userWallList"
];
const getUserInfo = () => {
  return utils_api.api(indexList[0]);
};
const getHistoryList = (type, pageNum, pageSize) => {
  return utils_api.api(indexList[1], { type, pageNum, pageSize });
};
exports.getHistoryList = getHistoryList;
exports.getUserInfo = getUserInfo;
