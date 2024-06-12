import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
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

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            find: jest.fn().mockResolvedValue(findResponse),
            findOne: jest.fn().mockResolvedValue(user),
            create: jest.fn().mockResolvedValue(createdResponse),
            update: jest.fn().mockResolvedValue(updateResponse),
            remove: jest.fn().mockResolvedValue(deleteResponse),
          },
        },
      ],
    }).compile();

    usersController = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
  });

  describe('find', () => {
    it('should return a user list entity successfully', async () => {
      const result = await usersController.find();

      expect(result).toEqual(findResponse);
      expect(typeof result).toEqual('object');
      expect(usersService.find).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersService, 'find').mockRejectedValueOnce(new Error());
      expect(usersController.find()).rejects.toThrowError();
    });
  });

  describe('findOne', () => {
    it('should return a user entity successfully', async () => {
      const id = 1;
      const result = await usersController.findOne(id);

      expect(result).toEqual(user);
      expect(typeof result).toEqual('object');
      expect(usersService.findOne).toHaveBeenCalledTimes(1);
      expect(usersService.findOne).toHaveBeenCalledWith(id);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersService, 'findOne').mockRejectedValueOnce(new Error());
      expect(usersController.findOne(1)).rejects.toThrowError();
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
      const result = await usersController.create(body);

      expect(result).toEqual(createdResponse);
      expect(usersService.create).toHaveBeenCalledTimes(1);
      expect(usersService.create).toHaveBeenCalledWith(body);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersService, 'create').mockRejectedValueOnce(new Error());
      expect(usersController.create(body)).rejects.toThrowError();
    });
  });

  describe('update', () => {
    const id = 1;

    const body: UpdateUserDto = {
      name: 'test-1',
    };

    it('should update a user entity successfuly', async () => {
      const result = await usersController.update(id, body);

      expect(result).toBeUndefined();
      expect(usersService.update).toHaveBeenCalledTimes(1);
      expect(usersService.update).toHaveBeenCalledWith(id, body);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersService, 'update').mockRejectedValueOnce(new Error());
      expect(usersController.update(id, body)).rejects.toThrowError();
    });
  });

  describe('remove', () => {
    const id = 1;

    it('should remove a user entity successfuly', async () => {
      const result = await usersController.remove(id);

      expect(result).toBeUndefined();
      expect(usersService.remove).toHaveBeenCalledTimes(1);
      expect(usersService.remove).toHaveBeenCalledWith(id);
    });

    it('should throw an exception', () => {
      jest.spyOn(usersService, 'remove').mockRejectedValueOnce(new Error());
      expect(usersController.remove(id)).rejects.toThrowError();
    });
  });
});
