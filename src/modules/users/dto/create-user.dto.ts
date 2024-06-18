import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateRepositoryDto } from 'src/modules/repositories/dto/create-repository.dto';
import { Unique } from '../../../common/decorators/is-unique.decorator';
import { User, UserType } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ required: true })
  @IsString()
  @Unique(User, 'login')
  login: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @Unique(User, 'id')
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  node_id: string;

  @ApiProperty({ required: true })
  @IsString()
  avatar_url: string;

  @ApiProperty({ required: true })
  @IsString()
  gravatar_id: string;

  @ApiProperty({ required: true })
  @IsString()
  url: string;

  @ApiProperty({ required: true })
  @IsString()
  html_url: string;

  @ApiProperty({ required: true })
  @IsString()
  followers_url: string;

  @ApiProperty({ required: true })
  @IsString()
  following_url: string;

  @ApiProperty({ required: true })
  @IsString()
  gists_url: string;

  @ApiProperty({ required: true })
  @IsString()
  starred_url: string;

  @ApiProperty({ required: true })
  @IsString()
  subscriptions_url: string;

  @ApiProperty({ required: true })
  @IsString()
  organizations_url: string;

  @ApiProperty({ required: true })
  @IsString()
  repos_url: string;

  @ApiProperty({ required: true })
  @IsString()
  events_url: string;

  @ApiProperty({ required: true })
  @IsString()
  received_events_url: string;

  @ApiProperty({ required: true })
  @IsEnum(UserType)
  type: UserType;

  @ApiProperty({ required: true })
  @IsBoolean()
  site_admin: boolean;

  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  company?: string;

  @ApiProperty({ required: true })
  @IsString()
  blog: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  location?: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  hireable?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  bio?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  twitter_username?: string;

  @ApiProperty({ required: true })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  public_repos: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  public_gists: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  followers: number;

  @ApiProperty({ required: true })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  following: number;

  @ApiProperty({ required: true })
  @IsDateString()
  created_at: Date;

  @ApiProperty({ required: true })
  @IsDateString()
  updated_at: Date;

  @ApiProperty({ required: false })
  @IsArray()
  @IsOptional()
  repositories?: CreateRepositoryDto[];
}
