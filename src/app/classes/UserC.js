

var ObjectId = require('mongoose').Types.ObjectId;
var rp= require('request-promise');
class UserC {
    constructor() {
     
    }

    static async populateUser() {
        var options = {
            method: 'GET',
            uri: 'http://demo9197058.mockable.io/users',
            json: true
        };
        
        const users = await rp(options)
        for(let user of users){
            var newUser = model.User(user)
            newUser.save()
        }
        return ResponseHelper.print(true, "user saved successfully")
    
    }

    static async list(query) {
        let temp = Object.assign({},{
            page: 1,
            limit: 1000,
            sort: 'id',
        }, query)
        var filter = query.name ? {$or: [{firstName: query.name},{lastName: query.name}]} : {}
        
        const sortOrder = query.sort[0] == '-' ? '-1' : '1'
        console.log(filter)
        const users = await model.User.find(filter).skip(parseInt(temp.page-1)*parseInt(temp.limit)).limit(parseInt(temp.limit)).sort({ [temp.sort] : sortOrder})
        return users
    }

    static async save(reqBody) {
        const data = await model.User(reqBody).save()
        return ResponseHelper.print(true, data)
    }

    static async show(id) {
        const user = await model.User.findOne({_id : new ObjectId(id)})
        return user
    }

    static async update(id, reqBody) {
        const user = await model.User.findOneAndUpdate({_id : new ObjectId(id)}, {$set : reqBody})
        return ResponseHelper.print(true, 'Updated Successfuly')
    }

    static async remove(id) {
        const user = await model.User.findOneAndRemove({_id : new ObjectId(id)})
        return ResponseHelper.print(true, 'Removed Successfuly')
    }
}


export default UserC