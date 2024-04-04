export default function authenticatedUserOnly(req, res, next) {
  if (req.session.username) {
    next();
  } else {
    const err = new Error('You must be logged in to complete this action.');
    err.statusCode = 401;
    next(err);
  }
}
