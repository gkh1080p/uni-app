"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/wallList"
];
const getClassListUrl = (id, pageNum, pageSize) => {
  return utils_api.api(indexList[0], { classid: id, pageNum, pageNum });
};
exports.getClassListUrl = getClassListUrl;
