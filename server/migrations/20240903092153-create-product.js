"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            categoryId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: "Categories",
                    key: "id",
                },
                onUpdate: "cascade",
                onDelete: "cascade",
            },
            sku: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            weight: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            width: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            length: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            height: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            image: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    },
};
