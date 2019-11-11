const Album = require('../service/album.js')

module.exports = app => {

    app.get('/albums', (req, res) => {
        Album.findAll(res);
    });

    app.get('/albums/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Album.findById(id, res);
    });

    app.get('/albums/bytext/:text', (req, res) => {
        const text = req.params.text;

        Album.findByText(text, res);
    });

    app.post('/albums', (req, res) => {
       const album = req.body;

       Album.insert(album, res);
    });

    app.patch('/albums/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;

        Album.update(id, values, res);
    });

    app.delete('/albums/:id', (req, res) => {
        const id = parseInt(req.params.id);

        Album.delete(id, res);
    });
}