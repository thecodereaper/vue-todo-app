<template>
	<div>
		<input
			type="text"
			:placeholder="placeholderText"
			v-model="todoTitle"
		/>
		<input
			type="submit"
			:value="submitButtonText"
			@click="addTodo"
		/>
	</div>
</template>

<script>
    export default {
        name: 'TodosListAdd',
        data() {
            return {
                todoTitle: '',
                placeholderText: 'Add todo ...',
                submitButtonText: 'Add'
            };
        },
        methods: {
            addTodo() {
                const title = this.todoTitle.trim();
                
                if (!title.length) {
                    return;
                }

                this.$emit('add-todo', title.trim());
                this.todoTitle = '';
            }
        }
    };
</script>

<style scoped>

</style>
