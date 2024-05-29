"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/searchWall"
];
const getSearchWall = (keyword, pageNum, pageSize) => {
  return utils_api.api(indexList[0], { keyword, pageNum, pageSize });
};
exports.getSearchWall = getSearchWall;
