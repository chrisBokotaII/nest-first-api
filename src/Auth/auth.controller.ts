import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userdto } from 'src/users/dto/user.dto';
import { Request } from 'express';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup')
  signup(@Req() request: Request): userdto {
    const { id, first_name, last_name, email, gender } = request.body;
    const newUser = {
      id,
      first_name,
      last_name,
      email,
      gender,
    };
    const result = this.authService.signup(newUser);
    console.log(result);
    return result;
  }

  @Post('signin')
  signin(@Req() request: Request): userdto[] {
    return this.authService.signin(request.body.email);
  }
}
