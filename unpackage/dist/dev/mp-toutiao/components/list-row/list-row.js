"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "list-row",
  props: {
    objs: {
      type: Array,
      // 使用 PropType<string[]> 定义 icons 的类型
      default: []
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.objs, (item, k0, i0) => {
          return {
            a: "ba6fa1b6-0-" + i0,
            b: common_vendor.p({
              type: item.icon,
              size: "30"
            }),
            c: common_vendor.t(item.text),
            d: common_vendor.t(item.num),
            e: "ba6fa1b6-1-" + i0,
            f: item.url
          };
        }),
        b: common_vendor.p({
          type: "right",
          size: "30"
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ba6fa1b6"], ["__file", "E:/桌面/uni-app/练习/wall-uni/components/list-row/list-row.vue"]]);
tt.createComponent(Component);
