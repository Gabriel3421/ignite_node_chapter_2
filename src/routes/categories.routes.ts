import { Router, Request, Response } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoryController } from "../modules/cars/useCases/listCategories";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();
categoriesRoutes.post("/", (req: Request, res: Response) => {
  return createCategoryController.handle(req, res);
});
categoriesRoutes.get("/", (req: Request, res: Response) => {
  return listCategoryController.handle(req, res);
});
categoriesRoutes.post(
  "/import",
  upload.single("file"),
  (req: Request, res: Response) => {
    importCategoryController.handle(req, res);
  }
);

export { categoriesRoutes };
