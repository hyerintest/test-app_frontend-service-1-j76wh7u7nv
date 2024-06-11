import Vuex from 'vuex';
import _ from 'lodash-es';

export default new Vuex.Store({
    state: {
        authToken: null,
        accountInfo: null,
    },
    getters: {
        isAuthenticated: (state) => {
            if (_.isEmpty(state.authToken)) {
                state.authToken = localStorage.getItem(process.env.VUE_APP_AUTH_TOKEN_HEADER_KEY);
            }
            return !_.isEmpty(state.authToken);
        },
        authToken: (state) => {
            if (_.isEmpty(state.authToken)) {
                state.authToken = localStorage.getItem(process.env.VUE_APP_AUTH_TOKEN_HEADER_KEY);
            }
            return state.authToken;
        }
    },
    mutations: {
        SET_AUTH_TOKEN(state, token) {
            state.authToken = token;
            if (_.isEmpty(token)) {
                localStorage.removeItem(process.env.VUE_APP_AUTH_TOKEN_HEADER_KEY);
            } else {
                localStorage.setItem(process.env.VUE_APP_AUTH_TOKEN_HEADER_KEY, token);
            }
        },
        SET_ACCOUNT_INFO(state, info) {
            state.accountInfo = info;
        }
    }
});