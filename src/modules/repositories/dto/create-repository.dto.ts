import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { CreateLicenseDto } from 'src/modules/licenses/dto/create-license-dto';
import { Unique } from '../../../common/decorators/is-unique.decorator';
import {
  Repository,
  RepositoryDefaultBranch,
  RepositoryVisibility,
} from '../entities/repository.entity';

export class CreateRepositoryDto {
  @ApiProperty({ required: true })
  @IsNumber()
  @Unique(Repository, 'id')
  id: number;

  @ApiProperty({ required: true })
  @IsString()
  node_id: string;

  @ApiProperty({ required: true })
  @IsString()
  @Unique(Repository, 'name')
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @Unique(Repository, 'name')
  full_name: string;

  @ApiProperty({ required: true })
  @IsBoolean()
  private: boolean;

  @ApiProperty({ required: true })
  @IsUrl()
  html_url: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: true })
  @IsBoolean()
  fork: boolean;

  @ApiProperty({ required: true })
  @IsUrl()
  url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  forks_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  keys_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  collaborators_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  teams_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  hooks_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  issue_events_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  events_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  assignees_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  branches_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  tags_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  blobs_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  git_tags_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  git_refs_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  trees_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  statuses_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  languages_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  stargazers_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  contributors_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  subscribers_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  subscription_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  commits_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  git_commits_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  comments_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  issue_comment_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  contents_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  compare_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  merges_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  archive_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  downloads_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  issues_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  pulls_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  milestones_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  notifications_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  labels_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  releases_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  deployments_url: string;

  @ApiProperty({ required: true })
  @IsDateString()
  created_at: string;

  @ApiProperty({ required: true })
  @IsDateString()
  updated_at: string;

  @ApiProperty({ required: true })
  @IsDateString()
  pushed_at: string;

  @ApiProperty({ required: true })
  @IsString()
  git_url: string;

  @ApiProperty({ required: true })
  @IsString()
  ssh_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  clone_url: string;

  @ApiProperty({ required: true })
  @IsUrl()
  svn_url: string;

  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  homepage?: string;

  @ApiProperty({ required: true })
  @IsNumber()
  size: number;

  @ApiProperty({ required: true })
  @IsNumber()
  stargazers_count: number;

  @ApiProperty({ required: true })
  @IsNumber()
  watchers_count: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  language?: string;

  @ApiProperty({ required: true })
  @IsBoolean()
  has_issues: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  has_projects: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  has_downloads: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  has_wiki: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  has_pages: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  has_discussions: boolean;

  @ApiProperty({ required: true })
  @IsNumber()
  forks_count: number;

  @ApiProperty({ required: false })
  @IsUrl()
  @IsOptional()
  mirror_url?: string;

  @ApiProperty({ required: true })
  @IsBoolean()
  archived: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  disabled: boolean;

  @ApiProperty({ required: true })
  @IsNumber()
  open_issues_count: number;

  @ApiProperty({ required: false })
  @IsObject()
  @IsOptional()
  license?: CreateLicenseDto;

  @ApiProperty({ required: true })
  @IsBoolean()
  allow_forking: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  is_template: boolean;

  @ApiProperty({ required: true })
  @IsBoolean()
  web_commit_signoff_required: boolean;

  @ApiProperty({ required: true })
  @IsArray()
  topics: Array<string>;

  @ApiProperty({ required: true })
  @IsEnum(RepositoryVisibility)
  visibility: RepositoryVisibility;

  @ApiProperty({ required: true })
  @IsNumber()
  forks: number;

  @ApiProperty({ required: true })
  @IsNumber()
  open_issues: number;

  @ApiProperty({ required: true })
  @IsNumber()
  watchers: number;

  @ApiProperty({ required: true })
  @IsEnum(RepositoryDefaultBranch)
  default_branch: RepositoryDefaultBranch;
}
