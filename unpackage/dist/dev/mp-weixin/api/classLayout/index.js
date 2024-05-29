"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/classify"
];
const getClassifyUrl = () => {
  return utils_api.api(indexList[0], { pageSize: 100 });
};
exports.getClassifyUrl = getClassifyUrl;
