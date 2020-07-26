<template>
	<div>
		<h2>{{title}}</h2>
		<TodosList/>
	</div>
</template>

<script>
    import TodosList from './components/TodosList';

    export default {
        name: 'TodosRoute',
        components: {
            TodosList
        },
        data() {
            return {
                title: 'Todos'
            };
        }
    };
</script>

<style scoped>

</style>
