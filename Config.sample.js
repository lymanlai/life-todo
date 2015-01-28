// rename this file to Config.js
// use socket or port
// exports.port = "./app.socket";
exports.port = "8080";

// connect to mongoDB database on modulus.io
exports.dbConnect = "mongodb://username:password@proximus.modulusmongo.net:27017/xxxx";

global.Config = exports;