const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  const body = JSON.parse(event.body);
  const captcha = body["g-recaptcha-response"];

  // Напишите код здесь: вставьте ваш Secret Key
  const secretKey = "6LcXtBUsAAAAAPI3wRVkhqugk7K89pCFoidA0OvT";

  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
  const response = await fetch(verificationUrl, { method: "POST" });
  const data = await response.json();

  if (data.success) {
    return { statusCode: 200, body: "CAPTCHA is done!" };
  } else {
    return { statusCode: 400, body: "please agree that your not a robot." };
  }
};