import { Router, Request, Response } from "express";

import { createCategoryController } from "../modules/cars/useCases/createSpecification";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});

specificationsRoutes.get("/", (req: Request, res: Response) => {
  return listCategoryController.handle(req, res);
});

export { specificationsRoutes };
