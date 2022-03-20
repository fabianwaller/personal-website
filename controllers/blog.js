//const { con } = require('../server');

const getArticles = (con, filter) => async (req, res) => {
    con.query("SELECT * FROM blog", (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}

const createArticle = (con) => async (req, res) => {
    let categorie = 'money';
    let content = '# heading \n text'
    let title = 'title'
    let sql = "INSERT INTO blog (title, categorie, content) VALUES ('" + title + "' , '" + categorie + "', '" + content + "')"

    con.query(sql, (err,result) => {
        if (err) throw err;
        console.log('blog article "' + title + '" created');
    });

    return res.json('article created');
}

module.exports = {
    getArticles,
    createArticle
}