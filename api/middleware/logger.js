function logger(req, res, next) {
  const timestamp = new Date(Date.now());
  console.log(`\n${req.method} method made to ${req.originalUrl} at ${timestamp.toLocaleTimeString('en-US')}`);
  next();
}

module.exports = logger;
