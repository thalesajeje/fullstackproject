// Establish a connection to the database
const db = require("../connection");

module.exports = {
    // Get all categories
    index(req, res) {
        db.query(`SELECT * FROM categories`, (err, results) => {
            if (err) return res.sendStatus(500);
            return res.send({ categories: results });
        });
    },

    // Create new category
    store(req, res) {
        const { category_name } = req.body.category;
        db.query(`INSERT INTO categories (category_name) VALUES (?)`, 
            [category_name], 
            (err, result) => {
                if (err) return res.sendStatus(500);
                
                db.query(`SELECT * FROM categories`, (err, results) => {
                    if (err) return res.sendStatus(500);
                    return res.send({ categories: results });
                });
            }
        );
    },

    // Update existing category
    update(req, res) {
        const { category_name } = req.body.category;
        db.query(`UPDATE categories SET category_name=? WHERE category_id=?`, 
            [category_name, req.params.category_id], 
            (err, result) => {
                if (err) return res.sendStatus(500);

                db.query(`SELECT * FROM categories`, (err, results) => {
                    if (err) return res.sendStatus(500);
                    return res.send({ categories: results });
                });
            }
        );
    },

    // Delete category
    destroy(req, res) {
        db.query(`DELETE FROM categories WHERE category_id=?`, [req.params.category_id], (err, result) => {
            if (err) return res.sendStatus(500);

            db.query(`SELECT * FROM categories`, (err, results) => {
                if (err) return res.sendStatus(500);
                return res.send({ categories: results });
            });
        });
    }
};
