const argonautesRouter = require("express").Router();
const asyncHandler = require("express-async-handler");
const {
  handleAllArgonautes,
  handleOneArgonautes,
  handleCreateArgonautes,
  handleDeleteArgonautes,
} = require("../controllers/argonautes.js");

argonautesRouter.get("/", asyncHandler(handleAllArgonautes));
argonautesRouter.get("/:id", asyncHandler(handleOneArgonautes));
argonautesRouter.post("/", asyncHandler(handleCreateArgonautes));
argonautesRouter.delete(":id", asyncHandler(handleDeleteArgonautes));

module.exports = argonautesRouter;
