import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { getParams } from '../../common/helpers/params';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user-dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@ApiTags('User')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    @Inject('RABBITMQ_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  @ApiOperation({
    description: 'Listagem de usuarios utilizando filtros.',
    tags: ['User'],
  })
  @Get()
  find(@Query() query?: FindUserDto) {
    const params = getParams(query);
    return this.usersService.find(params);
  }

  @ApiOperation({
    description: 'Listagem de usuario utilizando login.',
    tags: ['User'],
  })
  @Get(':login')
  async findOne(@Param('login') login: string) {
    const user = await this.usersService.findOne(login);

    if (user) return user;

    const pattern = { cmd: 'find_user' };
    const payload = { login };

    const result = this.client.send(pattern, payload);
    const response: CreateUserDto = await firstValueFrom(result);
    console.log(response);

    await this.usersService.create(response);

    return response;
  }

  @ApiOperation({
    description: 'Criação de usuario.',
    tags: ['User'],
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({
    description: 'Atualização de usuario',
    tags: ['User'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const response = await this.usersService.update(id, updateUserDto);

    if (response === null)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  @ApiOperation({
    description: 'Deleção de usuario',
    tags: ['User'],
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const response = await this.usersService.remove(id);

    if (response === null)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
