import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenericCreateResponse } from 'src/common/interfaces/generic-response';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { ParamsUserDto } from './dto/find-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

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
        repositories: true,
      },
      relationLoadStrategy: 'join',
    });
  }

  findOne(login: string): Promise<User> {
    return this.userRepository.findOne({
      where: { login },
      relations: {
        repositories: true,
      },
    });
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
