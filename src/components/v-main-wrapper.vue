<template>
	<div class="v-main-wrapper">
		<v-header />
<!--		<v-search @change="change" v-model="movieFilteredList"/>-->
		<v-search />
		<v-movie-list/>
	</div>
</template>

<script>
	import vHeader from './v-header'
	import vSearch from './v-search'
	import vMovieList from './v-movie-list'
	//import store from '../store'
	//import { mapState } from 'vuex'

	export default {
		name: 'v-main-wrapper',
		data() {
			return {

				//sharedState: store.state.dataShare.movieFilteredList
			}
		},

		computed: {

			// ...mapState('router', {
			// 	currentTitle: state => state.meta.title
			// })
		},
		methods: {
			change: function() {
				this.$emit('update', 7);
			}
		},
		watch: {

		},
		components: {
			vHeader,
			vSearch,
			vMovieList
		}
	}
</script>

<style>

</style>