import mongoose from 'mongoose'

class Database {
    constructor(MONGO_DB_URI) {
        this.connection = mongoose.connection
        this.dbUrl = MONGO_DB_URI
    }

    async connect() {
        if(mongoose.connection.readyState!==1) {
            console.log("connectDB Called")
            this.connection = mongoose.connect(this.dbUrl, {
                // useMongoClient : true
            }, function(err) {
                if(err) {
                    console.log(`ConnectDB ERR  ${err}`)
                } else {
                    // EVENTEMITTER.emit('DbConnected');
                }
            });
        }
    }
}


export default Database