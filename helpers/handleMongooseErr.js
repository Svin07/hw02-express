function handleMongooseErr(error, data, next) {
  error.status = 409;
  error.message = "Email in use";

  next();
}

module.exports = handleMongooseErr;
