var UserProfileModel = function(cnf) {
    this.email = cnf.email,
    this.userName = cnf.userName,
    this.firstName = cnf.firstName,
    this.lastName = cnf.lastName,
    this.city = cnf.city,
    this.state = cnf.state
};
module.exports = UserProfileModel;