import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: "",
            name: ""
        },
        lobby: {
            id: "",
            name: ""
        },
        host: false
    },
    getters: {},
    mutations: {
        userChange(state, payload) {
            state.user = payload;
        },
        lobbyChange(state, payload) {
            state.lobby = payload;
        }
    },
    actions: {},
});
