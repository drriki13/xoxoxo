import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            id: "",
            name: ""
        },
        lobby: {},
        host: false,
    },
    getters: {},
    mutations: {
        userChange(state, payload) {
            state.user = payload;
        },
        lobbyChange(state, payload) {
            state.lobby = payload;
        },
        hostChange(state, payload) {
            state.host = payload;
        }
    },
    actions: {

    },
});
