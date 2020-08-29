<template>
	<div class="v-main-wrapper">
		<v-header />
		<v-search />
		<v-movie-list/>
	</div>
</template>

<script>
	import vHeader from './v-header'
	import vSearch from './v-search'
	import vMovieList from './v-movie-list'

	export default {
		name: 'v-main-wrapper',
		components: {
			vHeader,
			vSearch,
			vMovieList
		}
	}
</script>

<style>

</style>