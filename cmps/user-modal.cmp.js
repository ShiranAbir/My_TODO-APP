export default {
    template: `
            <section>
                <div class="user-modal">
                  <div @click="closeModal" class="sub-avatar">
                    <p>X</p>
                  </div>
                  <router-link to="/"><div class="round-hover-modal home-btn"></div></router-link>
                </div>
              </section>
    `,
    components: {
    },
  
    data() {
      return {}
    },
    methods: {
      closeModal(){
        this.$emit('closeModal') 
    }
    },
    computed: {
  
    },
  }

