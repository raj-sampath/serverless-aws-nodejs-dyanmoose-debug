const dynamoose = require("../config/dynamo").dynamoose;

var UserSchema = new dynamoose.Schema({
    _id: {
        type: String,
        hashKey: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
}, { timestamps: true });

UserSchema.statics.getAll = function(){
    return this.scan().exec();
}

UserSchema.statics.deleteById = function(_id){
    return this.delete(_id);
}

var User = dynamoose.model("Users", UserSchema);

module.exports.User = User;

