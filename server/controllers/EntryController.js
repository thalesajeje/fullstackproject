//establish a connection to DB here
const db = require("../connection");

module.exports = {
    index(req, res) {
        db.query(`SELECT * FROM entries`, (err, results)=>{
            if (err) return res.sendStatus(500);
            return res.send({ entries: results });
        });
    },
    store(req, res) {
        db.query(`INSERT INTO entries (value1, value2, value3) VALUES (?,?,?)`, [req.body.entry.value1, req.body.entry.value2,req.body.entry.value3], (err, result)=>{
            console.log("result: " + JSON.stringify(result));
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM entries`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    }, 
    update(req, res){
        db.query(`UPDATE entries SET value1=?, value2=?, value3=? WHERE id=?`, [req.body.entry.value1, req.body.entry.value2, req.body.entry.value3, req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM entries`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    },
    destroy(req, res){
        db.query(`DELETE FROM entries WHERE id=?`, [req.params.entry], (err, result)=>{
            if (err) return res.sendStatus(500);
            
            db.query(`SELECT * FROM entries`, (err, results)=>{
                if (err) return res.sendStatus(500);
                return res.send({ entries: results });
            });
        });
    }
};