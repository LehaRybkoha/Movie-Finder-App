export default {
    state: {
        movieFilteredList: ''
    },
    actions: {
        SET_INPUT_DATA: ({commit}, value) => {
            commit("SET_INPUT_DATA", value);
        }
    },
    mutations: {
        SET_INPUT_DATA(state, value) {
            state.movieFilteredList = value;
        }
    },
    getters: {
        MOVIE_INPUT_DATA(state) {
            return state.movieFilteredList
        }
    }
}