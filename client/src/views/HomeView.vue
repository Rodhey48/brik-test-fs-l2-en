<template>
  <div class="container mt-5">
      <h2 class="text-center mb-4">Daftar Produk</h2>
      <div v-if="loading" class="text-center">
          <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
          </div>
      </div>
      <div class="row">
          <div v-for="product in products" :key="product.id" class="col-md-4 mb-4">
              <div class="card h-100 shadow-sm">
                  <img :src="product.image" class="card-img-top" alt="Product Image" />
                  <div class="card-body">
                      <h5 class="card-title">{{ product.name }}</h5>
                      <p class="card-text">{{ product.description }}</p>
                      <p class="card-text text-muted">SKU: {{ product.sku }}</p>
                      <p class="card-text fw-bold">Harga: Rp {{ formatPrice(product.price) }}</p>
                      <button class="btn btn-primary w-100">Tambah ke Keranjang</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/product.store';

const productStore = useProductStore();
onMounted(() => {
  productStore.fetchProducts();
});

const products = productStore.products;
const loading = productStore.loading;

const formatPrice = (price) => {
  return price.toLocaleString('id-ID', { minimumFractionDigits: 0 });
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
