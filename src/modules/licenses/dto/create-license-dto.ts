import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateLicenseDto {
  @ApiProperty({ required: false })
  @IsString()
  key: string;

  @ApiProperty({ required: false })
  @IsString()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  spdx_id: string;

  @ApiProperty({ required: false })
  @IsUrl()
  url: string;

  @ApiProperty({ required: false })
  @IsString()
  node_id: string;
}
