<template>
    <main>
        
        <form class="register-form">
        <h1>Register</h1>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" v-model="email" required>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" v-model="username" required>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="password" required>
        <div class="error" v-html="error"></div>
        </form>
        <button @click="register">Register</button>     
    </main>
</template>

<script lang="ts">
import AuthentServices from '@/services/AuthentService'
import { AxiosError } from 'axios'
export default {
    data() {
        return {
            email: '',
            username: '',
            password: '',
            error: '' 
        }
    },
    
    methods: {
        async register() {
           try {
                await AuthentServices.register({
                    email: this.email,
                    username: this.username,
                    password: this.password})
            } catch (error) {
                // Check if error is an instance of AxiosError
                if (error instanceof AxiosError && error.response) {
                    // Access the error message safely
                    this.error = error.response.data.error || 'An error occurred';
                } else {
                    this.error = 'An unexpected error occurred';
                }
                }
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
.error {
    color: red;
    font-size: 0.8rem;
    text-align: center;
}
</style>