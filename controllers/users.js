const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login
};



async function signup(req, res) {
  body = {
    'name':req.body.name,
   'email': req.body.email,
    'password': req.body.password
  };
  console.log(req.body);
  const user = new User(body);
  console.log(user);
  console.log(req)
  try {
    await user.save();
   const token = createJWT(user);
   res.json({token})
    res.status(200);
  } catch (err) {
    console.log(err);
    // Probably a duplicate email
    res.status(400).json(err);
  }
}



async function login(req, res) {
 try {
   console.log(req.body);
    // find the user by email
  const user = await User.findOne({email: req.body.email});
  console.log(user); 
  // if !user found - send back a 401 "bad credentials"
  if(!user) return res.status(401).json({err: 'bad credentials'});
  // if user found - move on to check password
  // Check password using a instance method we need to define in user model

  user.comparePassword(req.body.password, (err, isMatch) => {
    console.log(isMatch);
    if(isMatch) {
      // if password matched, send back a 200 response
      const token = createJWT(user);
      res.json({ token });
    } else {
      // if !password matched, send a 401 "bad credentials"
      return res.status(401).json({err: 'bad credentials'});
    }
  });
 } catch (error) {
   return res.status(400).json(err);
 }
}


function createJWT(user) {
  return jwt.sign(
    { user }, 
    SECRET, 
    {expiresIn: '24h'}
  );
}