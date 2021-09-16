import { Specification } from "../../model/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

class ListSpecificationUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private specificationsRepository: ISpecificationRepository) { }
  execute(): Specification[] {
    const categories = this.specificationsRepository.list();
    return categories;
  }
}

export { ListSpecificationUseCase };
