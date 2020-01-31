const controller = require("./controllers")

module.exports = (app) => {
	app.get("/about", controller.about);
	app.get('/distance/:zipcode1/:zipcode2', controller.get_distance);
}