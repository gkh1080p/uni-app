"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_list_row2 = common_vendor.resolveComponent("list-row");
  _easycom_list_row2();
}
const _easycom_list_row = () => "../../components/list-row/list-row.js";
if (!Math) {
  _easycom_list_row();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    let obj1 = common_vendor.ref(
      [
        {
          text: "我的下载",
          icon: "download-filled",
          num: 0
        },
        {
          text: "我的评分",
          icon: "star-filled",
          num: 0
        }
      ]
    );
    let obj2 = common_vendor.ref(
      [
        {
          text: "订阅更新",
          icon: "notification-filled"
        },
        {
          text: "我的评分",
          icon: "chat-filled"
        }
      ]
    );
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          objs: common_vendor.unref(obj1)
        }),
        b: common_vendor.p({
          objs: common_vendor.unref(obj2)
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "E:/桌面/uni-app/练习/wall-uni/pages/user/user.vue"]]);
tt.createPage(MiniProgramPage);
