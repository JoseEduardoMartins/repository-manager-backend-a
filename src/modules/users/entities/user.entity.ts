import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Repository } from 'src/modules/repositories/entities/repository.entity';

export enum UserType {
  User = 'User',
}

@Entity({
  name: 'user',
})
export class User {
  @Column({
    name: 'login',
    type: 'varchar',
  })
  login: string;

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
    name: 'avatar_url',
    type: 'varchar',
  })
  avatar_url: string;

  @Column({
    name: 'gravatar_id',
    type: 'varchar',
  })
  gravatar_id: string;

  @Column({
    name: 'url',
    type: 'varchar',
  })
  url: string;

  @Column({
    name: 'html_url',
    type: 'varchar',
  })
  html_url: string;

  @Column({
    name: 'followers_url',
    type: 'varchar',
  })
  followers_url: string;

  @Column({
    name: 'following_url',
    type: 'varchar',
  })
  following_url: string;

  @Column({
    name: 'gists_url',
    type: 'varchar',
  })
  gists_url: string;

  @Column({
    name: 'starred_url',
    type: 'varchar',
  })
  starred_url: string;

  @Column({
    name: 'subscriptions_url',
    type: 'varchar',
  })
  subscriptions_url: string;

  @Column({
    name: 'organizations_url',
    type: 'varchar',
  })
  organizations_url: string;

  @Column({
    name: 'repos_url',
    type: 'varchar',
  })
  repos_url: string;

  @Column({
    name: 'events_url',
    type: 'varchar',
  })
  events_url: string;

  @Column({
    name: 'received_events_url',
    type: 'varchar',
  })
  received_events_url: string;

  @Column({
    name: 'type',
    type: 'enum',
    enum: UserType,
    default: UserType.User,
  })
  type: UserType;

  @Column({
    name: 'site_admin',
    type: 'boolean',
  })
  site_admin: boolean;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'company',
    type: 'varchar',
    nullable: true,
  })
  company?: string;

  @Column({
    name: 'blog',
    type: 'varchar',
  })
  blog: string;

  @Column({
    name: 'location',
    type: 'varchar',
  })
  location: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: true,
  })
  email?: string;

  @Column({
    name: 'hireable',
    type: 'boolean',
  })
  hireable: boolean;

  @Column({
    name: 'bio',
    type: 'varchar',
  })
  bio: string;

  @Column({
    name: 'twitter_username',
    type: 'varchar',
    nullable: true,
  })
  twitter_username?: string;

  @Column({
    name: 'public_repos',
    type: 'int',
  })
  public_repos: number;

  @Column({
    name: 'public_gists',
    type: 'int',
  })
  public_gists: number;

  @Column({
    name: 'followers',
    type: 'int',
  })
  followers: number;

  @Column({
    name: 'following',
    type: 'int',
  })
  following: number;

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

  @OneToMany(() => Repository, (repository) => repository.user)
  repositories?: Repository[];

  constructor(user?: Partial<User>) {
    this.login = user?.login;
    this.id = user?.id;
    this.node_id = user?.node_id;
    this.avatar_url = user?.avatar_url;
    this.gravatar_id = user?.gravatar_id;
    this.url = user?.url;
    this.html_url = user?.html_url;
    this.followers_url = user?.followers_url;
    this.following_url = user?.following_url;
    this.gists_url = user?.gists_url;
    this.starred_url = user?.starred_url;
    this.subscriptions_url = user?.subscriptions_url;
    this.organizations_url = user?.organizations_url;
    this.repos_url = user?.repos_url;
    this.events_url = user?.events_url;
    this.received_events_url = user?.received_events_url;
    this.type = user?.type;
    this.site_admin = user?.site_admin;
    this.name = user?.name;
    this.company = user?.company;
    this.blog = user?.blog;
    this.location = user?.location;
    this.email = user?.email;
    this.hireable = user?.hireable;
    this.bio = user?.bio;
    this.twitter_username = user?.twitter_username;
    this.public_repos = user?.public_repos;
    this.public_gists = user?.public_gists;
    this.followers = user?.followers;
    this.following = user?.following;
    this.created_at = user?.created_at;
    this.updated_at = user?.updated_at;
  }
}
