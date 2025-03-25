import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT,
  shortener: {
    token: process.env.SHORTENER_TOKEN,
  },
};
