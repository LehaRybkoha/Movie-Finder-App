<template>
    <section class="search">

        <div class="search-wrapper">
            <div class="search-block">
                <input type="text" class="search-block__input" v-model="input_value">
                <button type="button" @click="sendData" class="search-block__button">Search</button>
            </div>
            test: {{ $store.state.dataShare.value }}
            <p class="search__description">Sharing a few of our favorites movies</p>
        </div>
    </section>
</template>

<script>
    import store from '../store'
    import { mapGetters } from 'vuex'

    export default {
        name: 'v-search',
       // props: ['value'],
        data() {
            return {
                movieFilteredList: '',
                testText: this.$store.getters.MOVIE_INPUT_DATA
            }
        },
        computed: {
            input_value: {
                get() {
                    return this.$store.state.dataShare.value
                },
                set(value) {
                    this.$store.dispatch("setInputAction", value)
                }
            },
            ...mapGetters([
                'MOVIE_INPUT_DATA'
            ]),

            // setDataSearchAction(newValue) {
            //     return this.state.movieFilteredList = newValue;
            // },
        },
        methods: {
            sendData: function () {
                console.log('Sent');
                store.commit('setMessageAction', this.movieFilteredList);
                return console.log(this.$store.getters.MOVIE_INPUT_DATA)
            }
        },
        watch: {
            onKeyUp() {

            },
            // movieFilteredList(val) {
            //     this.$emit('input', val)
            // },
            '$route': {
                handler(route) {
                    route.meta.movieFilteredList = this.movieFilteredList;
                },
                immediate: true
            }
        }
    }
</script>

<style lang="scss">
    .search {
        display: flex;
        justify-content: center;
        &-block {
            display: flex;
            margin-top: 20px;
            &__button {
                text-transform: uppercase;
                padding: 5px;
                border: 2px solid #000;
                background: none;
                cursor: pointer;
            }
            &__input {
                min-width: 365px;
                border: 1px solid #000;
                margin-right: 5px;
            }
        }
        &__description {
            text-align: center;
        }
    }
</style>