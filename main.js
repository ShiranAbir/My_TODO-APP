'use strict'

import { myRouter } from './router.js'
import { myStore } from './store/store.js'


const options = {
    template: `
        <section>
            <router-view/>
        </section>
    `,
    created() {
    },
    components: {
    },
}

const app = Vue.createApp(options)
app.use(myRouter)
app.use(myStore)
app.mount('#app')
