import axios from 'axios'

export default {
    state: {
        movies: []
    },
    actions: {
        GET_MOVIES_FROM_API({commit}) {
            return axios('http://localhost:3000/movies', {
                method: "GET"
            })
                .then((movies) => {
                    commit('SET_MOVIES_TO_STATE', movies.data);
                    return movies;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                })
        },
    },
    mutations: {
        SET_MOVIES_TO_STATE: (state, movies) => {
            state.movies = movies;
        },
    },
    getters: {
        MOVIES(state) {
            return state.movies;
        },
    }
}