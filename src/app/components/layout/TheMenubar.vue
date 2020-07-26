<template>
	<div class="menubar">
		<router-link to="/">Home</router-link>
		<router-link to="/About">About</router-link>
	</div>
</template>

<script>
    export default {
        name: 'TheMenubar'
    };
</script>

<style scoped>
	.menubar {
		display: flex;
		flex-direction: column;
	}
</style>
