import { License } from 'src/modules/licenses/entities/license.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

export enum RepositoryVisibility {
  public = 'public',
  private = 'private',
}

export enum RepositoryDefaultBranch {
  main = 'main',
  master = 'master',
}

@Entity({
  name: 'repository',
})
export class Repository {
  @PrimaryColumn({
    name: 'id',
    type: 'int',
  })
  id: number;

  @Column({
    name: 'node_id',
    type: 'varchar',
  })
  node_id: string;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'full_name',
    type: 'varchar',
  })
  full_name: string;

  @Column({
    name: 'private',
    type: 'boolean',
  })
  private: boolean;

  @Column({
    name: 'html_url',
    type: 'varchar',
  })
  html_url: string;

  @Column({
    name: 'description',
    type: 'varchar',
    nullable: true,
  })
  description?: string;

  @Column({
    name: 'fork',
    type: 'boolean',
  })
  fork: boolean;

  @Column({
    name: 'url',
    type: 'varchar',
  })
  url: string;

  @Column({
    name: 'forks_url',
    type: 'varchar',
  })
  forks_url: string;

  @Column({
    name: 'keys_url',
    type: 'varchar',
  })
  keys_url: string;

  @Column({
    name: 'collaborators_url',
    type: 'varchar',
  })
  collaborators_url: string;

  @Column({
    name: 'teams_url',
    type: 'varchar',
  })
  teams_url: string;

  @Column({
    name: 'hooks_url',
    type: 'varchar',
  })
  hooks_url: string;

  @Column({
    name: 'issue_events_url',
    type: 'varchar',
  })
  issue_events_url: string;

  @Column({
    name: 'events_url',
    type: 'varchar',
  })
  events_url: string;

  @Column({
    name: 'assignees_url',
    type: 'varchar',
  })
  assignees_url: string;

  @Column({
    name: 'branches_url',
    type: 'varchar',
  })
  branches_url: string;

  @Column({
    name: 'tags_url',
    type: 'varchar',
  })
  tags_url: string;

  @Column({
    name: 'blobs_url',
    type: 'varchar',
  })
  blobs_url: string;

  @Column({
    name: 'git_tags_url',
    type: 'varchar',
  })
  git_tags_url: string;

  @Column({
    name: 'git_refs_url',
    type: 'varchar',
  })
  git_refs_url: string;

  @Column({
    name: 'trees_url',
    type: 'varchar',
  })
  trees_url: string;

  @Column({
    name: 'statuses_url',
    type: 'varchar',
  })
  statuses_url: string;

  @Column({
    name: 'languages_url',
    type: 'varchar',
  })
  languages_url: string;

  @Column({
    name: 'stargazers_url',
    type: 'varchar',
  })
  stargazers_url: string;

  @Column({
    name: 'contributors_url',
    type: 'varchar',
  })
  contributors_url: string;

  @Column({
    name: 'subscribers_url',
    type: 'varchar',
  })
  subscribers_url: string;

  @Column({
    name: 'subscription_url',
    type: 'varchar',
  })
  subscription_url: string;

  @Column({
    name: 'commits_url',
    type: 'varchar',
  })
  commits_url: string;

  @Column({
    name: 'git_commits_url',
    type: 'varchar',
  })
  git_commits_url: string;

  @Column({
    name: 'comments_url',
    type: 'varchar',
  })
  comments_url: string;

  @Column({
    name: 'issue_comment_url',
    type: 'varchar',
  })
  issue_comment_url: string;

  @Column({
    name: 'contents_url',
    type: 'varchar',
  })
  contents_url: string;

  @Column({
    name: 'compare_url',
    type: 'varchar',
  })
  compare_url: string;

  @Column({
    name: 'merges_url',
    type: 'varchar',
  })
  merges_url: string;

  @Column({
    name: 'archive_url',
    type: 'varchar',
  })
  archive_url: string;

  @Column({
    name: 'downloads_url',
    type: 'varchar',
  })
  downloads_url: string;

  @Column({
    name: 'issues_url',
    type: 'varchar',
  })
  issues_url: string;

  @Column({
    name: 'pulls_url',
    type: 'varchar',
  })
  pulls_url: string;

  @Column({
    name: 'milestones_url',
    type: 'varchar',
  })
  milestones_url: string;

  @Column({
    name: 'notifications_url',
    type: 'varchar',
  })
  notifications_url: string;

  @Column({
    name: 'labels_url',
    type: 'varchar',
  })
  labels_url: string;

  @Column({
    name: 'releases_url',
    type: 'varchar',
  })
  releases_url: string;

  @Column({
    name: 'deployments_url',
    type: 'varchar',
  })
  deployments_url: string;

  @Column({
    name: 'created_at',
    type: 'datetime',
  })
  created_at: Date;

  @Column({
    name: 'updated_at',
    type: 'datetime',
  })
  updated_at: Date;

  @Column({
    name: 'pushed_at',
    type: 'datetime',
  })
  pushed_at: Date;

  @Column({
    name: 'git_url',
    type: 'varchar',
  })
  git_url: string;

  @Column({
    name: 'ssh_url',
    type: 'varchar',
  })
  ssh_url: string;

  @Column({
    name: 'clone_url',
    type: 'varchar',
  })
  clone_url: string;

  @Column({
    name: 'svn_url',
    type: 'varchar',
  })
  svn_url: string;

  @Column({
    name: 'homepage',
    type: 'varchar',
    nullable: true,
  })
  homepage?: string;

  @Column({
    name: 'size',
    type: 'int',
  })
  size: number;

  @Column({
    name: 'stargazers_count',
    type: 'int',
  })
  stargazers_count: number;

  @Column({
    name: 'watchers_count',
    type: 'int',
  })
  watchers_count: number;

  @Column({
    name: 'language',
    type: 'varchar',
  })
  language: string;

  @Column({
    name: 'has_issues',
    type: 'boolean',
  })
  has_issues: boolean;

  @Column({
    name: 'has_projects',
    type: 'boolean',
  })
  has_projects: boolean;

  @Column({
    name: 'has_downloads',
    type: 'boolean',
  })
  has_downloads: boolean;

  @Column({
    name: 'has_wiki',
    type: 'boolean',
  })
  has_wiki: boolean;

  @Column({
    name: 'has_pages',
    type: 'boolean',
  })
  has_pages: boolean;

  @Column({
    name: 'has_discussions',
    type: 'boolean',
  })
  has_discussions: boolean;

  @Column({
    name: 'forks_count',
    type: 'int',
  })
  forks_count: number;

  @Column({
    name: 'mirror_url',
    type: 'varchar',
    nullable: true,
  })
  mirror_url?: string;

  @Column({
    name: 'archived',
    type: 'boolean',
  })
  archived: boolean;

  @Column({
    name: 'disabled',
    type: 'boolean',
  })
  disabled: boolean;

  @Column({
    name: 'open_issues_count',
    type: 'int',
  })
  open_issues_count: number;

  @ManyToOne(() => License, (license) => license.repositories)
  license?: License;

  @Column({
    name: 'allow_forking',
    type: 'boolean',
  })
  allow_forking: boolean;

  @Column({
    name: 'is_template',
    type: 'boolean',
  })
  is_template: boolean;

  @Column({
    name: 'web_commit_signoff_required',
    type: 'boolean',
  })
  web_commit_signoff_required: boolean;

  topics: Array<string>;

  @Column({
    name: 'visibility',
    type: 'enum',
    enum: RepositoryVisibility,
    default: RepositoryVisibility.public,
  })
  visibility: RepositoryVisibility;

  @Column({
    name: 'forks',
    type: 'int',
  })
  forks: number;

  @Column({
    name: 'open_issues',
    type: 'int',
  })
  open_issues: number;

  @Column({
    name: 'watchers',
    type: 'int',
  })
  watchers: number;

  @Column({
    name: 'default_branch',
    type: 'enum',
    enum: RepositoryDefaultBranch,
    default: RepositoryDefaultBranch.main,
  })
  default_branch: RepositoryDefaultBranch;

  @ManyToOne(() => User, (user) => user.repositories)
  user: User;

  constructor(repository?: Partial<Repository>) {
    this.id = repository?.id;
    this.node_id = repository?.node_id;
    this.name = repository?.name;
    this.full_name = repository?.full_name;
    this.private = repository?.private;
    this.html_url = repository?.html_url;
    this.description = repository?.description;
    this.fork = repository?.fork;
    this.url = repository?.url;
    this.forks_url = repository?.forks_url;
    this.keys_url = repository?.keys_url;
    this.collaborators_url = repository?.collaborators_url;
    this.teams_url = repository?.teams_url;
    this.hooks_url = repository?.hooks_url;
    this.issue_events_url = repository?.issue_events_url;
    this.events_url = repository?.events_url;
    this.assignees_url = repository?.assignees_url;
    this.branches_url = repository?.branches_url;
    this.tags_url = repository?.tags_url;
    this.blobs_url = repository?.blobs_url;
    this.git_tags_url = repository?.git_tags_url;
    this.git_refs_url = repository?.git_refs_url;
    this.trees_url = repository?.trees_url;
    this.statuses_url = repository?.statuses_url;
    this.languages_url = repository?.languages_url;
    this.stargazers_url = repository?.stargazers_url;
    this.contributors_url = repository?.contributors_url;
    this.subscribers_url = repository?.subscribers_url;
    this.subscription_url = repository?.subscription_url;
    this.commits_url = repository?.commits_url;
    this.git_commits_url = repository?.git_commits_url;
    this.comments_url = repository?.comments_url;
    this.issue_comment_url = repository?.issue_comment_url;
    this.contents_url = repository?.contents_url;
    this.compare_url = repository?.compare_url;
    this.merges_url = repository?.merges_url;
    this.archive_url = repository?.archive_url;
    this.downloads_url = repository?.downloads_url;
    this.issues_url = repository?.issues_url;
    this.pulls_url = repository?.pulls_url;
    this.milestones_url = repository?.milestones_url;
    this.notifications_url = repository?.notifications_url;
    this.labels_url = repository?.labels_url;
    this.releases_url = repository?.releases_url;
    this.deployments_url = repository?.deployments_url;
    this.created_at = repository?.created_at;
    this.updated_at = repository?.updated_at;
    this.pushed_at = repository?.pushed_at;
    this.git_url = repository?.git_url;
    this.ssh_url = repository?.ssh_url;
    this.clone_url = repository?.clone_url;
    this.svn_url = repository?.svn_url;
    this.homepage = repository?.homepage;
    this.size = repository?.size;
    this.stargazers_count = repository?.stargazers_count;
    this.watchers_count = repository?.watchers_count;
    this.language = repository?.language;
    this.has_issues = repository?.has_issues;
    this.has_projects = repository?.has_projects;
    this.has_downloads = repository?.has_downloads;
    this.has_wiki = repository?.has_wiki;
    this.has_pages = repository?.has_pages;
    this.has_discussions = repository?.has_discussions;
    this.forks_count = repository?.forks_count;
    this.mirror_url = repository?.mirror_url;
    this.archived = repository?.archived;
    this.disabled = repository?.disabled;
    this.open_issues_count = repository?.open_issues_count;
    this.license = repository?.license;
    this.allow_forking = repository?.allow_forking;
    this.is_template = repository?.is_template;
    this.web_commit_signoff_required = repository?.web_commit_signoff_required;
    this.topics = repository?.topics;
    this.visibility = repository?.visibility;
    this.forks = repository?.forks;
    this.open_issues = repository?.open_issues;
    this.watchers = repository?.watchers;
    this.default_branch = repository?.default_branch;
  }
}
