import { Router, Request, Response } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const createCategoryService = new CreateCategoryService(
      categoriesRepository
    );
    createCategoryService.execute({ name, description });
    return res.status(201).send();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
categoriesRoutes.get("/", (req: Request, res: Response) => {
  const categories = categoriesRepository.list();

  return res.status(201).json(categories);
});

export { categoriesRoutes };
