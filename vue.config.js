let myjson = require("./static/datahome.json");
module.exports = {
    devServer: {
        port: 8080,
        before(app) {
            app.get("/api/datahome", (req,res) => {
                console.log(req)
                res.json(myjson);
            });
        }
       
    }

}
