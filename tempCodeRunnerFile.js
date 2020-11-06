
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params);
});