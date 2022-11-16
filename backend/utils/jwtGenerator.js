/*
@Desc : This is the code for generating the token.
*/
const jwt = require('jsonwebtoken');
require('dotenv').config();

// eslint-disable-next-line require-jsdoc
function jwtGenerator(userId) {
  const payload = {
    user: userId,
  };

  return jwt.sign(payload, process.env.jwtSecret, {expiresIn: '3hr'});
};

module.exports = jwtGenerator;
