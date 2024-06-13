import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from './entities/repository.entity';
import { RepositoriesController } from './repositories.controller';
import { RepositorieService } from './repositories.service';

@Module({
  imports: [TypeOrmModule.forFeature([Repository])],
  providers: [RepositorieService],
  controllers: [RepositoriesController],
  exports: [TypeOrmModule],
})
export class RepositoriesModule {}
