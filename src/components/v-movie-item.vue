<template>
    <li class="movie__item">
        <h2 class="movie__item-title">{{ movie_data.title }}</h2>
        <img :src="require('../assets/images/' + movie_data.image)" alt="" class="movie__item-img">
        <p class="movie__item-year">{{ movie_data.year }}</p>
    </li>
</template>

<script>
    export default {
        name: "v-movie-item",
        props: {
            movie_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
    }
</script>

<style lang="scss">
    .movie  {
        &__item {
            margin: 10px;
            &-title {
                text-align: center;
            }
            &-year {
                text-align: center;
            }
            &-img {
                width: 220px;
            }
        }
    }
</style>