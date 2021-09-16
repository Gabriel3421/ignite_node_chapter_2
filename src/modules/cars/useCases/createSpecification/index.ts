import { SpecificartionRepository } from "../../repositories/implementations/SpecificartionRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificartionRepository = SpecificartionRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificartionRepository
);
const createCategoryController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createCategoryController };
