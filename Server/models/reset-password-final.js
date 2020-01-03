// this code will send the user an email to confirm their reset of password
// AccountController.prototype.resetPasswordFinal = function (email, newPassword, passwordResetHash, callback) {
//     var me = this;
//     if (!me.session || !me.session.passwordResetHash) {
//         return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_RESET_EXPIRED } }));
//     }
//     if (me.session.passwordResetHash !== passwordResetHash) {
//         return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_RESET_HASH_MISMATCH } }));
//     }
//     if (me.session.emailWhoRequestedPasswordReset !== email) {
//         return callback(null, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.PASSWORD_RESET_EMAIL_MISMATCH } }));
//     }
//     var passwordSalt = this.uuid.v4();
//     me.hashPassword(newPassword, passwordSalt, function (err, passwordHash) {
//         me.userModel.update({ email: email }, { passwordHash: passwordHash, passwordSalt: passwordSalt }, function (err, numberAffected, raw) {
//             if (err) {
//                 return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.DB_ERROR } }));
//             }
//             if (numberAffected < 1) {
//                 return callback(err, new me.ApiResponse({ success: false, extras: { msg: me.ApiMessages.COULD_NOT_RESET_PASSWORD } }));
//             } else {
//                 return callback(err, new me.ApiResponse({ success: true, extras: null }));
//             }                
//         });
//     });
// };