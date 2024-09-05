<template>
    <div>
        <Navbar />

        <div class="container mt-5">
            <h2 class="text-center mb-4">Daftar Produk</h2>

            <div class="mb-4">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Cari produk berdasarkan nama..."
                    v-model="searchQuery"
                    @input="handleSearch"
                />
            </div>

            <div v-if="loading" class="text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div v-else>
                <ProductCard />
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

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useProductStore } from "../stores/product.store";
import Navbar from "@/components/Navbar.vue";
import ProductCard from "@/components/ProductCard.vue";

const productStore = useProductStore();
const loading = computed(() => productStore.loading);
const currentPage = computed(() => productStore.currentPage);
const totalPages = computed(() => productStore.totalPages);
const searchQuery = ref(productStore.searchQuery);

onMounted(async () => {
    await productStore.fetchProducts();
});


const prevPage = () => {
    productStore.prevPage();
};

const nextPage = () => {
    productStore.nextPage();
};

const goToPage = (page: number) => {
    productStore.goToPage(page);
};

const handleSearch = () => {
    productStore.searchProducts(searchQuery.value);
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
