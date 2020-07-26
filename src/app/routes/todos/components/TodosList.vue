<template>
	<div>
		<TodosListAdd
			@add-todo="addTodo"
		/>
		<ul v-if="todos.length">
			<TodosListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@change-completed-status="changeCompletedStatus"
				@remove-todo="removeTodo"
			/>
		</ul>
	</div>
</template>

<script>
    import TodosApi from '../../../api/todos.api';
    import TodosListAdd from './TodosListAdd';
    import TodosListItem from './TodosListItem';

    export default {
        name: 'TodosList',
        components: {
            TodosListAdd,
            TodosListItem
        },
        data() {
            return {
                todos: []
            };
        },
        async created() {
            this.todos = await TodosApi.getAll(20);
        },
        methods: {
            async addTodo(title) {
                const todo = await TodosApi.addTodo({
                    title,
                    completed: false
                });

                this.todos.push(todo);
            },

            async removeTodo(id) {
                await TodosApi.removeTodo(id);
                this.todos = this.todos.filter(todo => todo.id !== id);
            },

            async changeCompletedStatus(todo) {
                const response = await TodosApi.changeCompletedStatus(todo);

                this.todos = this.todos.map((item) => {
                    if (item.id !== response.id) {
                        return item;
                    }

                    return response;
                });
            }
        }
    };
</script>

<style scoped>

</style>
