"use strict";

const { hasPassword } = require("../helper/bcrypt");
const { v4: uuidv4 } = require("uuid");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("Users", [
            {
                id: uuidv4(),
                isActive: true,
                name: "Admin User",
                email: "admin@email.com",
                type: "admin",
                password: hasPassword("Asd123"),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                isActive: true,
                name: "User 1",
                email: "user1@email.com",
                type: "user",
                password: hasPassword("Asd123"),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                isActive: true,
                name: "User 2",
                email: "user2@email.com",
                type: "user",
                password: hasPassword("Asd123"),
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("Users", null, {});
    },
};
