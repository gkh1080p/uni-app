"use strict";
const common_vendor = require("../../common/vendor.js");
const api_index_index = require("../../api/index/index.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getBanner = async () => {
      try {
        const res = await api_index_index.getBannerUrl();
        if (res.data.errCode === 0) {
          bannerList.value = res.data.data;
        } else {
          throw new Error("密钥错误");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getBanner();
    const randomList = common_vendor.ref([]);
    const getDayRandom = async () => {
      try {
        const res = await api_index_index.getDayRandomUrl();
        if (res.data.errCode === 0) {
          randomList.value = res.data.data;
        } else {
          throw new Error("密钥错误");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getDayRandom();
    const noticeList = common_vendor.ref([]);
    const getNotice = async () => {
      try {
        const res = await api_index_index.getNoticeUrl();
        if (res.data.errCode === 0) {
          noticeList.value = res.data.data;
        } else {
          throw new Error("密钥错误");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getNotice();
    const classify = common_vendor.ref([]);
    const getClassify = async () => {
      try {
        const res = await api_index_index.getClassifyUrl();
        if (res.data.errCode === 0) {
          classify.value = res.data.data;
        } else {
          throw new Error("密钥错误");
        }
      } catch (e) {
        console.log(e);
      }
    };
    getClassify();
    const goPreview = (id) => {
      common_vendor.index.setStorageSync("storeClassList", randomList.value);
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview?id=" + id
      });
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "好果子图画",
        path: "/pages/classList/classList"
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
          title: "首页"
        }),
        b: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        c: common_vendor.p({
          type: "notification-filled",
          size: "25"
        }),
        d: common_vendor.f(noticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "/pages/notice/detail?id=" + item._id,
            c: item._id
          };
        }),
        e: common_vendor.p({
          type: "forward",
          size: "16",
          color: "$theme-color"
        }),
        f: common_vendor.p({
          type: "calendar-filled",
          size: "15",
          color: "$brand-theme-color"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "MM年dd日"
        }),
        h: common_vendor.f(randomList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: common_vendor.o(($event) => goPreview(item._id), item._id),
            c: item._id
          };
        }),
        i: common_vendor.f(classify.value, (item, k0, i0) => {
          return {
            a: "1cf27b2a-7-" + i0,
            b: common_vendor.p({
              item
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "E:/桌面/uni-app/练习/wall-uni/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
