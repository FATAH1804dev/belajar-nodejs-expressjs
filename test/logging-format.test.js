import winston from "winston";

test("membuat logger menggunakan winston kemudian mengubah format logging", () => {
  const logger = new winston.createLogger({
    level: "silly",
    format: winston.format.simple(),
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

test("membuat logger menggunakan winston kemudian membuat format logging sendiri", () => {
  const logger = new winston.createLogger({
    level: "debug",
    format: winston.format.printf((log) => {
      const date = new Date();
      return `${date.toLocaleString()}, ${log.level.toUpperCase()} : ${log.message}`;
    }),
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

test("membuat logger menggunakan winston kemudian mengcombine format", () => {
  const logger = new winston.createLogger({
    level: "debug",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.splat(),
      winston.format.json(),
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error({
    splat: ["error"],
    message: "Hello %s, from logging with console transport",
  });
  logger.warn({
    splat: ["warn"],
    message: "Hello %s, from logging with console transport",
  });
  logger.info({
    splat: ["info"],
    message: "Hello %s, from logging with console transport",
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

test("membuat logger menggunakan winston kemudian mengcombine format dan printf", () => {
  const logger = new winston.createLogger({
    level: "http",
    format: winston.format.combine(
      winston.format.timestamp({ format: "DD/MM/YYYY, HH:MM:SS" }),
      winston.format.splat(),
      winston.format.printf((log) => {
        return `${log.timestamp}, ${log.level.toLocaleUpperCase()} : ${log.message}`;
      }),
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.error({
    splat: ["error"],
    message: "Hello %s, from logging with console transport",
  });
  logger.warn({
    splat: ["warn"],
    message: "Hello %s, from logging with console transport",
  });
  logger.info({
    splat: ["info"],
    message: "Hello %s, from logging with console transport",
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
