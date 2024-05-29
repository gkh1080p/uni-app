"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const maskState = common_vendor.ref(true);
    const infoPopup = common_vendor.ref(null);
    let score = common_vendor.ref(0);
    const scoreInfo = common_vendor.ref(null);
    const maskChange = () => {
      maskState.value = !maskState.value;
    };
    const clickInfo = () => {
      infoPopup.value.open();
    };
    const clickInfoClose = () => {
      infoPopup.value.close();
    };
    const clickScore = () => {
      scoreInfo.value.open();
    };
    const clickScoreClose = () => {
      scoreInfo.value.close();
    };
    const submitScore = () => {
      console.log("提交成功");
      scoreInfo.value.close();
    };
    const InfoBack = () => {
      common_vendor.index.navigateBack({
        delta: 1
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(15, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(maskChange),
        c: common_assets._imports_0$2,
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "left",
          size: "30",
          color: "#14A76C"
        }),
        f: common_vendor.o(InfoBack),
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月yy日"
        }),
        i: common_vendor.p({
          type: "info",
          size: "30"
        }),
        j: common_vendor.o(clickInfo),
        k: common_vendor.p({
          type: "star",
          size: "30"
        }),
        l: common_vendor.t(common_vendor.unref(score)),
        m: common_vendor.o(clickScore),
        n: common_vendor.p({
          type: "download-filled",
          size: "30"
        })
      } : {}, {
        o: common_vendor.o(clickInfoClose),
        p: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        q: common_vendor.p({
          readonly: "true",
          value: common_vendor.unref(score)
        }),
        r: common_vendor.t(common_vendor.unref(score)),
        s: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        t: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        v: common_vendor.p({
          type: "bottom",
          ["background-color"]: "white",
          borderRadius: "30rpx 30rpx 0 0"
        }),
        w: common_vendor.o(clickScoreClose),
        x: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        y: common_vendor.o(($event) => common_vendor.isRef(score) ? score.value = $event : score = $event),
        z: common_vendor.p({
          modelValue: common_vendor.unref(score)
        }),
        A: common_vendor.t(common_vendor.unref(score)),
        B: common_vendor.o(submitScore),
        C: !common_vendor.unref(score),
        D: common_vendor.sr(scoreInfo, "2dad6c07-9", {
          "k": "scoreInfo"
        }),
        E: common_vendor.p({
          type: "center",
          ["background-color"]: "white",
          borderRadius: "20rpx",
          ["is-mask-click"]: false
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "E:/桌面/uni-app/练习/wall-uni/pages/preview/preview.vue"]]);
tt.createPage(MiniProgramPage);
