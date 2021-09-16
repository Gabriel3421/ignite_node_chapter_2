import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificartionRepository implements ISpecificationRepository {
  private specifications: Specification[];

  public static INSTANCE: SpecificartionRepository;
  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): SpecificartionRepository {
    if (!SpecificartionRepository.INSTANCE) {
      SpecificartionRepository.INSTANCE = new SpecificartionRepository();
    }
    return SpecificartionRepository.INSTANCE;
  }
  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  list(): Specification[] {
    return this.specifications;
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
}

export { SpecificartionRepository };
