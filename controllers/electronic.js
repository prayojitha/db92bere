var electronic = require("../models/electronic");
// List of all electronics
exports.electronic_list = async function (req, res) {
  try {
    var data = await electronic.find({});

    res.send("The data is \n" + data);
  } catch (err) {
    res.status(500);

    res.send(`{"error": ${err}}`);
  }
};
// for a specific electronic item.
exports.electronic_detail = function (req, res) {
    electronic.find({ category: req.params.name })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500);

      res.send(`{"error": ${err}}`);
    });
};
// Handle electronic create on POST.
exports.electronic_create_post = async function (req, res) {
  console.log(req.body);
  let document = new electronic();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costumetype":"goat", "cost":12, "size":"large"}
  document.category = req.body.category;
  document.item = req.body.item;
  document.price = req.body.price;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.error(500, `{"error": ${err}}`);
  }
};
// Handle electronic delete form on DELETE.
exports.electronic_delete = async function (req, res) {
  try {
    await electronic.deleteMany({ name: req.params.name });
    res.send("data is deleted with category name " + req.params.name);
  } catch (err) {
    res.status(500);

    res.send(`{"error": ${err}}`);
  }
};
// Handle electronic update form on PUT.
exports.electronic_update_put = async function (req, res) {
  try {
    await electronic.updateMany(
      { name: "mobile" },
      { $set: { item: req.params.model } }
    );
    res.send("electronic update PUT" + req.params.id);
  } catch (err) {
    res.status(500);

    res.send(`{"error": ${err}}`);
  }
};
exports.electronic_list = async function (req, res) {
    try {
      theelectronic = await electronic.find();
      res.send(theelectronic);
    
    } catch (err) {
      res.error(500, `{"error": ${err}}`);
    }
  };