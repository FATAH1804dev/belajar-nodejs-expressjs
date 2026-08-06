import winston from "winston";

const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: "log/rejections.log",
      handleRejections: true,
    }),
    new winston.transports.File({
      filename: "json/rejections.json",
      handleRejections: true,
    }),
  ],
});

async function random() {
  return Promise.reject("ini adalah reject");
}
random();
