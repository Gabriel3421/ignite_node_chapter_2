import { Response, Request } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) { }
  handle(req: Request, res: Response): Response {
    const categories = this.listSpecificationUseCase.execute();
    return res.status(201).json(categories);
  }
}

export { ListSpecificationController };
