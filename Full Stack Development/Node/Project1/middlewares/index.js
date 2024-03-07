const fs = require("fs");
const logReqRes = (fileName) => {
  return (req, res, next) => {
    const log = `${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`;
    fs.appendFile(fileName, log, (err, data) => {
      next();
    });
  };
};

module.exports = {
  logReqRes,
};
