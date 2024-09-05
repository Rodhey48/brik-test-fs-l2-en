"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Categories",
            [
                {
                    id: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    isActive: true,
                    name: "Snacks",
                    description: "Delicious snacks and treats",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    isActive: true,
                    name: "Beverages",
                    description: "Drinks and refreshments",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    isActive: true,
                    name: "Dairy",
                    description: "Milk, cheese, and other dairy products",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    isActive: true,
                    name: "Bakery",
                    description: "Freshly baked bread and pastries",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    isActive: true,
                    name: "Frozen Foods",
                    description: "Frozen meals and ingredients",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Categories", null, {});
    },
};
