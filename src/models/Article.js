import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";

import Category from "./Category.js";
import User from "./User.js";

class Article extends Model {}

Article.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("draft", "pending", "published", "rejected"),
      defaultValue: "draft",
      allowNull: false,
    },
    author_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    editor_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Article",
    tableName: "Articles",
    timestamps: true,
    hooks: {
      beforeCreate: (article) => {
        if (!article.slug) {
          article.slug = article.title
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "");
        }
      },
    },
  }
);

Article.belongsTo(User, {
  foreignKey: { name: "author_id", allowNull: false },
  as: "author",
});

Article.belongsTo(User, {
  foreignKey: { name: "editor_id", allowNull: false },
  as: "editor",
});

Article.belongsTo(Category, {
  foreignKey: { name: "category_id", allowNull: false },
  as: "category",
});

export default Article;
