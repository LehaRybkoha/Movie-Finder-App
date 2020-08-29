import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies'
import dataShare from './modules/dataShare'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules: {
        movies,
        dataShare
    }
});

export default store