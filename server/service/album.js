const connection = require('../db/connection')

class Album {
    insert(album, res) {

        const albumToBeInserted = {...album};

        let artistNameEmpty = false;
        if(albumToBeInserted.artist.length == 0){
            artistNameEmpty = true;
        }

        let descriptionEmpty = false;
        if(albumToBeInserted.description. length == 0){
            descriptionEmpty = true;
        }

        const validationArtist = {
            field: 'Artist',
            message: 'Artist Name can\'t be empty'
        }

        const validationDescription = {
            field: 'Description',
            message: 'Description can\'t be empty'
        }

        if(artistNameEmpty) {
            res.status(400).json(validationArtist);
            return;
        } else if(descriptionEmpty){
            res.status(400).json(validationDescription);
            return;
        }

        const sql = 'INSERT INTO Album SET ?';

        connection.query(sql, albumToBeInserted, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(201).json(album);
            }
        });
    }

    findAll(res) {
        const sql = 'SELECT * FROM Album';

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    }

    findById(id, res) {
        const sql = `SELECT * FROM Album WHERE id=${id}`;

        connection.query(sql, (error, results) => {
            const album = results[0];
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(album);
            }
        });
    }


    findByText(text, res) {
        const stringHasAtLeastFourCharacters = text.length <= 3;

        const validation = {
            field: 'Search',
            message: 'Filter must have at least 4 characters'
        }

        if(stringHasAtLeastFourCharacters) {
            res.status(400).json(validation);
            return;
        }

        const sql = `SELECT * FROM Album WHERE LOWER(description) LIKE LOWER(\'%${text}%\') OR LOWER(artist) LIKE LOWER(\'%${text}%\')`;

        connection.query(sql, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    }

    update(id, values, res) {
        const sql = 'UPDATE Album SET ? WHERE id=?';

        connection.query(sql, [values, id], (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({...values, id});
            }
        });
    }

    delete(id, res) {
        const sql = 'DELETE FROM Album WHERE id=?'

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        });
    }

    countSongsByAlbum(id, res) {
        const sql = 'SELECT COUNT (*) FROM Song WHERE album_id=?'

        connection.query(sql, id, (error, results) => {
            if(error) {
                res.status(400).json(error);
            } else {
                res.status(200).json({id});
            }
        });
    }
}

module.exports = new Album