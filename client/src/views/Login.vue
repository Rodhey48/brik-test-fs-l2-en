<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="card p-4 shadow-lg" style="max-width: 400px; width: 100%; border-radius: 15px;">
            <div class="card-body">
                <h2 class="card-title text-center mb-4">Toko klontong</h2>
                <h2 class="card-title text-center mb-4">Login</h2>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            v-model="email"
                            class="form-control"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            v-model="password"
                            class="form-control"
                            required
                        />
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Login</button>
                </form>
                <div v-if="error" class="alert alert-danger mt-3 text-center">{{ error }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from 'vue-router'; 

const authStore = useAuthStore();
const router = useRouter(); 
const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
    error.value = '';
    try {
        await authStore.login(email.value, password.value);
        Swal.fire({
            icon: 'success',
            title: 'Login berhasil',
            text: 'Selamat datang!',
            timer: 2000,
            showConfirmButton: false,
        });
        setTimeout(() => {
            if (authStore.user && authStore.user.type === 'admin') {
                router.push('/dashboard');
            } else {
                router.push('/');
            }
        }, 1000);
    } catch (err) {
        error.value = "Periksa Email/Password anda";
        Swal.fire({
            icon: 'error',
            title: 'Login gagal',
            text: 'Periksa email dan password Anda.',
        });
    }
};
</script>

<style scoped>
.vh-100 {
    height: 100vh;
}

.card {
    background-color: #f8f9fa; 
    border: none; 
    border-radius: 15px; 
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff; 
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3; 
}
</style>
