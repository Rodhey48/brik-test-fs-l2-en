"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            "Products",
            [
                {
                    id: uuidv4(),
                    categoryId: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "SNK001",
                    name: "Chips",
                    description: "Crispy and crunchy potato chips",
                    weight: 150,
                    width: 10,
                    length: 5,
                    height: 2,
                    image: "https://m.media-amazon.com/images/I/818DaRt60GL._AC_UF894,1000_QL80_.jpg",
                    price: 20000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "SNK002",
                    name: "Cookies",
                    description: "Chocolate chip cookies",
                    weight: 250,
                    width: 8,
                    length: 8,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/514qbw36ezL._AC_UF894,1000_QL80_.jpg",
                    price: 30000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BEV001",
                    name: "Orange Juice",
                    description: "Freshly squeezed orange juice",
                    weight: 1000,
                    width: 12,
                    length: 12,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/71PzW7nUvrL._AC_UF894,1000_QL80_.jpg",
                    price: 25000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BEV002",
                    name: "Apple Juice",
                    description: "Refreshing apple juice",
                    weight: 1000,
                    width: 12,
                    length: 12,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/51ZrF9Rx3CL._AC_UF350,350_QL50_.jpg",
                    price: 22000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "DAI001",
                    name: "Milk",
                    description: "Full cream milk",
                    weight: 1000,
                    width: 10,
                    length: 10,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/81y9JH3qLcL._AC_UF894,1000_QL80_.jpg",
                    price: 15000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "DAI002",
                    name: "Cheese",
                    description: "Cheddar cheese",
                    weight: 250,
                    width: 8,
                    length: 8,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/7132UDgTh8L._AC_UF1000,1000_QL80_.jpg",
                    price: 50000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BAK001",
                    name: "Bread",
                    description: "Freshly baked bread",
                    weight: 500,
                    width: 10,
                    length: 10,
                    height: 10,
                    image: "https://m.media-amazon.com/images/I/81wVCQ1RSdL.jpg",
                    price: 25000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BAK002",
                    name: "Croissant",
                    description: "Butter croissant",
                    weight: 100,
                    width: 5,
                    length: 5,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/71+CRsRIDHL._AC_UF1000,1000_QL80_.jpg",
                    price: 15000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "FRO001",
                    name: "Frozen Pizza",
                    description: "Delicious frozen pizza",
                    weight: 800,
                    width: 30,
                    length: 30,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/91liWlamvJL.jpg",
                    price: 80000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "FRO002",
                    name: "Frozen Vegetables",
                    description: "Mixed frozen vegetables",
                    weight: 1000,
                    width: 20,
                    length: 20,
                    height: 10,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKA08z6VS0nbkoA67tXLQJhF52Q45IB5avZg&s",
                    price: 40000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "SNK011",
                    name: "Potato Chips",
                    description: "Crunchy potato chips with a hint of salt",
                    weight: 150,
                    width: 10,
                    length: 5,
                    height: 2,
                    image: "https://m.media-amazon.com/images/I/91Za7nETVpL.jpg",
                    price: 20000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "SNK012",
                    name: "Chocolate Cookies",
                    description: "Delicious cookies with chocolate chunks",
                    weight: 250,
                    width: 8,
                    length: 8,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/618Ce3ma2sL._AC_UF1000,1000_QL80_.jpg",
                    price: 30000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BEV011",
                    name: "Green Tea",
                    description: "Refreshing green tea in a bottle",
                    weight: 500,
                    width: 10,
                    length: 10,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/51WiXAXgFfL._AC_UF1000,1000_QL80_.jpg",
                    price: 15000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BEV012",
                    name: "Cola",
                    description: "Classic cola drink",
                    weight: 500,
                    width: 10,
                    length: 10,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/81P2OI8evAL._AC_UF350,350_QL80_.jpg",
                    price: 17000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "DAI011",
                    name: "Cheddar Cheese",
                    description: "Sharp and tangy cheddar cheese",
                    weight: 200,
                    width: 6,
                    length: 6,
                    height: 4,
                    image: "https://m.media-amazon.com/images/I/61mrc5dJ-BL.jpg",
                    price: 40000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "DAI022",
                    name: "Yogurt",
                    description: "Creamy yogurt with fruit flavors",
                    weight: 400,
                    width: 8,
                    length: 8,
                    height: 10,
                    image: "https://m.media-amazon.com/images/I/71p1tr-P-DL._AC_UF894,1000_QL80_.jpg",
                    price: 22000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BAK021",
                    name: "Bagels",
                    description: "Freshly baked bagels",
                    weight: 300,
                    width: 10,
                    length: 10,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/81bN2EDl-dL._AC_UF894,1000_QL80_.jpg",
                    price: 28000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BAK022",
                    name: "Danish Pastry",
                    description: "Flaky Danish pastry with a sweet filling",
                    weight: 150,
                    width: 6,
                    length: 6,
                    height: 4,
                    image: "https://m.media-amazon.com/images/I/8195dkJ28RL.jpg",
                    price: 20000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "FRO021",
                    name: "Frozen Chicken Nuggets",
                    description: "Delicious frozen chicken nuggets",
                    weight: 1000,
                    width: 20,
                    length: 20,
                    height: 10,
                    image: "https://cdn.dotpe.in/longtail/item_thumbnails/5125385/yZWttmFM-400-400.webp",
                    price: 55000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "FRO022",
                    name: "Frozen Fruits",
                    description: "Assorted frozen fruits for smoothies",
                    weight: 800,
                    width: 15,
                    length: 15,
                    height: 10,
                    image: "https://m.media-amazon.com/images/I/61+4wNtM9cL._AC_UF1000,1000_QL80_.jpg",
                    price: 35000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "SNK033",
                    name: "Pretzels",
                    description: "Crunchy pretzels with sea salt",
                    weight: 200,
                    width: 12,
                    length: 10,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/81tXZ9KK5jL._AC_UF894,1000_QL80_.jpg",
                    price: 22000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10019908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "SNK034",
                    name: "Granola Bars",
                    description: "Nutty granola bars with honey",
                    weight: 100,
                    width: 5,
                    length: 5,
                    height: 2,
                    image: "https://m.media-amazon.com/images/I/71sos+Cv31L.jpg",
                    price: 18000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BEV033",
                    name: "Lemonade",
                    description: "Freshly squeezed lemonade",
                    weight: 1000,
                    width: 12,
                    length: 12,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/71Cwgi45oZL.jpg",
                    price: 23000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10029908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BEV034",
                    name: "Iced Tea",
                    description: "Cool and refreshing iced tea",
                    weight: 1000,
                    width: 12,
                    length: 12,
                    height: 20,
                    image: "https://m.media-amazon.com/images/I/71Dw9tKdd9L.jpg",
                    price: 20000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "DAI043",
                    name: "Butter",
                    description: "Rich and creamy butter",
                    weight: 250,
                    width: 8,
                    length: 8,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/41WgiKRmfZL._AC_UF1000,1000_QL80_.jpg",
                    price: 25000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10039908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "DAI044",
                    name: "Cream Cheese",
                    description: "Smooth and creamy cheese spread",
                    weight: 200,
                    width: 6,
                    length: 6,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/71T1wvHw8vL._SL1500_.jpg",
                    price: 27000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BAK033",
                    name: "Muffins",
                    description: "Assorted fruit muffins",
                    weight: 250,
                    width: 10,
                    length: 10,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/81GZIwFBJgL.jpg",
                    price: 23000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10049908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "BAK034",
                    name: "Baguette",
                    description: "Freshly baked French baguette",
                    weight: 400,
                    width: 12,
                    length: 40,
                    height: 10,
                    image: "https://m.media-amazon.com/images/I/812WnVkSCzL._AC_UF1000,1000_QL80_.jpg",
                    price: 30000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "FRO033",
                    name: "Frozen Meatballs",
                    description: "Frozen meatballs for easy meals",
                    weight: 1000,
                    width: 15,
                    length: 15,
                    height: 10,
                    image: "https://m.media-amazon.com/images/I/61nhEBcFw3L._AC_UF894,1000_QL80_.jpg",
                    price: 60000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: uuidv4(),
                    categoryId: "10059908-a63b-4cca-9648-f8f1b1bd1366",
                    sku: "FRO034",
                    name: "Frozen Pizza Rolls",
                    description: "Frozen pizza rolls for snacks",
                    weight: 500,
                    width: 20,
                    length: 20,
                    height: 5,
                    image: "https://m.media-amazon.com/images/I/81NeChXpekL._AC_UF894,1000_QL80_.jpg",
                    price: 35000,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Products", null, {});
    },
};
