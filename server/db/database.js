class Database {
    init(connection) {
        this.connection = connection;

        this.createDataBase();
        this.createAlbum();
        this.createSong();
    }

    createDataBase() {
        const sql ='CREATE DATABASE IF NOT EXISTS Catalog';

        this.connection.query(sql, error => {
            if(error) {
                console.log(error);
            } else {
                console.log('Database "Catalog" created successfully');
            }
        });
    }

    createAlbum() {
        const sql ='CREATE TABLE IF NOT EXISTS Catalog.Album (' +
            'id INT NOT NULL AUTO_INCREMENT,    ' +
            'description VARCHAR(500), ' +
            'release_date DATETIME, ' +
            'artist VARCHAR(500) NOT NULL, ' +
            
            'PRIMARY KEY(id))';

        this.connection.query(sql, error => {
            if(error) {
                console.log(error);
            } else {
                console.log('Table "Album" created successfully');
            }
        });
    }

    createSong() {
        const sql ='CREATE TABLE IF NOT EXISTS Catalog.Song (' +
            'id INT NOT NULL AUTO_INCREMENT, ' +
            'title VARCHAR(500) NOT NULL, ' +
            'track_number INT NOT NULL, ' +
            'album_id INT NOT NULL, ' +

            'PRIMARY KEY(id), ' +
            'FOREIGN KEY(album_id) REFERENCES Catalog.Album(id))';

        this.connection.query(sql, error => {
            if(error) {
                console.log(error);
            } else {
                console.log('Table "Song" created successfully');
            }
        });
    }

}

module.exports = new Database
