var AccountController = function (userModel, session, userSession, mailer) {
    this.crypto = require('crypto');
    this.uuid = require('./node_modules/node-uuid');
    this.ApiResponse = require('../models/api-response.js');
    this.ApiMessages = require('../models/api-messages.js');
    this.UserProfileModel = require('../models/user-profile.js');
    this.userModel = userModel;
    this.userSession = userSession;
    this.session = session;
    // this.mailer = mailer;
};



AccountController.prototype.getSession = function () {
    return this.session;
};

AccountController.prototype.setSession = function (session) {
    this.session = session;
};

AccountController.prototype.hashPassword = function (password, salt, callback) {
    // we use pbkdf2 to hash and iterate 10k times by default 
    var iterations = 10000,
        keyLen = 64; // 64 bit.
    this.crypto.pbkdf2(password, salt, iterations, keyLen, callback);
};

// for logging on 
AccountController.prototype.logon = function (email, password, callback) {

    var me = this;
    me.userModel.findOne({
        email: email
    }, function (err, user) {

        if (err) {
            return callback(err, new me.ApiResponse({
                success: false,
                extras: {
                    msg: me.ApiMessages.DB_ERROR
                }
            }));
        }

        if (user && user.passwordSalt) {

            me.hashPassword(password, user.passwordSalt, function (err, passwordHash) {

                if (passwordHash == user.passwordHash) {

                    var userProfileModel = new me.UserProfile({
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName
                    });

                    me.session.userProfileModel = userProfileModel;
                    me.session.id = me.uuid.v4();

                    me.userSession.userId = user._id;
                    me.userSession.sessionId = me.session.id;

                    me.userSession.save(function (err, sessionData, numberAffected) {

                        if (err) {
                            return callback(err, new me.ApiResponse({
                                success: false,
                                extras: {
                                    msg: me.ApiMessages.DB_ERROR
                                }
                            }));
                        }

                        if (numberAffected === 1) {
                            // Return the user profile so the router sends it to the client app doing the logon.
                            return callback(err, new me.ApiResponse({
                                success: true,
                                extras: {
                                    userProfileModel: userProfileModel,
                                    sessionId: me.session.id
                                }
                            }));
                        } else {

                            return callback(err, new me.ApiResponse({
                                success: false,
                                extras: {
                                    msg: me.ApiMessages.COULD_NOT_CREATE_SESSION
                                }
                            }));
                        }
                    });
                } else {
                    return callback(err, new me.ApiResponse({
                        success: false,
                        extras: {
                            msg: me.ApiMessages.INVALID_PWD
                        }
                    }));
                }
            });
        } else {
            return callback(err, new me.ApiResponse({
                success: false,
                extras: {
                    msg: me.ApiMessages.EMAIL_NOT_FOUND
                }
            }));
        }

    });
};

// for logging off
AccountController.prototype.logoff = function () {
    if (this.session.userProfileModel) delete this.session.userProfileModel;
    return;
};

// for regestering as a user
AccountController.prototype.register = function (newUser, callback) {
    var me = this;
    me.userModel.findOne({
        email: newUser.email
    }, function (err, user) {
        if (err) {
            return callback(err, new me.ApiResponse({
                success: false,
                extras: {
                    msg: me.ApiMessages.DB_ERROR
                }
            }));
        }
        if (user) {
            return callback(err, new me.ApiResponse({
                success: false,
                extras: {
                    msg: me.ApiMessages.EMAIL_ALREADY_EXISTS
                }
            }));
        } else {
            newUser.save(function (err, user, numberAffected) {
                if (err) {
                    return callback(err, new me.ApiResponse({
                        success: false,
                        extras: {
                            msg: me.ApiMessages.DB_ERROR
                        }
                    }));
                }
                if (numberAffected === 1) {
                    var userProfileModel = new me.UserProfileModel({
                        email: user.email,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        city: user.city,
                        state: user.state
                    });
                    return callback(err, new me.ApiResponse({
                        success: true,
                        extras: {
                            userProfileModel: userProfileModel
                        }
                    }));
                } else {
                    return callback(err, new me.ApiResponse({
                        success: false,
                        extras: {
                            msg: me.ApiMessages.COULD_NOT_CREATE_USER
                        }
                    }));
                }
            });
        }
    });
};

module.exports = AccountController;