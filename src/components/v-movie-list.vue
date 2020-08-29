<template>
    <section class="movie">
        <ul class="movie__list">

            <v-movie-item
                    v-for="movie in filteredList"
                    :key="movie.id"
                    :movie_data="movie"
            />
        </ul>
    </section>
</template>

<script>
    import vMovieItem from './v-movie-item'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'v-movie-list',
        props: ['value'],
        data() {
            return {
                movieFilteredList: ''
            }
        },
        created: function() {
            this.$parent.$on('update', this.setValue);
        },
        watch: {
            // '$route': {
            //     handler(route) {
            //         this.movieFilteredList= route.meta.movieFilteredList
            //     },
            //     immediate: true
            // }
        },
        components: {
            vMovieItem
        },
        computed: {
            ...mapGetters([
                'MOVIES'
            ]),
            filteredList: function() {
                let movie = this.movieFilteredList;
                return this.MOVIES.filter(function (elem) {
                    if (movie === '') return true;
                    else return elem.title.toLowerCase().indexOf(movie.toLowerCase()) > -1;
                })
            }
        },
        methods: {
            ...mapActions([
                'GET_MOVIES_FROM_API'
            ]),
        },
        mounted() {
            this.GET_MOVIES_FROM_API()
                .then((response) => {
                    if (response.data) {
                        console.log('Data arrived')
                    }
                })
        }
    }
</script>

<style lang="scss">
    .movie {
        max-width: 1200px;
        margin: 0 auto;
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }
</style>