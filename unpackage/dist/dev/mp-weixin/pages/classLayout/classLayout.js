"use strict";
const common_vendor = require("../../common/vendor.js");
const api_classLayout_index = require("../../api/classLayout/index.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "classLayout",
  setup(__props) {
    const classifys = common_vendor.ref([]);
    const getClassify = async () => {
      try {
        const res = await api_classLayout_index.getClassifyUrl();
        if (res.data.errCode === 0) {
          classifys.value = res.data.data;
        } else {
          throw new Error("密钥错误");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getClassify();
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "好果子图画",
        path: "/pages/classLayout/classLayout"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "好果子壁纸"
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "分类"
        }),
        b: common_vendor.f(classifys.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "dfc3691a-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-dfc3691a"], ["__file", "E:/桌面/uni-app/练习/wall-uni/pages/classLayout/classLayout.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
