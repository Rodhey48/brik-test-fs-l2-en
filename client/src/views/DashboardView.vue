<template>
    <div class="container mt-5">
        <Navbar />

        <h2 class="text-3xl mb-5">Product Dashboard</h2>
        <div class="mb-4">
            <button class="btn btn-primary" @click="showModal = true">Add Product</button>
        </div>

        <div class="mb-4">
            <input 
                type="text" 
                class="form-control" 
                placeholder="Search products..." 
                v-model="searchQuery" 
                @input="searchProducts"
            />
        </div>

        <vue3-datatable
            :rows="products"
            :columns="columns"
            :loading="loading"
            :totalRows="totalItems"
            :isServerMode="true"
            :pageSize="params.pageSize"
            firstArrow="<<"
            lastArrow=">>"
            previousArrow="<"
            nextArrow=">"
            :showNumbersCount="3"
            class="alt-pagination"
            @change="changePage"
        > 
            <template #actions="data">
                <div class="flex gap-4">
                    <button type="button" class="btn btn-success !py-1 mx-1" @click="viewDetails(data.value.id)">View</button>
                    <button type="button" class="btn btn-danger !py-1 mx-1" @click="deleteProduct(data.value.id, data.value.name)">Delete</button>
                </div>
            </template>
        </vue3-datatable>

        <AddProductModal 
            :showModal="showModal" 
            @addProductSuccess="fetchProducts(1, params.pageSize)"
            :closeModal="() => showModal = false" 
        />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
// @ts-ignore
import Vue3Datatable from '@bhplugin/vue3-datatable';
import '@bhplugin/vue3-datatable/dist/style.css';
import { useProductStore } from '../stores/product.store'; 
import { useRouter } from "vue-router";
import Navbar from '@/components/Navbar.vue';
import AddProductModal from '@/components/AddProductModal.vue';
import Swal from 'sweetalert2';

const productStore = useProductStore();
const loading = ref(false);

const router = useRouter();
const showModal = ref(false);
const searchQuery = ref('');

const columns = [
    { field: 'index', title: 'No.', type: 'number' }, 
    { field: 'name', title: 'Name' },
    { field: 'sku', title: 'SKU' },
    { field: 'price', title: 'Price' },
    { field: 'categoryName', title: 'Category' },
    {
        field: 'actions',
        title: 'Actions',
    }
];

const params = reactive({ pageSize: 10 });

const fetchProducts = async (page = 1, pageSize = params.pageSize, query = '') => {
    productStore.currentPage = page;
    await productStore.fetchProducts(page, pageSize, query);
};


const changePage = async (pagination: any) => {
    await fetchProducts(pagination.current_page, pagination.pagesize, searchQuery.value);
};

const searchProducts = () => {
    fetchProducts(1, params.pageSize, searchQuery.value);
};

const viewDetails = (id: string) => {
    router.push(`/details/${id}`);
};


const deleteProduct = async (id: string, name: string) => {
    try {
        const result = await Swal.fire({
            title: `Apakah kamu yakin?`,
            text: `Kamu akan menghapus product ${name}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus saja!',
            cancelButtonText: 'Tidak!'
        });

        if (result.isConfirmed) {
            await productStore.deleteProduct(id);
            
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: `Product ${name} berhasil dihapus`,
                timer: 1500,
                showConfirmButton: false,
            });
        }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: `Product ${name} gagal dihapus`,
        });
    }
};


onMounted(async () => {
    await fetchProducts(1, params.pageSize);
});

const products = ref(productStore.products.map((product, index) => ({
    ...product,
    index: index + 1 
})));
const totalItems = ref(productStore.totalItems);

productStore.$subscribe((mutation) => {
    if (mutation.storeId === 'product') {
        products.value = productStore.products.map((product, index) => ({
            ...product,
            index: index + 1 
        }));
        totalItems.value = productStore.totalItems;
        loading.value = productStore.loading;
    }
});
</script>

<style scoped>
</style>
