import axios from 'axios';

import { todosUrl } from '../config/api.config';

function TodosApi(url) {

    function getAll(limit) {

        return axios
            .get(`${url}?_limit=${limit}`)
            .then(res => res.data)
            .catch(error => {
                console.log(error);
                throw error;
            });
    }

    function addTodo(todo) {

        return axios
            .post(`${url}`, todo)
            .then(res => res.data)
            .catch(error => {
                console.log(error);
                throw error;
            });
    }

    function removeTodo(id) {

        return axios
            .delete(`${url}/${id}`)
            .then(res => res.data)
            .catch(error => {
                console.log(error);
                throw error;
            });
    }

    function changeCompletedStatus(todo) {

        return axios
            .patch(`${url}/${todo.id}`, {
                completed: !todo.completed
            })
            .then(res => res.data)
            .catch(error => {
                console.log(error);
                throw error;
            });
    }

    return {
        getAll,
        addTodo,
        removeTodo,
        changeCompletedStatus
    };
}

const todosApi = new TodosApi(todosUrl);
export default todosApi;
