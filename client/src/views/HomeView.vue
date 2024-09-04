<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="#">Toko klontong</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <button
                                class="btn btn-outline-danger"
                                @click="handleLogout"
                            >
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Konten Produk -->
        <div class="container mt-5">
            <h2 class="text-center mb-4">Daftar Produk</h2>

            <!-- Input Pencarian -->
            <div class="mb-4">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Cari produk berdasarkan nama..."
                    v-model="searchQuery"
                    @input="handleSearch"
                />
            </div>

            <!-- Loading Spinner -->
            <div v-if="loading" class="text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>

            <!-- List Produk -->
            <div v-else>
                <div class="row">
                    <div
                        v-for="product in products"
                        :key="product.id"
                        class="col-md-4 mb-4"
                    >
                        <div class="card h-100 shadow-sm p-2">
                            <img
                                :src="product.image"
                                class="card-img-top shadow-sm"
                                alt="Product Image"
                            />
                            <div class="card-body">
                                <h5 class="card-title">{{ product.name }}</h5>
                                <p class="card-text">
                                    {{ product.description }}
                                </p>
                                <p class="card-text text-muted">
                                    SKU: {{ product.sku }}
                                </p>
                                <p class="card-text fw-bold">
                                    Harga: Rp {{ formatPrice(product.price) }}
                                </p>
                                <button class="btn btn-primary w-100">
                                    Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Pagination Controls -->
                <nav aria-label="Page navigation" class="mt-4">
                    <ul class="pagination justify-content-center">
                        <li
                            class="page-item"
                            :class="{ disabled: currentPage === 1 }"
                        >
                            <button
                                class="page-link"
                                @click="prevPage"
                                :disabled="currentPage === 1"
                            >
                                Previous
                            </button>
                        </li>
                        <li
                            class="page-item"
                            v-for="page in totalPages"
                            :key="page"
                            :class="{ active: page === currentPage }"
                        >
                            <button class="page-link" @click="goToPage(page)">
                                {{ page }}
                            </button>
                        </li>
                        <li
                            class="page-item"
                            :class="{ disabled: currentPage === totalPages }"
                        >
                            <button
                                class="page-link"
                                @click="nextPage"
                                :disabled="currentPage === totalPages"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "../stores/product.store";
import { useAuthStore } from "../stores/auth.store";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const authStore = useAuthStore();

const router = useRouter();
const products = computed(() => productStore.products);
const loading = computed(() => productStore.loading);
const currentPage = computed(() => productStore.currentPage);
const totalPages = computed(() => productStore.totalPages);
const searchQuery = ref(productStore.searchQuery);

onMounted(async () => {
    await productStore.fetchProducts();
});

const formatPrice = (price) => {
    return price.toLocaleString("id-ID", { minimumFractionDigits: 0 });
};

const prevPage = () => {
    productStore.prevPage();
};

const nextPage = () => {
    productStore.nextPage();
};

const goToPage = (page) => {
    productStore.goToPage(page);
};

const handleSearch = () => {
    productStore.searchProducts(searchQuery.value);
};

const handleLogout = () => {
    authStore.logout();
    router.push("/login");
};
</script>

<style scoped>
.card {
    border-radius: 15px;
    transition: transform 0.2s;
}

.card:hover {
    transform: scale(1.05);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}
</style>
