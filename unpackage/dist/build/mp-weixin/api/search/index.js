"use strict";const e=require("../../utils/api.js"),a=["https://tea.qingnian8.com/api/bizhi/searchWall"];exports.getSearchWall=(i,t,s)=>e.api(a[0],{keyword:i,pageNum:t,pageSize:s});
