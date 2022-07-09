import todoList from "../cmps/todo-list.cmp.js"
import todoHeader from "../cmps/todo-header.cmp.js"
import todoFilter from "../cmps/todo-filter.cmp.js"
import { todoService } from "../services/todo.service.js"
import userModal from "../cmps/user-modal.cmp.js"


export default {
    template: `
        <section>
            <todoHeader @openModal="setModalOpen" :todos="todos"/>
            <todoFilter/>
            <todoList :todos="todos"/>
            <section class="add-todo">
              <input @change.prevent="addTodo" type="text" placeholder="Add todo" v-model="todoToEdit.title" />
            </section>
                <userModal @closeModal="setModalclose" v-if="openModal"/>
        </section>
    `,
    data() {
        return {
            todoToEdit : todoService.getEmptyTodo(),
            openModal: false,
        }
    },
    created() {
    },
    methods: {
        addTodo() {
            const todo = todoService.save(this.todoToEdit)
            this.$store.commit({ 
                type: 'addTodo', 
                todo,
            })
            this.todoToEdit  = todoService.getEmptyTodo()
        },
        setModalOpen(){
            this.openModal = true
        },
        setModalclose(){
            this.openModal = false
        }
    },
    computed: {
        todos() { 
            return this.$store.state.todos
         }
    },
    components: {
        todoList,
        todoHeader,
        todoFilter,
        userModal,
      },
    

}