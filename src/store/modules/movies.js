import axios from 'axios'

export default {
    state: {
        movies: []
    },
    actions: {
        GET_MOVIES_FROM_API({commit}) {
            return axios('https://kinopoiskapiunofficial.tech/api/v2.1/films/top?type=BEST_FILMS_LIST&page=10&listId=1', {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                    'X-API-KEY': '4aaa82c7-2c53-40cc-8205-3719863a0373'
                }
            })
                .then((movies) => {
                    commit('SET_MOVIES_TO_STATE', movies.data.films);
                    console.log(movies.data.films)
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