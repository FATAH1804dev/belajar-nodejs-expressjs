import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

test("membuat logger menggunakan winston dengan transport file", () => {
  const logger = new winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp({ format: "DD/MM/YYYY, HH:MM:SS" }),
      winston.format.splat(),
      winston.format.printf((log) => {
        return `${log.timestamp}, ${log.level.toLocaleUpperCase()} : ${log.message}`;
      }),
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        filename: "log/transport-file.log",
      }),
    ],
  });

  logger.error({
    splat: ["error", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.warn({
    splat: ["warn", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.info({
    splat: ["info", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.http({
    splat: ["http", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.verbose({
    splat: ["verbose", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.debug({
    splat: ["debug", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.silly({
    splat: ["silly", "file"],
    message: "Hello %s, from logging with %s transport",
  });
});

test("membuat logger menggunakan winston dengan level transport file", () => {
  const logger = new winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp({ format: "DD/MM/YYYY, HH:MM:SS" }),
      winston.format.splat(),
      winston.format.printf((log) => {
        return `${log.timestamp}, ${log.level.toLocaleUpperCase()} : ${log.message}`;
      }),
    ),
    transports: [
      new winston.transports.Console({}),
      new winston.transports.File({
        level: "error",
        filename: "log/error-file.log",
      }),
      new winston.transports.File({
        level: "info",
        filename: "log/allInfo-file.log",
      }),
      new winston.transports.File({
        level: "debug",
        filename: "log/fordebug-file.log",
      }),
    ],
  });

  logger.error({
    splat: ["error", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.warn({
    splat: ["warn", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.info({
    splat: ["info", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.http({
    splat: ["http", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.verbose({
    splat: ["verbose", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.debug({
    splat: ["debug", "file"],
    message: "Hello %s, from logging with %s transport",
  });
  logger.silly({
    splat: ["silly", "file"],
    message: "Hello %s, from logging with %s transport",
  });
});

test("membuat logger menggunakan winston dengan daily rotate file", () => {
  const logger = new winston.createLogger({
    level: "silly",
    format: winston.format.combine(
      winston.format.timestamp({ format: "DD/MM/YYYY, HH:MM:SS" }),
      winston.format.splat(),
      winston.format.printf((log) => {
        return `${log.timestamp}, ${log.level.toLocaleUpperCase()} : ${log.message}`;
      }),
    ),
    transports: [
      new winston.transports.Console({}),
      new DailyRotateFile({
        filename: "log/info-%DATE%-.log",
        level: "info",
        datePattern: "YYYY-MM-DD-HH",
        zippedArchive: true,
        maxSize: "5k",
        maxFiles: "2d",
      }),
    ],
  });

  for (i = 1; i < 100; i++) {
    logger.error({
      splat: ["error", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
    logger.warn({
      splat: ["warn", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
    logger.info({
      splat: ["info", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
    logger.http({
      splat: ["http", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
    logger.verbose({
      splat: ["verbose", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
    logger.debug({
      splat: ["debug", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
    logger.silly({
      splat: ["silly", "file", i],
      message: "Hello %s, from logging with %s transport ke-%i",
    });
  }
});
