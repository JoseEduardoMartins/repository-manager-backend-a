import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { GenericParamsDto } from '../../../common/dtos/generic-params.dto';
import { UserType } from '../entities/user.entity';

export class FiltersUserDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  login?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  node_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  avatar_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  gravatar_id?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  html_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  followers_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  following_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  gists_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  starred_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  subscriptions_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  organizations_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  repos_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  events_url?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  received_events_url?: string;

  @ApiProperty({ required: false })
  @IsEnum(UserType)
  @IsOptional()
  type?: UserType;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  site_admin?: boolean;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  company?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  blog?: string;

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

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public_repos?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  public_gists?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  followers?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => Number(value))
  @IsOptional()
  following?: number;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  created_at?: Date;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  updated_at?: Date;
}

export class ParamsUserDto extends GenericParamsDto<FiltersUserDto> {}

export class FindUserDto extends FiltersUserDto {
  @ApiProperty({ required: false })
  @IsArray()
  @IsOptional()
  select?: Array<string>;
}
