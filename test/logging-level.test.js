import winston from "winston";

test("membuat logger menggunakan winston dengan level logging adalah verbose, dan default format logging adalah json", () => {
  const logger = new winston.createLogger({
    level: "verbose",
    transports: [new winston.transports.Console({})],
  });

  logger.error({
    message: "Hello error, from logging with console transport",
  });
  logger.warn({
    message: "Hello warn, from logging with console transport",
  });
  logger.info({
    message: "Hello info, from logging with console transport",
  });
  logger.http({
    message: "Hello http, from logging with console transport",
  });
  logger.verbose({
    message: "Hello verbose, from logging with console transport",
  });
  logger.debug({
    message: "Hello debug, from logging with console transport",
  });
  logger.silly({
    message: "Hello silly, from logging with console transport",
  });
});
