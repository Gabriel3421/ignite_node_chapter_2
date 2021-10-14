import { Response, Request } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }
  handle(req: Request, res: Response): Response {
    try {
      const { file } = req;
      this.importCategoryUseCase.execute(file);
      return res.send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { ImportCategoryController };
