"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_common = require("../../utils/common.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: {}
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: common_vendor.t(common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime)),
        e: "/pages/classList/classList?id=" + __props.item._id + "&name=" + __props.item.name
      } : {}, {
        f: __props.isMore
      }, __props.isMore ? {
        g: common_assets._imports_0,
        h: common_vendor.p({
          type: "more-filled",
          size: "40",
          color: "white"
        })
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"], ["__file", "E:/桌面/uni-app/练习/wall-uni/components/theme-item/theme-item.vue"]]);
wx.createComponent(Component);
