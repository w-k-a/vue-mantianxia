import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    nav_li: 0,
    new_li: 0,
    alldata: [], // 所有的数据
    count: 1,
    totall: 0,
    divdata: [], // 分页
    middata: [],
    lab1: '人气榜',
    lab2: '',
    lab3: '',
    info: [],
    text: '漫画',
    windh: 0,
    top: 50,
    a: 1,
    url: 'http://localhost:8081',
    head_flag: 1
  },
  mutations: {
    head_flag: function (state, val) {
      state.head_flag = val
    },
    nav_li: function (state, val) {
      state.nav_li = val
    },
    new_li: function (state, val) {
      state.new_li = val
    },
    setdivData: function (state, value) {
      state.divdata = value
    },
    setCount: function (state, value) {
      state.count = value
    },
    setallData: function (state, value) {
      state.alldata = value
    },
    setMidData: function (state, value) {
      state.middata = value
    },
    setTotall: function (state, value) {
      state.totall = value
    },
    settotall: function (state, value) {
      state.totall = value
    },
    change_lab1: function (state, lab) {
      state.lab1 = lab
    },
    change_lab2: function (state, lab) {
      state.lab2 = lab
    },
    change_lab3: function (state, lab) {
      state.lab3 = lab
    },
    change_text: function (state, text) {
      state.text = text
    },
    wind_hight: function (state, h) {
      if (state.windh === 0) {
        state.windh = document.documentElement.clientHeight
      } else {
        state.windh = h
      }
    },
    wind_hight_jian: function (state, h) {
      state.a = 0
      state.top -= h
      setTimeout(() => {
        state.a = 1
      }, 1000)
    },
    wind_hight_init: function (state, flag) {
      state.a = 0
      if (flag === 1) {
        state.top = 50
      } else {
        state.top -= (flag - 50) * 5
      }
      setTimeout(() => {
        state.a = 1
      }, 1000)
    },
    wind_hight_jia: function (state, h) {
      state.a = 0
      state.top += h
      setTimeout(() => {
        state.a = 1
      }, 1000)
    },
    addinfo: function (state, info) {
      state.info = info
    }
  },
  actions: {
    handsetdivdata(context, value) {
      context.commit('setdivData', value)
    },
    handsetCount(context, value) {
      context.commit('setCount', value)
    },
    handsetalldata(context, value) {
      context.commit('setallData', value)
    },
    handsetmiddata(context, value) {
      context.commit('setMidData', value)
    },
    handsetTotall(context, value) {
      context.commit('setTotall', value)
    },
    handsettotal(context, value) {
      context.commit('settotall', value)
    }
  }
})
