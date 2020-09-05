import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    memos: [
      {
        id: 1,
        body: 'xxxxxxxxxxx',
      },
    ],
    count: 0,
  },
  mutations: {
    saveMemo(state, memo) {
      const addId = state.memos[state.memos.length - 1].id
      //const addId = state.memos.length
      memo.id = addId + 1
      state.memos.push(memo)
    },
    // counter
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    },
  },
  getters: {
    double(state) {
      return state.count * 2
    },
  },
})

export default store
