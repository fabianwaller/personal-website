const getArticles = (con, filter) => (req, res) => {
    con.query("SELECT * FROM blog", (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}

const createArticle = (con) => (req, res) => {
    let categorie = 'studying';
    let text = "Learning how to learn is one of those meta skills that nobody ever really teaches us."
    let content = "How to Learn Anything Faster"
    let title = 'How to Learn Anything Faster'
    let sql = "INSERT INTO blog (categorie, title, text, content) VALUES ('" + categorie + "' , '" + title + "', '" + text + "', '" + content + "')"

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