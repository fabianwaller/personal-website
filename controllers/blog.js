const getArticles = (con) => (req, res) => {
    //console.log(req.query.categorie);
    let sql = "SELECT * FROM blog ";
    if (req.query.slug != null) {
        sql += "WHERE slug='" + req.query.slug + "'";
    } 
    if (req.query.categorie != null) {
        if (req.query.slug != null) {
            sql += " and ";
        } else {
            sql += "WHERE "
        }
        //sql += "categorie='" + req.query.categorie + "'";
        sql += "categorie in (" + req.query.categorie + ")"
    }
    //console.log(sql);
    con.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}

const createArticle = (con) => (req, res) => {
    let categorie = 'studying';
    let content = `<blockquote>
    <p>Fincancial success is not a hard science. It is a soft skill, where how you behave is more important than what you know.</p>
    </blockquote>
    <h3>No one is crazy</h3>
    <p>Everyone has their own unique experience with how the world works. Things that are experienced theirself are more compelling than second-hand learned ones.</p>
    <blockquote>
    <p>Your personal experiences with money make up maybe 0.00000001% of what has happened in the world, but maybe 80% of how you think the world works.</p>
    </blockquote>`
    let text = "Fincancial success is not a hard science. It is a soft skill, where how you behave is more important than what you know."
    let title = 'the psychology of money 2'
    let slug = 'psychologyofmoney2'
    let sql = "INSERT INTO blog (categorie, title, slug, text, content) VALUES ('" + categorie + "' , '" + title + "', '" + slug + "' , '" + text + "', '" + content + "')"

    con.query(sql, (err,result) => {
        if (err) throw err;
        console.log('blog article "' + title + '" created');
    });

    res.json('article created');
}

module.exports = {
    getArticles,
    createArticle
}