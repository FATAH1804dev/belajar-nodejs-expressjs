import winston from "winston";

test("membuat logger menggunakan winston dengan transport console, dan level default logging adalah info", () => {
  const logger = new winston.createLogger({
    transports: [new winston.transports.Console({})],
  });

  logger.log({
    level: "error",
    message: "Hello error, from logging with console transport",
  });
  logger.log({
    level: "warn",
    message: "Hello warn, from logging with console transport",
  });
  logger.log({
    level: "info",
    message: "Hello info, from logging with console transport",
  });
  logger.log({
    level: "http",
    message: "Hello http, from logging with console transport",
  });
  logger.log({
    level: "verbose",
    message: "Hello verbose, from logging with console transport",
  });
  logger.log({
    level: "debug",
    message: "Hello debug, from logging with console transport",
  });
  logger.log({
    level: "silly",
    message: "Hello silly, from logging with console transport",
  });
});
