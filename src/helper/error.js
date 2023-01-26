class SysError extends Error {
    constructor(statusCode, message) {
      super(message);
      this.statusCode = statusCode; 
    }
  }
  
  const handleErrors = (err, req, res, next) => {
    if (!(err instanceof SysError)) {
      err = new SysError(500, "Internal Server");
    }
  
    const { message, statusCode } = err;
    res.status(statusCode).json({
      status: "error",
      message: message,
    });
  
    next();
  };
  
  module.exports = {
    SysError,
    handleErrors,
  };