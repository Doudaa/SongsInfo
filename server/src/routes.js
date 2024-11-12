const AuthentController = require("./controllers/AuthentController");
const AuthentPolicies = require("./Policies/AuthentPolicies");

module.exports = (app) => {
    app.post("/register",
        AuthentPolicies.register, 
        AuthentController.register
    );
};
