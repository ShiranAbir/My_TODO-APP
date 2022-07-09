import { userService } from "../services/user.service.js"
import { utilService } from "../services/util.service.js"
import { todoService } from "../services/todo.service.js"

export const myStore = Vuex.createStore({
    strict: true,
    state() {
        return {
            user: userService.getLoggedinUser(),
            todos: todoService.query(),
            user: {fullName: 'Shiran Abir', activities: [{txt:
                'Added a Todo', at: 1523873242735}]}
        }
    },
    mutations: {
        addTodo(state, { todo }) {
            state.todos.push(todo)
        },
        removeTodo(state, { idx }) {
            state.todos.splice(idx, 1)
        },
        filterBysearch(state, { searchTerm }) {
            var todos = todoService.query()
            state.todos = todos.filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()))
        },
        changeTodoStatus(state, { idx }) {
            const todo = state.todos[idx]
            todo.isDone = !todo.isDone
        },
        filterByStatus(state, { filterTerm }) {
            var todos = todoService.query()
            if (filterTerm === '') {
                state.todos = todos
                return
            }
            state.todos = todos.filter(todo => todo.isDone.toString() === filterTerm)
        },
    },
    getters: {
        progressPercent({ todos }) {
            if (!todos.length) return 0
            var doneTodos = todos.filter(todo => todo.isDone === true)
            return ((doneTodos.length / todos.length * 100).toFixed(2))
        },
    }
})
