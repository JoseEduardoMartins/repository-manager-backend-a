import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { getParams } from '../../common/helpers/params';
import { RepositorieService } from './repositories.service';
import { FindRepositoryDto } from './dto/find-repository-dto';
import { CreateRepositoryDto } from './dto/create-repository.dto';
import { UpdateRepositoryDto } from './dto/update-repository.dto';

@ApiTags('Repository')
@Controller('repositories')
export class RepositoriesController {
  constructor(private readonly repositorieService: RepositorieService) {}

  @ApiOperation({
    description: 'Listagem de repositorios utilizando filtros.',
    tags: ['Repository'],
  })
  @Get()
  find(@Query() query?: FindRepositoryDto) {
    const params = getParams(query);
    return this.repositorieService.find(params);
  }

  @ApiOperation({
    description: 'Listagem de repositorio utilizando id.',
    tags: ['Repository'],
  })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.repositorieService.findOne(id);
  }

  @ApiOperation({
    description: 'Criação de repositorio.',
    tags: ['Repository'],
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateRepositoryDto) {
    return this.repositorieService.create(createUserDto);
  }

  @ApiOperation({
    description: 'Atualização de repositorio',
    tags: ['Repository'],
  })
  @Patch(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateRepositoryDto,
  ) {
    const response = await this.repositorieService.update(id, updateUserDto);

    if (response === null)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  @ApiOperation({
    description: 'Deleção de repositorio',
    tags: ['Repository'],
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseIntPipe) id: number) {
    const response = await this.repositorieService.remove(id);

    if (response === null)
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
