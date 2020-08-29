<template>
	<div ref="v-main-wrapper" class="v-main-wrapper">
		<div ref="v-modal-overlay" class="v-modal-overlay"></div>
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

<style lang="scss">
	.open-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: rgba(1,1,1,0.8);
		z-index: 9;
	}
</style>