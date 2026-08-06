import winston from "winston";

const logger = new winston.createLogger({
  transports: [
    new winston.transports.Console({}),
    new winston.transports.File({
      filename: "log/exception.log",
      handleExceptions: true,
    }),
    new winston.transports.File({
      filename: "json/exception.json",
      handleExceptions: true,
    }),
  ],
});

throw new Error("ini Error");
