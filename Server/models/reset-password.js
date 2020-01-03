// code for resetting the users password
// AccountController.prototype.resetPassword = function (email, callback) {
//     var me = this;
//     me.userModel.findOne({ email: email }, function (err, user) {
//         if (err) {
//             return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.DB_ERROR } }));
//         }
//         // Save the user's email and a password reset hash in session. We will use
//         var passwordResetHash = me.uuid.v4();
//         me.session.passwordResetHash = passwordResetHash;
//         me.session.emailWhoRequestedPasswordReset = email;
//         me.mailer.sendPasswordResetHash(email, passwordResetHash);
//         return callback(err, new me.ApiResponse({ success: true, extras: { passwordResetHash: passwordResetHash } }));
//     })
// };