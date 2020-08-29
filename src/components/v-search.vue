<template>
    <section class="search">
        <div class="search-wrapper">
            <div class="search-block">
                <input type="text" class="search-block__input" v-model="movieFilteredList">
            </div>
            <p class="search__description">Sharing a few of our favorites movies</p>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'v-search',
        computed: {
            movieFilteredList: {
                get() {
                    return this.$store.state.dataShare.movieFilteredList
                },
                set(value) {
                    this.$store.dispatch("SET_INPUT_DATA", value)
                }
            },
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
                min-height: 25px;
                border-radius: 3px;
            }
        }
        &__description {
            text-align: center;
        }
    }
</style>