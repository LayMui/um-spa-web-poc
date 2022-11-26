import Twilio from "twilio";

if (!process.env.CIRCLECI) {
  require('dotenv').config()
}

class twilioAPI {

  async readOTP(sentTo) {
  console.log('SENTTO: ' + sentTo)
  const date = new Date();
  const timeStamp = date.toUTCString();

  
  const TWILIO_ACCOUNT_ID = process.env.TWILIO_ACCOUNT_ID;
  const TWILIO_ACCOUNT_API_KEY = process.env.TWILIO_ACCOUNT_API_KEY;
  const TWILIO_ACCOUNT_API_SECRET = process.env.TWILIO_ACCOUNT_API_SECRET;

  if (typeof TWILIO_ACCOUNT_ID !== "undefined" && TWILIO_ACCOUNT_ID) {
    console.log("TWILIO_ACCOUNT_ID is defined");
  } else {
    console.log(`TWILIO_ACCOUNT_ID: ${TWILIO_ACCOUNT_ID}`);
  }

  if (
    typeof TWILIO_ACCOUNT_API_KEY !== "undefined" &&
    TWILIO_ACCOUNT_API_KEY
  ) {
    console.log("TWILIO_ACCOUNT_API_KEY is defined");
  } else {
    console.log(`TWILIO_ACCOUNT_API_KEY: ${TWILIO_ACCOUNT_API_KEY}`);
  }

  if (
    typeof TWILIO_ACCOUNT_API_SECRET !== "undefined" &&
    TWILIO_ACCOUNT_API_SECRET
  ) {
    console.log("TWILIO_ACCOUNT_API_SECRET is defined");
  } else {
    console.log(`TWILIO_ACCOUNT_API_SECRET: ${TWILIO_ACCOUNT_API_SECRET}`);
  }

  const client = new Twilio(TWILIO_ACCOUNT_API_KEY, TWILIO_ACCOUNT_API_SECRET, { accountSid: TWILIO_ACCOUNT_ID});

  let message;

  try {
    const messages = await client.messages.list({
      to: sentTo,
      limit: 1,
      // direction: "inbound",
      // dateSentBefore: timeStamp,
    });
    message = messages[0].body;
  } catch (e) {
    console.error("Got an error:", e.code, e.message);
    return "00000";
  }
  // <#> 24562 is your FarmGo-debug OTP. Do not share this with anyone
  let otpNumber = message.match(/\d/g);
  otpNumber = otpNumber.join("");
  console.info("Otp message : " + message);
  console.info("Otp : " + otpNumber);
  return otpNumber;
}

}

export default new twilioAPI();
