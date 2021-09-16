import { SpecificartionRepository } from "../../repositories/implementations/SpecificartionRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

const specificartionRepository = SpecificartionRepository.getInstance();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificartionRepository
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase
);

export { listSpecificationController };
