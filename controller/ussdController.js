module.exports = ussdController = async (req, res) => {
  const { text, phoneNumber } = req.body;
  let response = "";

  switch (text) {
    case "":
      response = "CON Vote for your favorite series\n";
      response += "1. Prison Break \n";
      response += "2. Money Heist \n";
      response += "3. Squid Game";
      break;

    case "1":
      response = "CON Prison Break as the best series?\n";
      response += "1. Confirm \n";
      response += "2. Cancel";
      break;

    case "1*1":
      response =
        "END Thanks for voting Prison Break, \nYour reference is " +
        phoneNumber;
      break;

    case "1*2":
      response = "END Your session has ended";
      break;

    case "2":
      response = "CON Money Heist as the best series?\n";
      response += "1. Confirm \n";
      response += "2. Cancel";
      break;

    case "2*1":
      response =
        "END Thanks for voting Money Heist, \nYour reference is " + phoneNumber;
      break;

    case "2*2":
      response = "END Your session has ended";
      break;

    case "3":
      response = "CON Squid game as the best series?\n";
      response += "1. Confirm \n";
      response += "2. Cancel";
      break;

    case "3*1":
      response =
        "END Thanks for voting Squid Game, \nYour reference is " + phoneNumber;
      break;

    case "3*2":
      response = "END Your session has ended";
      break;

    default:
      "END Invalid choice";
      break;
  }
  res.set("Content-Type: text/plain");
  return res.send(response);
};
