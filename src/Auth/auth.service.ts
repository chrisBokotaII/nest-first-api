import { Injectable } from '@nestjs/common';
import { useData } from 'src/db/user.db';
import { userdto } from 'src/users/dto/user.dto';

@Injectable()
export class AuthService {
  signup(createdUser: userdto): userdto {
    const data = useData;
    data.push(createdUser);
    return createdUser;
  }
  signin(email: string): userdto[] {
    const data = useData;
    const result = data.filter((user) => user.email === email);

    return result;
  }
}
