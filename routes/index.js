const argonautesRouter = require("./argonautes");

module.exports = (app) => {
  app.use("/argonautes", argonautesRouter);
};
