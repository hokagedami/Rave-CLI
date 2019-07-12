const print = console.info;
const Ravepay = require('ravepay');
const chalk = require('chalk');
const secret = require('../auth/rave-key');

module.exports = chargeCard = (details) => {
    rave.Card.charge(
        {
            "cardno": details.cardno,
            "cvv": details.cvv,
            "expirymonth": details.expirymonth,
            "expiryyear": details.expiryyear,
            "currency": "NGN",
            "country": "NG",
            "amount": "100",
            "email": details.email,
            "phonenumber": details.phone,
            "firstname": details.firstname,
            "lastname": details.lastname,
            "IP": "355426087298442",
            "txRef": "MC-" + Date.now(),// your unique merchant reference
            "meta": [{metaname: "flightID", metavalue: "123949494DC"}],
            "redirect_url": "https://rave-webhook.herokuapp.com/receivepayment",
            "device_fingerprint": "69e6b7f0b72037aa8428b70fbe03986c"
        })
        .then(resp => {
            console.log(resp.body);
            if (resp.body.status === 'success'){
                print(chalk.green(`Transaction ${resp.body.status}`));
                print(chalk.green(`${resp.body.data.vbvrespmessage}`));
            }
            else {
                print(chalk.red(`Transaction ${resp.body.status}`));
            }
        })
        .catch(err => {
            print(chalk.red(err.message))
        })
};


const rave = new Ravepay(secret.public_key, secret.secret_key, false);
