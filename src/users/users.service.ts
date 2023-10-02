import { Injectable } from '@nestjs/common';
import { useData } from 'src/db/user.db';
import { userdto } from './dto/user.dto';

@Injectable()
export class UsersService {
  getAllUsers(): userdto[] {
    const data = useData;
    return data;
  }
  getOneUser(id: number): userdto[] {
    const data = useData;

    return data.filter((user) => user.id === id);
  }
  updateUser(id: number, updatedUser: userdto): userdto {
    const data = useData;
    const user = data.find((user) => user.id === id);
    Object.assign(user, updatedUser);
    return user;
  }
  deleteUser(id: number): boolean {
    const data = useData;
    const user = data.find((user) => user.id === id);
    if (user) {
      data.splice(data.indexOf(user), 1);
      return true;
    }
    return false;
  }
}
