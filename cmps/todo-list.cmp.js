import { todoService } from "../services/todo.service.js"

export default {
    props: ["todos"],
    template: `
    <section class="todo-list">
        <div class="todo" v-for="(todo,id) in todos" :key="todo.id">
            <input @change="doneTodo(todo._id)" :checked="isChecked(todo.isDone)" type="checkbox"/>
            <p :class="isDone(todo._id)">{{ todo.title }}</p>
            <div @click="removeTodo(todo._id)" class="delete-todo-btn round-hover"></div>
            
        </div>          
    </section>
`,
    components: {
    },

    data() {
        return {
        }
    },
    methods: {
        removeTodo(id){
            const idx = this.todos.findIndex(todo => todo._id === id)
            this.$store.commit({ 
                type: 'removeTodo', 
                idx: idx
            })
            todoService.remove(id)
        },
        doneTodo(id){
            const idx = this.todos.findIndex(todo => todo._id === id)
            this.$store.commit({ 
                type: 'changeTodoStatus', 
                idx: idx
            })
            todoService.save(this.todos[idx])
        },
        isChecked(isDone){
            return isDone
        },
        isDone(id){
            const todo = this.todos.find(todo => todo._id === id)
            if (todo.isDone===true) return 'done'
            else return ''
        }
    },
    computed: {

    },
    created() {

    }
}