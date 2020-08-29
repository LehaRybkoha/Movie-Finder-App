export default {
    state: {
        value: ''
    },
    actions: {
        setInputAction: ({commit}, value) => {
            commit("setInputAction", value);
            //localStorage.setItem("value", value)
        }
    },
    mutations: {
        setInputAction(state, value) {
            state.value = value;
        }
    },
    getters: {
        MOVIE_INPUT_DATA(state) {
            return state.value
        }
    }
    // clearMessageAction() {
    //     this.state.movieFilteredList = '';
    // },
    // setMessageAction(newValue) {
    //     this.state.message = newValue;
    // },
}