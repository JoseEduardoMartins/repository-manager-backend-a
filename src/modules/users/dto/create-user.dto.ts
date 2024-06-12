import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Unique } from '../../../common/decorators/is-unique.decorator';
import { User, UserType } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ required: false })
  @IsString()
  @Unique(User, 'login')
  login: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @Unique(User, 'id')
  id: number;

  @ApiProperty({ required: false })
  @IsString()
  node_id: string;

  @ApiProperty({ required: false })
  @IsString()
  avatar_url: string;

  @ApiProperty({ required: false })
  @IsString()
  gravatar_id: string;

  @ApiProperty({ required: false })
  @IsString()
  url: string;

  @ApiProperty({ required: false })
  @IsString()
  html_url: string;

  @ApiProperty({ required: false })
  @IsString()
  followers_url: string;

  @ApiProperty({ required: false })
  @IsString()
  following_url: string;

  @ApiProperty({ required: false })
  @IsString()
  gists_url: string;

  @ApiProperty({ required: false })
  @IsString()
  starred_url: string;

  @ApiProperty({ required: false })
  @IsString()
  subscriptions_url: string;

  @ApiProperty({ required: false })
  @IsString()
  organizations_url: string;

  @ApiProperty({ required: false })
  @IsString()
  repos_url: string;

  @ApiProperty({ required: false })
  @IsString()
  events_url: string;

  @ApiProperty({ required: false })
  @IsString()
  received_events_url: string;

  @ApiProperty({ required: false })
  @IsEnum(UserType)
  type: UserType;

  @ApiProperty({ required: false })
  @IsBoolean()
  site_admin: boolean;

  @ApiProperty({ required: false })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  company?: string;

  @ApiProperty({ required: false })
  @IsString()
  blog: string;

  @ApiProperty({ required: false })
  @IsString()
  location: string;

  @ApiProperty({ required: false })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  hireable: boolean;

  @ApiProperty({ required: false })
  @IsString()
  bio: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  twitter_username?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  public_repos: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  public_gists: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  followers: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  following: number;

  @ApiProperty({ required: false })
  @IsDateString()
  created_at: Date;

  @ApiProperty({ required: false })
  @IsDateString()
  updated_at: Date;
}
