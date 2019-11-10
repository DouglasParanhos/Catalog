const connection = require('../db/connection')

class Album {
    insert(album, res) {

        const albumToBeInserted = {...album};

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
        const stringHasAtLeastFourCharacters = text.length > 3;

        const validation = {
            message: 'Input text must have at least 4 characters'
        }

        if(stringHasAtLeastFourCharacters) {
            res.status(400).json(validation);
        }

        const sql = `SELECT * FROM Album WHERE description LIKE %${text}% OR artist LIKE %${text}%`;

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
}

module.exports = new Album