"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/wallNewsDetail"
];
const getNewsDetail = (id) => {
  return utils_api.api(indexList[0], { id });
};
exports.getNewsDetail = getNewsDetail;
