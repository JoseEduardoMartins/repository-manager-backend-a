import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from './users.service';
import { User, UserType } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  UpdateResponse,
  DeleteResponse,
} from '../../common/interfaces/repository-response';

const user = new User({
  login: 'userTest',
  id: 1,
  node_id: 'sadfjnsadoifnsd',
  avatar_url: 'https://http://localhost:3000/avatar_url',
  gravatar_id: '',
  url: 'https://http://localhost:3000/',
  html_url: 'https://http://localhost:3000/userTest',
  followers_url: 'https://http://localhost:3000//followers',
  following_url: 'https://http://localhost:3000//following{/other_user}',
  gists_url: 'https://http://localhost:3000//gists{/gist_id}',
  starred_url: 'https://http://localhost:3000//starred{/owner}{/repo}',
  subscriptions_url: 'https://http://localhost:3000//subscriptions',
  organizations_url: 'https://http://localhost:3000//orgs',
  repos_url: 'https://http://localhost:3000//repos',
  events_url: 'https://http://localhost:3000//events{/privacy}',
  received_events_url: 'https://http://localhost:3000//received_events',
  type: UserType.User,
  site_admin: false,
  name: 'test 1',
  company: null,
  blog: '',
  location: 'Barcelona',
  email: null,
  hireable: true,
  bio: '',
  twitter_username: null,
  public_repos: 17,
  public_gists: 0,
  followers: 8,
  following: 12,
  created_at: new Date('2019-04-13T18:47:06Z'),
  updated_at: new Date('2024-05-13T21:24:06Z'),
});

const findResponse = [user];

const createdResponse = { id: 1 };

const updateResponse = new UpdateResponse({
  generatedMaps: [],
  raw: [],
  affected: 1,
});

const deleteResponse = new DeleteResponse({ raw: [], affected: 1 });

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            find: jest.fn().mockResolvedValue(findResponse),
            findOne: jest.fn().mockResolvedValue(user),
            create: jest.fn().mockResolvedValue(user),
            save: jest.fn().mockResolvedValue(user),
            update: jest.fn().mockResolvedValue(updateResponse),
            delete: jest.fn().mockResolvedValue(deleteResponse),
          },
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(usersService).toBeDefined();
    expect(usersRepository).toBeDefined();
  });

  describe('find', () => {
    it('should return a user entity list successfully', async () => {
      const result = await usersService.find({});

      expect(result).toEqual(findResponse);
      expect(typeof result).toEqual('object');
      expect(usersRepository.find).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersRepository, 'find').mockRejectedValueOnce(new Error());
      expect(usersService.find({})).rejects.toThrowError();
    });
  });

  describe('findOne', () => {
    const login = '';

    it('should return a user entity successfully', async () => {
      const result = await usersService.findOne(login);

      expect(result).toEqual(user);
      expect(typeof result).toEqual('object');
      expect(usersRepository.findOne).toHaveBeenCalledTimes(1);
      expect(usersRepository.findOne).toHaveBeenCalledWith({
        where: { login },
      });
    });

    it('should throw an exception', () => {
      jest.spyOn(usersService, 'findOne').mockRejectedValueOnce(new Error());
      expect(usersService.findOne(login)).rejects.toThrowError();
    });
  });

  describe('create', () => {
    const body: CreateUserDto = {
      login: 'userTest',
      id: 1,
      node_id: 'sadfjnsadoifnsd',
      avatar_url: 'https://http://localhost:3000/avatar_url',
      gravatar_id: '',
      url: 'https://http://localhost:3000/',
      html_url: 'https://http://localhost:3000/userTest',
      followers_url: 'https://http://localhost:3000//followers',
      following_url: 'https://http://localhost:3000//following{/other_user}',
      gists_url: 'https://http://localhost:3000//gists{/gist_id}',
      starred_url: 'https://http://localhost:3000//starred{/owner}{/repo}',
      subscriptions_url: 'https://http://localhost:3000//subscriptions',
      organizations_url: 'https://http://localhost:3000//orgs',
      repos_url: 'https://http://localhost:3000//repos',
      events_url: 'https://http://localhost:3000//events{/privacy}',
      received_events_url: 'https://http://localhost:3000//received_events',
      type: UserType.User,
      site_admin: false,
      name: 'test 1',
      company: null,
      blog: '',
      location: 'Barcelona',
      email: null,
      hireable: true,
      bio: '',
      twitter_username: null,
      public_repos: 17,
      public_gists: 0,
      followers: 8,
      following: 12,
      created_at: new Date('2019-04-13T18:47:06Z'),
      updated_at: new Date('2024-05-13T21:24:06Z'),
    };

    it('should create a new user entity successfuly', async () => {
      const result = await usersService.create(body);

      expect(result).toEqual(createdResponse);
      expect(usersRepository.create).toHaveBeenCalledTimes(1);
      expect(usersRepository.save).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersRepository, 'save').mockRejectedValueOnce(new Error());
      expect(usersService.create(body)).rejects.toThrowError();
    });
  });

  describe('update', () => {
    const id = 1;

    const body: UpdateUserDto = {
      name: 'test-1',
    };

    it('should update a user entity successfuly', async () => {
      const result = await usersService.update(id, body);

      expect(result).toBeUndefined();
      expect(usersRepository.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersRepository, 'update').mockRejectedValueOnce(new Error());
      expect(usersService.update(id, body)).rejects.toThrowError();
    });
  });

  describe('remove', () => {
    const id = 1;

    it('should remove a user entity successfuly', async () => {
      const result = await usersService.remove(id);

      expect(result).toBeUndefined();
      expect(usersRepository.delete).toHaveBeenCalledTimes(1);
      expect(usersRepository.delete).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersRepository, 'delete').mockRejectedValueOnce(new Error());
      expect(usersService.remove(id)).rejects.toThrowError();
    });
  });
});
