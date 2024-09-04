import { defineStore } from 'pinia';
import axios from 'axios';
import { useConfigStore } from './config.store';  // Mengambil baseUrl dari config


export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Array<{
            id: number;
            categoryId: number;
            categoryName: string;
            sku: string;
            name: string;
            description: string;
            weight: number;
            width: number;
            length: number;
            height: number;
            image: string;
            price: number;
        }>,
        loading: false,
    }),
    actions: {
        async fetchProducts() {
            const configStore = useConfigStore();
            const apiBaseUrl = configStore.apiBaseUrl;
            this.loading = true;
            try {
                const token = localStorage.getItem('token')
                const response = await axios.get(`${apiBaseUrl}products`, {
                    headers: {
                        'access_token': token
                    }
                });
                this.products = response.data.data.products;
                console.log(this.products)
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                this.loading = false;
            }
        },
    },
});
