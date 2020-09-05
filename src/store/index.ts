import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    msg: 'hello Store state',
    val: 2
}

const store = new Vuex.Store({
    state: {
        memos: [
            {
                id: 1,
                memoBody: 'xxxxxxxxxxx'
            }
        ],
        count: 0
    },
    mutations: {
        saveMemo(state, val) {
            const addId = state
                .memos[state.memos.length - 1]
                .id
            //const addId = state.memos.length
            val.id = addId + 1
            state
                .memos
                .push(val)
        },
        // counter
        increment(state) {
            state.count += 1
        },
        decrement(state) {
            state.count -= 1
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    }
})

export default store
