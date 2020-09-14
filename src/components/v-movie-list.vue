<template>
    <section class="movie">
        <ul class="movie__list">
            <v-movie-item
                    v-for="movie in filteredList"
                    :key="movie.filmId"
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
        components: {
            vMovieItem
        },
        computed: {
            movieFilteredList() {
               return this.$store.getters.MOVIE_INPUT_DATA
            },
            ...mapGetters([
                'MOVIES',
                'MOVIE_INPUT_DATA'
            ]),
            filteredList: function() {
                let movie = this.movieFilteredList;
                return this.MOVIES.filter(function (elem) {
                    if (movie === '') return true;
                    else return elem.nameRu.toLowerCase().indexOf(movie.toLowerCase()) > -1;
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
            position: relative;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 0;
        }
    }
</style>