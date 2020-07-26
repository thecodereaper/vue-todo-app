<template>
	<li>
		<input
			type="checkbox"
			:checked="todo.completed"
			@click="$emit('change-completed-status', todo)"
		>
		<span :class="{'completed': todo.completed}">
			{{todo.title}}
		</span>
		<button @click="$emit('remove-todo', todo.id)">
			x
		</button>
	</li>
</template>

<script>
    export default {
        name: 'TodosListItem',
        props: {
            todo: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style scoped>
	.completed {
		text-decoration: line-through;
	}
</style>
