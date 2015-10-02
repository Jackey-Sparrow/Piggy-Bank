/**
 * Created by Jackey Li on 2015/10/1.
 */

/**
 * define User model
 * @param userName
 * @param password
 * @constructor
 */
function User(user) {
    this.userName = user.userName;
    this.password = user.password;
    this.insertDate = user.insertDate;
    this.canLogin = user.canLogin;
    this.isDelete = user.isDelete;
    this.role = user.role;
}

module.export = User;