import winston, { createLogger } from "winston";
import TransportStream from "winston-transport";

test("membuat logger menggunakan winston, dan membuat trnasport sendiri", () => {
  class myTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()}, ${info.level.toUpperCase()} : ${info.message}`,
      );
      next();
    }
  }

  const logger = new winston.createLogger({
    level: "silly",
    transports: [new myTransport({})],
  });

  const halo = "Hello world, Create a my own transport";

  logger.error(halo);
  logger.warn(halo);
  logger.info(halo);
  logger.debug(halo);
  logger.silly(halo);
  logger.verbose(halo);
  logger.http(halo);
});
