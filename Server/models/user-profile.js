var UserProfileModel = function(cnf) {
    this.email = cnf.email,
    this.userName = cnf.userName,
    this.city = cnf.city,
    this.state = cnf.state
};
module.exports = UserProfileModel;