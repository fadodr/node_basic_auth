const signUp = require("./controllers/signup");
const login = require("./controllers/login");
const forgotPassword = require("./controllers/forgotPassword");
const resetPassword = require("./controllers/resetPassword");
const logout = require("./controllers/logout");
const { controllerHandler } = require('./utils');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    //This is a callback that controls the call to a controller function;
    function controller(callBack) {
      callBack(req, res);
    };

    const rootUrl = "/api/user";

    if (url.includes(rootUrl)) {
        const remUrlPath = url.split(rootUrl)[1];
        console.log(remUrlPath);
        if (remUrlPath === "/login" && method === "POST")
            return controller(controllerHandler(login));
        if (remUrlPath === "/signup" && method === "POST")
            return controller(controllerHandler(signUp));
        if (remUrlPath === "/forgot-password" && method === "POST")
            return controller(controllerHandler(forgotPassword));
        if (remUrlPath === "/reset-password" && method === "PATCH")
            return controller(controllerHandler(resetPassword));
        if (remUrlPath === "/logout" && method === "DELETE")
            return controller(controllerHandler(logout));
        throw new Error("Page not found");
    } else {
        throw new Error("Page not found");
    }
};;

module.exports = requestHandler;
