import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createCategoryUseCase: CreateCategoryUseCase) { }
  handle(req: Request, res: Response): Response {
    try {
      const { name, description } = req.body;
      this.createCategoryUseCase.execute({ name, description });
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateCategoryController };
