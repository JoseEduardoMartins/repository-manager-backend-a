import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericCreateResponse } from 'src/common/interfaces/generic-response';
import { Repository as Repo } from './entities/repository.entity';
import { ParamsRepositoryDto } from './dto/find-repository-dto';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';

@Injectable()
export class RepositorieService {
  constructor(
    @InjectRepository(Repo)
    private repository: Repository<Repo>,
  ) {}

  find(paramsRepositoryDto?: ParamsRepositoryDto): Promise<Repo[]> {
    return this.repository.find(paramsRepositoryDto);
  }

  findOne(id: number): Promise<Repo> {
    return this.repository.findOne({ where: { id } });
  }

  async create(
    createRepositoryDto: CreateRepositoryDto,
  ): Promise<GenericCreateResponse> {
    const repo = this.repository.create(createRepositoryDto);
    const response = await this.repository.save(repo);
    return { id: response.id };
  }

  async update(id: number, updateRepoDto: UpdateRepositoryDto): Promise<void> {
    const response = await this.repository.update({ id }, updateRepoDto);
    if (response?.affected === 0) return null;
  }

  async remove(id: number): Promise<void> {
    const response = await this.repository.delete({ id });
    if (response?.affected === 0) return null;
  }
}
