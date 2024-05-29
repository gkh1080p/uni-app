"use strict";
function compareTimestamp(timestamp) {
  const currentTime = (/* @__PURE__ */ new Date()).getTime();
  const diff = currentTime - timestamp;
  if (diff < 60 * 1e3) {
    return "一分钟内";
  } else if (diff < 60 * 60 * 1e3) {
    return `${Math.floor(diff / (60 * 1e3))}分钟`;
  } else if (diff < 24 * 60 * 60 * 1e3) {
    return `${Math.floor(diff / (60 * 60 * 1e3))}小时`;
  } else if (diff < 30 * 24 * 60 * 60 * 1e3) {
    return `${Math.floor(diff / (24 * 60 * 60 * 1e3))}天`;
  } else if (diff < 3 * 30 * 24 * 60 * 60 * 1e3) {
    return `${Math.floor(diff / (30 * 24 * 60 * 60 * 1e3))}月`;
  } else {
    return `${Math.floor(diff / (30 * 24 * 60 * 60 * 1e3))}月`;
  }
}
exports.compareTimestamp = compareTimestamp;
