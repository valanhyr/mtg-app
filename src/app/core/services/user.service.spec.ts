import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController,} from '@angular/common/http/testing';
import { UserService } from './user.service';
import { User } from '../models/user.model';
import { environment } from '../../../../src/environments/environment';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from the API', () => {
    const mockUsers: User[] = [
      {
        _id: '65e435f5720b4d4d99fe962f',
        name: 'ADMIN',
        password: '1234',
        active: true,
      },
      {
        _id: '65e6437b866f4626c84b19f4',
        name: 'User 1',
        password: '1234',
        active: true,
      },
    ];

    service.getAllUsers().subscribe((users) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockUsers);
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });

  it('should retrieve a user by ID from the API', () => {
    const mockUser: User = {
      _id: '1',
      name: 'User 1',
      password: '1234',
      active: true,
    };

    service.getUserById('1').subscribe((user) => {
      expect(user).toEqual(mockUser);
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/users/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockUser);
  });

  it('should create a new user via the API', () => {
    const newUser: User = { name: 'New User', password: '1234', active: true };
    const createdUser: User = { ...newUser, _id: '123456' }; // Simulate a response from the server with _id

    service.createUser(newUser).subscribe((user) => {
      expect(user.name).toBe('New User');
      expect(user._id).toBeDefined();
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/users`);
    expect(req.request.method).toBe('POST');
    req.flush(createdUser); // Flush the response with the created user object
  });

  it('should update an existing user via the API', () => {
    const updatedUser: User = {
      _id: '1',
      name: 'Updated User',
      password: '6666',
      active: true,
    };

    service.updateUser(updatedUser).subscribe((user) => {
      expect(user).toEqual(updatedUser);
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/users/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedUser);
  });

  it('should delete a user via the API', () => {
    service.deleteUser('1').subscribe(() => {
      // Do nothing for now
    });

    const req = httpMock.expectOne(`${environment.endpoint}api/users/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null); // Assuming the server responds with no content
  });
});
