import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

let api_path = "/payment.json";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      RRData: [],
      RJData: [],
  },
  getters:{
    RRpayments: (state) => state.RRData,
    RJpayments: (state) => state.RJData,
  },
  mutations: {
    fetchRR (state , {res}) {
        // console.log();
        state.RRData = res.data.income
    },
    fetchRJ (state , {res}) {
        state.RJData = res.data.outcome
    },
    addRR(state , {payload}) {
        state.RRData.push(payload);
    },
    addRJ(state , {payload}) {
        state.RJData.push(payload);
    },
  },
  actions: {
    async fetchRRPayment({commit}){
        let res = await Axios.get(api_path);
        commit('fetchRR' , {res})
    },
    async fetchRJPayment({commit}){
        let res = await Axios.get(api_path);
        commit('fetchRJ' , {res})
    },
    addRRPayment ({commit} , payload){
        commit('addRR', {payload})

    },
    addRJPayment ({commit} , payload){
        commit('addRJ', {payload})

    },
  },
  modules: {
  }
})
