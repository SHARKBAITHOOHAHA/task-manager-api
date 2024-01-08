const SibApiV3Sdk = require("@getbrevo/brevo");

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const apiKey = apiInstance.authentications["apiKey"];
apiKey.apiKey = process.env.SENDGRID_API_KEY;

const sendWelcomeEmail = (email, name) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Thanks for joining in!";
    sendSmtpEmail.htmlContent = `<html><body><h1>Welcome to the app, ${name}.</h1><h2>Let me know how you get along with the app.</h2></body></html>`;
    sendSmtpEmail.sender = {
        name: "Task App",
        email: "memomemoahmed0100@gmail.com",
    };
    sendSmtpEmail.to = [{ email }];

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
            console.log(
                "API called successfully. Returned data: " +
                    JSON.stringify(data)
            );
        },
        function (error) {
            console.error(error);
        }
    );
};

const sendCancelEmail = (email, name) => {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = "Account has been deleted!";
    sendSmtpEmail.htmlContent = `<html><body><h1>Thanks ${name} for using my task app.</h1><h2>Let me know if there are any complaints about the app.</h2></body></html>`;
    sendSmtpEmail.sender = {
        name: "Task App",
        email: "memomemoahmed0100@gmail.com",
    };
    sendSmtpEmail.to = [{ email }];

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
        function (data) {
            console.log(
                "API called successfully. Returned data: " +
                    JSON.stringify(data)
            );
        },
        function (error) {
            console.error(error);
        }
    );
};

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail,
};
