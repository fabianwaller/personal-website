export async function getArticles(collection) {
  return collection.find().toArray();
}

export async function createArticle(collection) {
  const data = {
    title: 'Momo',
    slug: 'momo',
    categorie: '',
    imageurl: '',
    date: new Date(),
    text: "What we can learn from Michael Ende's book Momo",
    content: `<p><strong>listening to other people</strong><br>
        Momo knows how to listen to other people and helps them to come up with good ideas.</p>
    <p><strong>positive mindset</strong><br>
        One must never think of one big task at one time. Always think about only the next step. Then work is fun and
        you do your job well. And after that you're not exhausted and you can do the next thing.</p>
    <p><strong>relax</strong><br>
        Busy people are frantically trying to take advantage of their free hours and rush to have as much pleasure and
        relaxation as possible. Instead, relax. It's better to just do nothing sometimes.</p>
    <p><strong>saving time</strong><br>
        most people don't recognize that by saving time they are saving something different. Nobody admits that his life
        is getting poorer, colder and more uniform. The saved time seems to be stolen.</p>
    <p>People allow themselves to save more and more time. That's enough to have less and less of it. They give up their
        their self determination over their time.</p>
    <p>The reception of dead time triggers an illness which is noticed little at first. One day you don't feel like
        doing anything anymore. Nothing interests you, you get bored. But this displeasure does not disappear again, but
        remains and slowly increases over time. You start feeling more and more grumpy, emptier and dissatisfied inside.
        Slowly you don't feel anything anymore. You become completely indifferent and grey, the whole world seems
        strange to you and no longer concerns you. You have lost your emotions, can can no longer be happy. You forget
        how to laugh and how to cry. Cold inside you can no longer love anything or anyone. Once it has come to this,
        the disease is incurable.</p>
    <p><strong>materialism</strong><br>
        People (especially children) don't need expensive toys. The required imagination to play with these finished
        perfect things that have no further use case is very small.<br>
        You don't have to own more and more things in order to not get bored and be happy.</p>
    <p><strong>the need to only do useful things</strong><br>
        Children are placed in children's depots (child care) where they are not allowed to come up with any ideas for
        themselves. The games are prescribed by the invigilators and are only ones where anything useful is learned for
        their later life. But something is definitely unlearned: to be happy, to be enthusiastic and to dream.</p>`
  }

  await collection.insertOne(data);

  console.log("created article");
}


/* export const getArticles = (con) => (req, res) => {
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
    if (req.query.slug != null) {
        //console.log(req.query.slug);
        sql = "SELECT * FROM blog WHERE slug='" + req.query.slug + "'";
    }
    //console.log(sql);

    con.query(sql, (err, results) => {
        if (err) throw err;
        res.json(results);
    })
}



export const createArticle = (con) => (req, res) => {
    let sqlreadycontent = req.body.content.replace(/'/g, "''").replace(/"/g, '\\"');
    let sql = 'INSERT INTO blog (categorie, title, imageurl, slug, text, content) VALUES ("' + req.body.categorie + '" , "' + req.body.title + '", "' + req.body.imageurl + '" , "' + req.body.slug + '" , "' + req.body.text + '", "' + sqlreadycontent + '")'

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log('blog article "' + req.body.title + '" created');
    });

    res.json('article posted');
} */

/* module.exports = {
    getArticles,
    createArticle
} */