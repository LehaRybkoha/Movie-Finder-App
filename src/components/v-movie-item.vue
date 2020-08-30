<template>
    <li @click="toggleItem" ref="movie__item" class="movie__item">
        <h2 class="movie__item-title">{{ movie_data.nameRu }}</h2>
        <img ref="movie__item-img" :src="movie_data.posterUrlPreview" alt="" class="movie__item-img">
        <p class="movie__item-year">{{ movie_data.year }}</p>
    </li>
</template>

<script>
    export default {
        name: "v-movie-item",
        data() {
            return {
                closing: false
            }
        },
        props: {
            movie_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            open() {
                this.closing = true;
                this.$refs["movie__item"].classList.add('open-item');
                this.$refs["movie__item-img"].classList.add('open-img');
                document.querySelector('.v-modal-overlay').classList.add('open-overlay');
            },
            close() {
                this.closing = false;
                this.$refs["movie__item"].classList.remove('open-item');
                this.$refs["movie__item-img"].classList.remove('open-img');
                document.querySelector('.v-modal-overlay').classList.remove('open-overlay');
            },
            toggleItem() {
                if (this.closing) {
                    this.close()
                } else {
                    this.open()
                }
            }
        }
    }
</script>


<style lang="scss">
    .movie  {
        &__item {
            margin: 10px;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            &-title {
              text-align: center;
              max-width: 220px;
              margin: 20px auto;
            }
            &-year {
                text-align: center;
            }
            &-img {
                width: 220px;
                height: 330px;
            }
        }
    }
    .open-item {
      position: fixed;
      background-color: rgba(255, 255, 255, 0.8);
      z-index: 10;
      left: 50%;
      margin-left: -200px;
    }
    .open-img {
      width: 400px;
      height: fit-content;
    }
</style>