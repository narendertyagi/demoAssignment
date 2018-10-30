import User from './schema/User'
class Model {
    constructor(dbConnection) {
        this.User = dbConnection.model('users', User);        
    }
}

export default Model