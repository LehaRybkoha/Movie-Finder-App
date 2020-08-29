<template>
    <header class="header">
        <h1 class="header__title">Movie Finder</h1>
    </header>
</template>

<script>
    export default {
        name: 'v-header',
        props: {},
        computed: {},
        methods: {},
        watch: {},
    }
</script>

<style lang="scss">
    .header {
        background-color: #2b2e37;
        &__title {
            font-size: 40px;
            text-transform: uppercase;
            color: #fff;
            text-align: center;
            padding: 15px 0;
            margin: 0;
        }
    }
</style>