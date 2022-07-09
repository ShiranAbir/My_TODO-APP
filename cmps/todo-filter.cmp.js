export default {
    template: `
    <section class="todo-filter">
        <select @change="filterByStatus">
            <option value="">All</option>
            <option value=false >Active</option>
            <option value=true >Done</option>
        </select>
            <input @input="filterBysearch" placeholder="Search todo" class="search-todo search-container" type="text">
    </section>
`,
    components: {
    },

    data() {
        return {
        }
    },
    methods: {
        filterBysearch(searchTerm){
            this.$store.commit({ 
                type: 'filterBysearch', 
                searchTerm: searchTerm.target.value
            })
        },
        filterByStatus(filterTerm){
            this.$store.commit({ 
                type: 'filterByStatus', 
                filterTerm: filterTerm.target.value
            })
        }
    },
    computed: {
    },
    created() {

    }
}