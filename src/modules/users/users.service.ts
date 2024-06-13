import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GenericCreateResponse } from 'src/common/interfaces/generic-response';
import { User } from './entities/user.entity';
import { ParamsUserDto } from './dto/find-user-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  find(paramsUserDto: ParamsUserDto): Promise<User[]> {
    return this.userRepository.find({
      ...paramsUserDto,
      relations: {
        repositories: !!paramsUserDto.select.repositories,
      },
    });
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(createUserDto: CreateUserDto): Promise<GenericCreateResponse> {
    const user = this.userRepository.create(createUserDto);
    const response = await this.userRepository.save(user);
    return { id: response.id };
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    const response = await this.userRepository.update({ id }, updateUserDto);
    if (response?.affected === 0) return null;
  }

  async remove(id: number): Promise<void> {
    const response = await this.userRepository.delete({ id });
    if (response?.affected === 0) return null;
  }
}
