import { defineStore } from 'pinia';
import axios from 'axios';
import { useConfigStore } from './config.store';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Array<{
            id: string;
            categoryId: string;
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
        totalItems: 0,
        totalPages: 0,
        currentPage: 1,
        searchQuery: '', // Tambahkan state untuk pencarian
    }),
    actions: {
        async fetchProducts(page = 1, limit = 10, name = '') {
            const configStore = useConfigStore();
            const apiBaseUrl = configStore.apiBaseUrl;
            this.loading = true;
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`${apiBaseUrl}products`, {
                    params: { page, limit, name },
                    headers: {
                        'access_token': token,
                    },
                });

                const { products, totalItems, totalPages } = response.data.data;
                this.products = products;
                this.totalItems = totalItems;
                this.totalPages = totalPages;
                this.currentPage = page;
                this.searchQuery = name;
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                this.loading = false;
            }
        },

        async nextPage() {
            if (this.currentPage < this.totalPages) {
                await this.fetchProducts(this.currentPage + 1, 10, this.searchQuery);
            }
        },

        async prevPage() {
            if (this.currentPage > 1) {
                await this.fetchProducts(this.currentPage - 1, 10, this.searchQuery);
            }
        },

        async goToPage(page: number) {
            if (page >= 1 && page <= this.totalPages) {
                await this.fetchProducts(page, 10, this.searchQuery);
            }
        },

        async searchProducts(name: string) {
            await this.fetchProducts(1, 10, name);
        },
    },
});
