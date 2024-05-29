"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/setupScore",
  "https://tea.qingnian8.com/api/bizhi/downloadWall",
  "https://tea.qingnian8.com/api/bizhi/detailWall"
];
const getScoreUrl = (classid, wallId, userScore) => {
  return utils_api.api(indexList[0], { classid, wallId, userScore });
};
const getWriteDownload = (classid, wallId) => {
  return utils_api.api(indexList[1], { classid, wallId });
};
const getDetailWall = (id) => {
  return utils_api.api(indexList[2], { id });
};
exports.getDetailWall = getDetailWall;
exports.getScoreUrl = getScoreUrl;
exports.getWriteDownload = getWriteDownload;
