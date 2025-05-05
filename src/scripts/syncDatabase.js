import { sequelize } from "../config/database.js";

import User from "../models/User.js";
import Category from "../models/Category.js";
import Article from "../models/Article.js";

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
};

syncDatabase();
