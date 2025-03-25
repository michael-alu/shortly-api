import app from "./app";
import { config } from "./config";

const start = async () => {
  if (!config.shortener) {
    throw new Error("SHORTNER_TOKEN is not provided");
  }

  app.listen(config.port, () => {
    console.log(
      "\x1b[32m%s\x1b[0m",
      `App is running on port ${config.port} 🚀`
    );
  });
};

start();
