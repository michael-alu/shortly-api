import { Request, Response } from "express";
import respond from "./utilities/respond";
import axios from "axios";
import { config } from "./config";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.shortener.token}`,
  },
});

export const shorten = async (req: Request, res: Response) => {
  try {
    if (!req.body?.long_url) {
      return respond(res, 400, false, "Please provide a URL to shorten");
    }

    const response = await api.post("/shorten", req.body);

    return respond(res, 200, true, "URL shortened successfully", response.data);
  } catch (error: any) {
    return respond(res, 500, false, error.message);
  }
};

export const deleteLink = async (req: Request, res: Response) => {
  try {
    if (!req.params.id) {
      return respond(res, 400, false, "Please provide a URL ID to delete");
    }

    console.log({ first: req.params });

    const response = await api.delete(
      `/bitlinks/${encodeURIComponent(req.params.id)}`
    );

    console.log({ res: response.data });

    return respond(res, 200, true, "URL deleted successfully", response.data);
  } catch (error: any) {
    return respond(res, 500, false, error.message);
  }
};
