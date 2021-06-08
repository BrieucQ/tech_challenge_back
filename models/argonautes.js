const db = require("../db.js");
const { RecordNotFoundError } = require("../error-types");
const definedAttributesToSqlSet = require("../helpers/definedAttributesToSqlSet.js");

const getAllArgonautes = async () => {
  return db.query("SELECT * FROM argonautes");
};

const getOneArgonaute = async (id, failIfNotFound = true) => {
  const rows = await db.query("SELECT * FROM argonautes WHERE id = ?", [id]);
  if (rows.length) {
    return rows[0];
  }
  if (failIfNotFound) throw new RecordNotFoundError();
  return null;
};

const postOneArgonaute = async (formData) => {
  return db
    .query(
      `INSERT INTO argonautes SET ${definedAttributesToSqlSet(formData)}`,
      formData
    )
    .then((response) => getOneArgonaute(response.insertId));
};

const deleteOneArgonaute = async (id) => {
  await db.query("DELETE FROM argonautes WHERE id = ?", [id]);
};

module.exports = {
  getAllArgonautes,
  getOneArgonaute,
  postOneArgonaute,
  deleteOneArgonaute,
};
