"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_preview_index = require("../../api/preview/index.js");
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
    const currentInfo = common_vendor.ref();
    let score = common_vendor.ref(0);
    let isScore = common_vendor.ref(false);
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
      if (currentInfo.value.userScore) {
        isScore.value = true;
        score.value = currentInfo.value.userScore;
      }
      scoreInfo.value.open();
    };
    const clickScoreClose = () => {
      score.value = 0;
      isScore.value = false;
      scoreInfo.value.close();
    };
    const submitScore = async () => {
      common_vendor.index.showLoading({
        title: "加载中..."
      });
      let { classid, _id: willId } = currentInfo.value;
      let res = await api_preview_index.getScoreUrl(classid, willId, score.value);
      common_vendor.index.hideLoading();
      if (res.data.errCode === 0) {
        common_vendor.index.showToast({
          title: "评分成功",
          icon: "none"
        });
        ClassListObjs.value[currentIndex.value].userScore = score.value;
        common_vendor.index.setStorageSync("storeClassList", ClassListObjs.value);
        clickScoreClose();
      }
    };
    const InfoBack = () => {
      common_vendor.index.navigateBack({
        delta: 1,
        fail: (err) => {
          common_vendor.index.reLaunch({
            url: "/pages/index/index"
          });
        }
      });
    };
    const storeClassList = common_vendor.index.getStorageSync("storeClassList") || [];
    const ClassListObjs = common_vendor.ref();
    ClassListObjs.value = storeClassList.map((item) => {
      return {
        ...item,
        picurl: item.smallPicurl.replace("_small.webp", ".jpg")
      };
    });
    const currentId = common_vendor.ref(null);
    const currentIndex = common_vendor.ref(null);
    common_vendor.onLoad(async (e) => {
      currentId.value = e.id;
      if (e.type) {
        let rbs = await api_preview_index.getDetailWall(e.id);
        ClassListObjs.value = rbs.data.data.map((item) => {
          return {
            ...item,
            picurl: item.smallPicurl.replace("_small.webp", ".jpg")
          };
        });
      }
      currentIndex.value = ClassListObjs.value.findIndex((item) => {
        return item._id == e.id;
      });
      currentInfo.value = ClassListObjs.value[currentIndex.value];
      score.value = currentInfo.value.score;
    });
    const swiperChange = (e) => {
      currentIndex.value = e.detail.current;
      currentInfo.value = ClassListObjs.value[currentIndex.value];
      score.value = currentInfo.value.score;
    };
    const clickDownLoad = async () => {
      try {
        common_vendor.index.showLoading({
          title: "下载中",
          mask: true
        });
        let { classid, _id: willId } = currentInfo.value;
        let res = await api_preview_index.getWriteDownload(classid, willId);
        if (res.data.errCode != 0) {
          throw new Error("下载过于频繁");
        }
        ;
        common_vendor.index.getImageInfo({
          src: currentInfo.value.picurl,
          success: (res2) => {
            common_vendor.index.saveImageToPhotosAlbum({
              filePath: res2.path,
              // 授权成功
              success: (e) => {
                common_vendor.index.showToast({
                  title: "保存成功，请到相册查看",
                  icon: "none"
                });
              },
              // 授权失败
              fail: (err) => {
                if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                  common_vendor.index.showToast({
                    title: "保存失败，请重新点击下载",
                    icon: "none"
                  });
                  return;
                }
                common_vendor.index.showModal({
                  title: "授权提示",
                  content: "需要授权保存相册",
                  success: (res_show) => {
                    if (res_show.confirm) {
                      common_vendor.index.openSetting({
                        success: (setting) => {
                          if (setting.authSetting["scope.writePhotosAlbum"]) {
                            common_vendor.index.showToast({
                              title: "授权成功",
                              icon: "none"
                            });
                          } else {
                            common_vendor.index.showToast({
                              title: "授权失败",
                              icon: "none"
                            });
                          }
                        }
                      });
                    }
                  }
                });
              },
              complete: (e) => {
                common_vendor.index.showToast({
                  title: e,
                  icon: "none"
                });
                common_vendor.index.hideLoading();
              }
            });
          }
        });
      } catch (e) {
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "好果子图画",
        path: "/pages/preview/preview?id=" + currentId.value + "&type=share"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "好果子壁纸",
        query: "id=" + currentId.value + "&type=share"
      };
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(ClassListObjs.value, (item, index, i0) => {
          return common_vendor.e({
            a: index <= currentIndex.value + 1 && index >= currentIndex.value - 1
          }, index <= currentIndex.value + 1 && index >= currentIndex.value - 1 ? {
            b: common_vendor.o(maskChange, item._id),
            c: item.picurl
          } : {}, {
            d: item._id
          });
        }),
        b: currentIndex.value,
        c: common_vendor.o(swiperChange),
        d: maskState.value
      }, maskState.value ? {
        e: common_vendor.p({
          type: "left",
          size: "30",
          color: "##ffffff"
        }),
        f: common_vendor.o(InfoBack),
        g: common_vendor.unref(utils_system.statusBarHeight)() + "px",
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(ClassListObjs.value.length),
        j: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        k: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月yy日"
        }),
        l: common_vendor.p({
          type: "info",
          size: "30"
        }),
        m: common_vendor.o(clickInfo),
        n: common_vendor.p({
          type: "star",
          size: "30"
        }),
        o: common_vendor.t(currentInfo.value.userScore ? currentInfo.value.userScore : common_vendor.unref(score)),
        p: common_vendor.o(clickScore),
        q: common_vendor.p({
          type: "download-filled",
          size: "30"
        }),
        r: common_vendor.o(clickDownLoad)
      } : {}, {
        s: common_vendor.o(clickInfoClose),
        t: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        v: common_vendor.t(currentInfo.value._id),
        w: common_vendor.t(currentInfo.value.nickname),
        x: common_vendor.p({
          readonly: "true",
          value: common_vendor.unref(isScore) ? currentInfo.value.userScore : common_vendor.unref(score)
        }),
        y: common_vendor.t(common_vendor.unref(score)),
        z: common_vendor.t(currentInfo.value.description),
        A: common_vendor.f(currentInfo.value.tabs, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        B: common_vendor.sr(infoPopup, "2dad6c07-6", {
          "k": "infoPopup"
        }),
        C: common_vendor.p({
          type: "bottom",
          ["background-color"]: "white",
          borderRadius: "30rpx 30rpx 0 0"
        }),
        D: common_vendor.t(common_vendor.unref(isScore) ? "已评分过了~" : "壁纸评分"),
        E: common_vendor.o(clickScoreClose),
        F: common_vendor.p({
          type: "closeempty",
          size: "18",
          color: "#999"
        }),
        G: common_vendor.o(($event) => common_vendor.isRef(score) ? score.value = $event : score = $event),
        H: common_vendor.p({
          allowHalf: true,
          disabled: common_vendor.unref(isScore),
          ["disabled-color"]: "#FFCA3E",
          modelValue: common_vendor.unref(score)
        }),
        I: common_vendor.t(common_vendor.unref(score)),
        J: common_vendor.o(submitScore),
        K: common_vendor.unref(isScore) || !common_vendor.unref(score),
        L: common_vendor.sr(scoreInfo, "2dad6c07-9", {
          "k": "scoreInfo"
        }),
        M: common_vendor.p({
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
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
