import { myRouter } from "../router.js"

export default {
    template: `
    <section class="home-page">
        <section class="sign-in">
            <form @submit.prevent="logIn">
            <h1 class="main-label">
                Welcome back!
            </h1>
            <div class="container"></div>
            <h1 class="sign-in-label">
                Sign in
            </h1>
            <input v-model="user.username" class="username" type="text">
            <transition name="slide-fade">
                <div class="username-placeholder">Sign in</div>
            </transition>
            <input v-model="user.password" class="password" type="password">
            <transition name="slide-fade">
                <div class="password-placeholder">Password</div>
            </transition>
            <button class="next">Next</button>
            </form>
        </section>
        <section class="about">
        <div class="about-title">About me</div>
            <div class="about-shiran"></div>
            <p class="shiran-title">Shiran Abir<span onclick="window.open('https://linkedin.com/in/shiran-abir/', '_blank');" class="linkdin-icon"></span></p>
        </section>
        <div class="footer">
            <p>Created and designed by Shiran Abir © 2022</p>
        </div>
    </section>
    `,
    methods:{
        logIn(){
            const login = {
                password:this.user.password,
                username:this.user.username
            }
            const check = this.$store.getters.checkUser(login)
            if (check) myRouter.push('/todo')

        },
    },
    data() {
        return {
            user:{
                username: null,
                password: null,
            }
        }
    },
}