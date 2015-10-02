/**
 * Created by Jackey Li on 2015/10/2.
 */

/**
 *
 * @param account
 * @constructor
 */
function Account(account) {
    this.chooseDate = account.chooseDate;
    this.description = account.description;
    this.type = account.type;
    this.money = account.money;
    this.moneyUnit = account.moneyUnit;
}

module.export = Account;