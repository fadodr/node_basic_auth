const ApiError = require("../utils/apiError");

module.exports = async (error) => {
    let message = 'something went wrong';
    let statusCode = 500;

    if (error instanceof ApiError) {
        message = error.message;
        statusCode = error.statusCode;
    }

    if (statusCode == 500) console.error(error);
}