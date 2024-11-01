<template>
    <main>
        
        <form class="register-form">
        <h1>Register</h1>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" required>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" v-mode="username" required>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password" required>
        <button type="submit">Register</button>
        </form>
    </main>
</template>

<script lang="ts">
import AuthServices from '@/services/AuthServices'
export default {
    data() {
        return {
            email: '' as string,
            username: '' as string,
            password: '' as string
        }
    },
    methods: {
        register() {
            AuthServices.register(this.email, this.username, this.password)
    }
    }
}
</script>

<style>
.register-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
}
</style>