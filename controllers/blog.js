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
    //console.log(sql);
    con.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}

const createArticle = (con) => (req, res) => {
    let categorie = 'studying';
    let content = `
    <h2>First Argument</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <h2>Second Argument</h2>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <ul> 
        <li>Point 1</li>
        <li>Point 2</li>
        <li>Point 3</li>
    </ul>
    <blockquote>This is a blockquote</blockquote>
    `
    let text = "Owning your data is extremely important so the internet of trust is a solution"
    let title = 'the psychology of money'
    let imageurl = "wildsee.jpeg"
    let slug = 'psychologyofmoney'
    let sql = "INSERT INTO blog (categorie, title, imageurl, slug, text, content) VALUES ('" + categorie + "' , '" + title + "', '" + imageurl + "' , '" + slug + "' , '" + text + "', '" + content + "')"

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