const customProperties = require('./config/customProperties.js')
const connection = require('./db/connection')
const database = require('./db/database')

connection.connect(error => {
    if(error) {
        console.log(error);
    } else {
        console.log('Connected successfully');
        
        database.init(connection);
        
        const app = customProperties();

        app.listen(3001, () => console.log('NodeJS is running on 3001'));
    }
});