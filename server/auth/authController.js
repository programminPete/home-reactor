const fs = require('fs');
const {google} = require('googleapis');

authController = {};

authController.getAuth = (req, res, next) => {
  const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
  // const TOKEN_PATH = 'credentials.json';

  try {
    const content = fs.readFileSync(__dirname + '/../utilities/client_secret.json')
  } catch(err){
    return console.log('Error loading client secret file: ', err);
  }
  console.log('in getAuth - next')
  return next();
}

module.exports = authController