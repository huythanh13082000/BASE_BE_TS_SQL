"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todo_model_1 = require("../models/todo.model");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "",
    database: "todos",
    logging: false,
    models: [todo_model_1.Todos],
});
exports.default = connection;
