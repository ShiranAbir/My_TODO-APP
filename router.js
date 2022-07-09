import homePage from './pages/home-page.js'
import userDetails from './pages/user-details.js'
import todoApp from './pages/todo-app.js'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/todo',
        component: todoApp
    },
    {
        path: '/user',
        component: userDetails
    },
]

export const myRouter = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})