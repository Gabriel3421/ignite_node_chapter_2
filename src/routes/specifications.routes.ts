import { Router, Request, Response } from "express";

import { SpecificartionRepository } from "../modules/cars/repositories/SpecificartionRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationsRepository = new SpecificartionRepository();

specificationsRoutes.post("/", (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const createSpecificationService = new CreateSpecificationService(
      specificationsRepository
    );
    createSpecificationService.execute({ name, description });
    return res.status(201).send();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
specificationsRoutes.get("/", (req: Request, res: Response) => {
  const categories = specificationsRepository.list();

  return res.status(201).json(categories);
});

export { specificationsRoutes };
