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
exports.electronic_detail = async function (req, res) {
  console.log("detail" + req.params.id)
  try{
    result = await electronic.findById(req.params.id)
    res.send(result)
  }catch(error){
    res.status(500)
    res.send(`{"error":document for id ${req.params.id} not found}`);
  }
};
    
// Handle electronic create on POST.
exports.electronic_create_post = async function (req, res) {
  console.log("body",req.body);
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
  console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
  try{
    let toUpdate = await electronic.findById(req.params.id)
    //Do updates of properties
    if(req.body.category) toUpdate.category=req.body.category;
    if(req.body.cost) toUpdate.item = req.body.item;
    if(req.body.price) toUpdate.price = req.body.price;
    if(req.body.checkboxsale) toUpdate.sale = true;
      else toUpdate.same = false;
    let result = await toUpdate.save();
    console.log("Success" + result)
    res.send(result)
  }catch(err){
    res.status(500)
    res.send(`{"error":${err}: Update for id ${req.params.id} failed}`);
  }
};
  
  



exports.electronic_view_all_Page = async function (req, res) {
    try {
      theelectronic = await electronic.find();
      res.render('electronni', 
      { title: 'electronic Search Results', 
      results: theelectronic });
    
    } catch (err) {
      res.error(500, `{"error": ${err}}`);
    }
  };