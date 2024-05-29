"use strict";
const utils_api = require("../../utils/api.js");
const indexList = [
  "https://tea.qingnian8.com/api/bizhi/homeBanner",
  "https://tea.qingnian8.com/api/bizhi/randomWall",
  "https://tea.qingnian8.com/api/bizhi/wallNewsList",
  "https://tea.qingnian8.com/api/bizhi/classify"
];
const getBannerUrl = () => {
  return utils_api.api(indexList[0]);
};
const getDayRandomUrl = () => {
  return utils_api.api(indexList[1]);
};
const getNoticeUrl = () => {
  return utils_api.api(indexList[2], { select: "true" });
};
const getClassifyUrl = () => {
  return utils_api.api(indexList[3], { select: "true" });
};
exports.getBannerUrl = getBannerUrl;
exports.getClassifyUrl = getClassifyUrl;
exports.getDayRandomUrl = getDayRandomUrl;
exports.getNoticeUrl = getNoticeUrl;
