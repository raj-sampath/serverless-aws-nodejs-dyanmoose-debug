const User = require("./server/models/user").User;
const utils = require("./server/helper/utils");
const cols = ["_id", "firstName", "lastName"];

const _ = require("lodash");

module.exports.create = async (event, context) => {
  console.log("In Create Function !!!");
  var user = utils.addId(JSON.parse(event.body));
  user = new User(user);
  return user.save()
  .then((createdUser) => utils.successResponse(createdUser))
  .catch((error) => utils.errorResponse(error));
};

module.exports.list = async (event, context) => {
  console.log("In List Function !!!");
  return User.getAll()
  .then((users) => utils.successResponse(users))
  .catch((error) => utils.errorResponse(error));
};

module.exports.update = async (event, context) => {
  console.log("In Update Function !!!");
  var userObj = new User(_.pick(JSON.parse(event.body), cols));
  return userObj.save()
  .then((updatedObj) => utils.successResponse(updatedObj))
  .catch((error) => utils.errorResponse(error));
};

module.exports.delete = async (event, context) => {
  console.log("In Delete Function !!!");
  return User.deleteById(event.pathParameters._id)
  .then((deletedObj) => utils.successResponse(deletedObj))
  .catch((error) => utils.errorResponse(error));
};

