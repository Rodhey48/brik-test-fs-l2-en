<template>
    <div class="container mt-5">
        <!-- Navbar -->
        <Navbar />

        <h2 class="text-3xl mb-5">Product Details</h2>

        <div v-if="product" class="product-details">
            <div class="row">
                <div class="col-md-6">
                    <div class="product-image-container">
                        <img
                            :src="product.image"
                            alt="Product Image"
                            class="product-image"
                        />
                    </div>
                </div>
                <div class="col-md-6">
                    <h2>{{ product.name }}</h2>
                    <p><strong>SKU:</strong> {{ product.sku }}</p>
                    <p><strong>Weight:</strong> {{ product.weight }} kg</p>
                    <p>
                        <strong>Dimensions:</strong> {{ product.width }} x
                        {{ product.length }} x {{ product.height }} cm
                    </p>
                    <p><strong>Price:</strong> ${{ product.price }}</p>
                    <p><strong>Category:</strong> {{ product.categoryName }}</p>
                    <p>
                        <strong>Description:</strong> {{ product.description }}
                    </p>
                </div>
            </div>
            <button class="btn btn-primary my-4" @click="goBack">
                Back to Dashboard
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useProductStore } from "../stores/product.store";
import Navbar from "@/components/Navbar.vue";

const route = useRoute();
const router = useRouter();
const productStore = useProductStore();

const product = ref<any>(null);

const fetchProductDetails = async () => {
    const id = route.params.id as string;
    await productStore.fetchProductById(id);
    product.value = productStore.currentProduct;
};

const goBack = () => {
    router.back();
};

onMounted(() => {
    fetchProductDetails();
});
</script>

<style scoped>
.product-image-container {
    width: 100%;
    max-width: 400px;
    height: 300px;
    overflow: hidden;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
}

.product-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
}
</style>
