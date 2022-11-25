import { createStore } from 'vuex'
import config from '../config.js'
export const store = createStore({
    state() {
        return {
            users: [],
            loading: false,
            page: 1
        }
    },
    mutations: {
        // update users vào state
        setUsers(state, users) {
            state.users = users
        },
        //loading xuất hiện khi data chưa kịp mount
        setLoading(state, loading) {
            state.loading = loading
        },
        setPage(state, page) {
            state.page = page
        }

    },
    actions: {
        // getUsers : lấy data từ trên API về
        async getUsers({ state, commit }) {
            commit('setLoading', true)
            let response = await fetch(config.USER_API_URL + '?page=' + state.page)
                // config lấy data từ API
            let users = await response.json();
            // chuyển response sang dạng json()
            commit('setUsers', users)
            commit('setLoading', false)
        },
        changePage({ commit }, page) {
            commit('setPage', page)
        }
    }

})