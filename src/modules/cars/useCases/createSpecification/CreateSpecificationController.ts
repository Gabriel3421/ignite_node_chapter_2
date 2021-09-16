import { Response, Request } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) { }
  handle(req: Request, res: Response): Response {
    try {
      const { name, description } = req.body;
      this.createSpecificationUseCase.execute({ name, description });
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateSpecificationController };
