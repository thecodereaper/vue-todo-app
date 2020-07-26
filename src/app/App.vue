<template>
	<div>
		<TheHeader/>
		<TheMenubar/>
		<router-view/>
	</div>
</template>

<script>
    import TheHeader from './components/layout/TheHeader';
    import TheMenubar from './components/layout/TheMenubar';

    export default {
        name: 'App',
        components: {
            TheHeader,
            TheMenubar
        }
    };
</script>

<style>

</style>
