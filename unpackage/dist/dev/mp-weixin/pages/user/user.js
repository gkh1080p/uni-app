"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_user_index = require("../../api/user/index.js");
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
    let info = common_vendor.ref();
    common_vendor.ref();
    common_vendor.ref();
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
          icon: "notification-filled",
          url: "/pages/notice/detail?id=653507c6466d417a3718e94b"
        },
        {
          text: "常见问题",
          icon: "chat-filled",
          url: "/pages/notice/detail?id=6536358ce0ec19c8d67fbe82"
        }
      ]
    );
    const getUser = async () => {
      let res = await api_user_index.getUserInfo();
      if (res.data.errCode == 0) {
        info.value = res.data.data;
        obj1.value[0].num = res.data.data.downloadSize;
        obj1.value[1].num = res.data.data.scoreSize;
        obj1.value[0].url = "/pages/classList/classList?name=我的下载&type=download";
        obj1.value[1].url = "/pages/classList/classList?name=我的评分&type=score";
      }
    };
    common_vendor.onLoad(() => {
      getUser();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        b: common_vendor.unref(info) && common_vendor.unref(info).IP
      }, common_vendor.unref(info) && common_vendor.unref(info).IP ? {
        c: common_vendor.t(common_vendor.unref(info).IP)
      } : {}, {
        d: common_vendor.unref(info) && common_vendor.unref(info).address.country
      }, common_vendor.unref(info) && common_vendor.unref(info).address.country ? {
        e: common_vendor.t(common_vendor.unref(info).address.country),
        f: common_vendor.t(common_vendor.unref(info).address.province),
        g: common_vendor.t(common_vendor.unref(info).address.city)
      } : {}, {
        h: common_vendor.p({
          objs: common_vendor.unref(obj1)
        }),
        i: common_vendor.p({
          objs: common_vendor.unref(obj2)
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "E:/桌面/uni-app/练习/wall-uni/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
