import { Router } from "express";
import getCompanies from "./get-companies";

export default (rootDirectory: string) => {
  const router = Router();

  router.get("/companies", getCompanies);

  return router;
};
