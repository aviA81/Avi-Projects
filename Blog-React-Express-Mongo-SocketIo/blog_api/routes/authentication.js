import express from 'express';
import bcrypt from 'bcrypt';
import Joi from 'joi';

const router = express.Router();

const userSchema = Joi.object({
  username: Joi.string()
    .required(),
  password: Joi.string()
    .required()
});

router.use(async (req, res, next) => {
  req.users = await req.database.collection('users');
  next();
});

// Endpoint to handle the registration of a user
router.post('/register', (async (req, res, next) => {
  try {
    const validationResult = userSchema.validate(req.body, { abortEarly: false });
    if (validationResult.error) {
      const err = new Error(validationResult.error.message);
      err.status = 422;
      next(err);
    }

    // Incrypt the password and save the hash
    const hash = await bcrypt.hash(req.body.password, 10);

    // This is how to interact with indexes in mongodb
    /*db.users.getIndexes()
    db.users.dropIndex('username_1')
    db.users.createIndex({ username: 1 }, { unique: true })*/

    // Insert the username and hash into the users table in the database
    const result = await req.users.insertOne({ username: req.body.username, password: hash });

    console.log(result);

    // If insert was successful send a 201 created status code
    res.sendStatus(201);

    req.session.username = req.body.username;
  } catch (err) {
    console.log(err);

    // If the error code is 11000 meaning the index is not unique
    if (err.code === 11000) {
      return next(new Error(`${req.body.username} is already taken. Please try a different name`));
    }

    return next(err);
  }
}));

router.post('/login', async (req, res, next) => {
  try {
    const results = await req.users.findOne({ username: req.body.username });

    if (!results) {
      throw new Error('Bad username and/or password');
    }
    console.log(results);

    if (!await bcrypt.compare(req.body.password, results.password)) {
      throw new Error('Bad username and/or password');
    }

    req.session.username = req.body.username;
    res.sendStatus(204);
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.sendStatus(204);
});

export default router;
