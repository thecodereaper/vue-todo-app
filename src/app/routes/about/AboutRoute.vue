<template>
	<div>
		<h2>{{title}}</h2>
		<p>{{description}}</p>
	</div>
</template>

<script>
    export default {
        name: 'AboutRoute',
        data() {
            return {
                title: 'About',
                description: 'A simple todo app following the vue style recommendations.'
            };
        }
    };
</script>

<style scoped>

</style>
