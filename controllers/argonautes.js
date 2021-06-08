const {
  getAllArgonautes,
  getOneArgonaute,
  postOneArgonaute,
  deleteOneArgonaute,
} = require("../models/argonautes");

module.exports.handleAllArgonautes = async (req, res) => {
  const data = await getAllArgonautes();
  res.send(data);
};

module.exports.handleOneArgonautes = async (req, res) => {
  res.send(await getOneArgonaute(req.params.id));
};

module.exports.handleCreateArgonautes = async (req, res) => {
  const { name } = req.body;
  const data = await postOneArgonaute({
    name,
  });
  return res.status(201).send(data);
};

module.exports.handleDeleteArgonautes = async (req, res) => {
  await deleteOneArgonaute(req.params.id);
  return res.status(204);
};
