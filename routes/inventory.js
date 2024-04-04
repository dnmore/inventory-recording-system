const express = require("express");

const db = require("../data/database");

const router = express.Router();

// HOME
router.get("/", function (req, res) {
  res.render("home");
});

// VIEW ALL CATEGORIES
router.get("/categories", async function (req, res) {
  const query = `
  SELECT * FROM categories 
  `;
  const [categories] = await db.query(query);
  res.render("all__categories", { categories: categories });
});

// VIEW ALL ITEMS
router.get("/items", async function (req, res) {
  const query = `
  SELECT items.*, categories.title AS category_title FROM items 
  INNER JOIN categories ON items.category_id = categories.id
  `;
  const [items] = await db.query(query);
  res.render("all__items", { items: items });
});

// ADD NEW CATEGORY
router.get("/new-category", async function (req, res) {
  res.render("create__category");
});

router.post("/categories", async function (req, res) {
  const data = [req.body.title];
  await db.query("INSERT INTO categories (title) VALUES (?)", [data]);
  res.redirect("/categories");
});

// ADD NEW ITEM
router.get("/new-item", async function (req, res) {
  const [categories] = await db.query("SELECT * FROM categories");
  res.render("create__item", { categories: categories });
});

router.post("/items", async function (req, res) {
  const data = [
    req.body.name,
    req.body.description,
    req.body.cost,
    req.body.quantity,
    req.body.category,
  ];
  await db.query(
    "INSERT INTO items (name, description, cost, quantity, category_id) VALUES (?)",
    [data]
  );
  res.redirect("/items");
});

// UPDATE CATEGORY
router.get("/categories/:id/edit", async function (req, res) {
  const query = `
  SELECT * FROM categories WHERE id = ?
  `;

  const [categories] = await db.query(query, [req.params.id]);

  if (!categories || categories.length === 0) {
    return res.status(404).render("404");
  }

  res.render("update__category", { category: categories[0] });
});

router.post("/categories/:id/edit", async function (req, res) {
  const query = `
  UPDATE categories SET title = ?
  WHERE id = ?
  `;

  await db.query(query, [req.body.title, req.params.id]);

  res.redirect("/categories");
});

// UPDATE ITEM
router.get("/items/:id/edit", async function (req, res) {
  const [categories] = await db.query("SELECT * FROM categories");

  const query = `
  SELECT * FROM items WHERE id = ?
  `;

  const [items] = await db.query(query, [req.params.id]);

  if (!items || items.length === 0) {
    return res.status(404).render("404");
  }

  res.render("update__item", { item: items[0], categories: categories });
});

router.post("/items/:id/edit", async function (req, res) {
  const query = `
  UPDATE items SET name = ?, description = ?, cost = ?, quantity = ?, category_id = ?
  WHERE id = ?
  `;

  await db.query(query, [
    req.body.name,
    req.body.description,
    req.body.cost,
    req.body.quantity,
    req.body.category,
    req.params.id,
  ]);

  res.redirect("/items");
});

// DELETE CATEGORY
router.post("/categories/:id/delete", async function (req, res) {
  await db.query("DELETE FROM categories WHERE id = ?", [req.params.id]);
  res.redirect("/categories");
});

// DELETE ITEM
router.post("/items/:id/delete", async function (req, res) {
  await db.query("DELETE FROM items WHERE id = ?", [req.params.id]);
  res.redirect("/items");
});

module.exports = router;
