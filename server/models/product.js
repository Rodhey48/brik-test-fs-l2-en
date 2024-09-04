"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            // Define association here
            Product.belongsTo(models.Category, { foreignKey: "categoryId" });
        }
    }
    Product.init(
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            categoryId: {
                type: DataTypes.UUIDV4,
                allowNull: false,
            },
            sku: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: "SKU must be unique",
                },
                validate: {
                    notEmpty: {
                        msg: "SKU is required",
                    },
                    notNull: {
                        msg: "SKU is required",
                    },
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Name is required",
                    },
                    notNull: {
                        msg: "Name is required",
                    },
                },
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            weight: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "weight is required",
                    },
                    notNull: {
                        msg: "weight is required",
                    },
                },
            },
            width: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "width is required",
                    },
                    notNull: {
                        msg: "width is required",
                    },
                },
            },
            length: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "length is required",
                    },
                    notNull: {
                        msg: "length is required",
                    },
                },
            },
            height: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "height is required",
                    },
                    notNull: {
                        msg: "height is required",
                    },
                },
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Price is required",
                    },
                    notNull: {
                        msg: "Price is required",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );

    return Product;
};
