var uuidv1 = require("uuid/v1");

module.exports = {
    successResponse: (body) => {
        return {
            statusCode: 200,
            body: JSON.stringify(body),
          }
    },
    errorResponse: (body) => {
        return {
            statusCode: 500,
            body: JSON.stringify(body),
          }
    },
    addId: (obj) => {
        obj._id = uuidv1();
        return obj;
    }
}