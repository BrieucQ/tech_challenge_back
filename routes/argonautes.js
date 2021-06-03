const argonautesRouter = require("express").Router();
const asyncHandler = require("express-async-handler");
const {
  handleAllArgonautes,
  handleOneArgonautes,
  handleCreateArgonautes,
  handleDeleteArgonautes,
} = require("../controllers/argonautes.js");
const requireRequestBody = require("../middlewares/requireRequestBody.js");

argonautesRouter.get("/", asyncHandler(handleAllArgonautes));
argonautesRouter.get("/:id", asyncHandler(handleOneArgonautes));
argonautesRouter.post(
  "/",
  requireRequestBody,
  asyncHandler(handleCreateArgonautes)
);
argonautesRouter.delete(
  ":id",
  requireRequestBody,
  asyncHandler(handleDeleteArgonautes)
);

module.exports = argonautesRouter;
