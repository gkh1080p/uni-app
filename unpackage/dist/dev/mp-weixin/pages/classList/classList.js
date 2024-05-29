"use strict";
const common_vendor = require("../../common/vendor.js");
const api_classList_index = require("../../api/classList/index.js");
const api_user_index = require("../../api/user/index.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classList",
  setup(__props) {
    let id = common_vendor.ref("");
    let name = common_vendor.ref("");
    let pageNum = common_vendor.ref(1);
    let type = common_vendor.ref();
    const noData = common_vendor.ref(false);
    common_vendor.onLoad(async (e) => {
      if (e.type)
        type.value = e.type;
      if (e.id)
        id.value = e.id;
      name.value = e.name;
      common_vendor.index.setNavigationBarTitle({
        title: e.name
      });
      getClassList();
    });
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      debounce(() => {
        pageNum.value++;
        getClassList(pageNum.value);
      }, 1e3)();
    });
    const classList = common_vendor.ref([]);
    const getClassList = async (pageNum2 = 1, pageSize = 12) => {
      try {
        let res;
        if (id.value)
          res = await api_classList_index.getClassListUrl(id.value, pageNum2, pageSize);
        if (type.value)
          res = await api_user_index.getHistoryList(type.value, pageNum2, pageSize);
        if (res.data.errCode === 0) {
          classList.value = [...classList.value, ...res.data.data];
          common_vendor.index.setStorageSync("storeClassList", classList.value);
          if (res.data.data.length < pageSize) {
            noData.value = true;
          }
        } else {
          throw new Error("密钥出错");
        }
      } catch (e) {
        console.log(e);
      }
    };
    function debounce(func, delay) {
      let timer;
      return function() {
        if (timer)
          clearTimeout(timer);
        timer = setTimeout(() => {
          func.call(this, arguments);
        }, delay);
        timer = null;
      };
    }
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "好果子图画",
        path: "/pages/classList/classList?id=" + id.value + "&name=" + name.value
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "好果子壁纸",
        query: "id=" + id.value + "&name=" + name.value
      };
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storeClassList");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !classList.value.length && noData.value
      }, !classList.value.length && noData.value ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: "/pages/preview/preview?id=" + item._id,
            c: item._id
          };
        }),
        d: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-104357ab"], ["__file", "E:/桌面/uni-app/练习/wall-uni/pages/classList/classList.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
