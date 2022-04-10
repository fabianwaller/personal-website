const getArticles = (con) => (req, res) => {
    //console.log(req.query.categorie);
    let sql = "SELECT * FROM blog ";
    if (req.query.title != null) {
        sql += "WHERE title LIKE '%" + req.query.title + "%'";
    } 
    if (req.query.categorie != null) {
        if (req.query.title != null) {
            sql += " and ";
        } else {
            sql += "WHERE "
        }
        //sql += "categorie='" + req.query.categorie + "'";
        sql += "categorie in (" + req.query.categorie + ")"
    }
    if(req.query.slug != null) {
        //console.log(req.query.slug);
        sql = "SELECT * FROM blog WHERE slug='" + req.query.slug + "'";
    }
    //console.log(sql);

    con.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}

const createArticle = (con) => (req, res) => {
    let sqlreadycontent = req.body.content.replace(/'/g, "''").replace(/"/g, '\\"');
    let sql = 'INSERT INTO blog (categorie, title, imageurl, slug, text, content) VALUES ("' + req.body.categorie + '" , "' + req.body.title + '", "' + req.body.imageurl + '" , "' + req.body.slug + '" , "' + req.body.text + '", "' + sqlreadycontent + '")'

    con.query(sql, (err,result) => {
        if (err) throw err;
        console.log('blog article "' + req.body.title + '" created');
    });

    res.json('article posted'); 
}

module.exports = {
    getArticles,
    createArticle
}