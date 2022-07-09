export default {
    template: `
    <section class="todo-header">
            <div class="main-logo"></div>
            <div @click="openModal" class="main-avatar">
                <p>S</p>
            </div>
            <div class="progress">
                <div class="progress-bar" role="progressbar" :style="calculatePercent" aria-valuemin="0" aria-valuemax="100">{{progress}}%</div>
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
        openModal(){
            this.$emit('openModal') 
        }
    },
    computed: {
        progress(){
            return this.$store.getters.progressPercent
        },
        calculatePercent(){
            var num = this.$store.getters.progressPercent
            return `width: ${num}%`
        },
    },
    created() {

    }
}