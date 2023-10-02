import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Body,
  Delete,
} from '@nestjs/common';
import { userdto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private UserSerice: UsersService) {}
  @Get()
  getAllUsers(): userdto[] {
    return this.UserSerice.getAllUsers();
  }
  @Get(':id')
  getOneUser(@Param('id', ParseIntPipe) id: number): userdto[] {
    return this.UserSerice.getOneUser(id);
  }
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatedUser: userdto,
  ): userdto {
    return this.UserSerice.updateUser(id, updatedUser);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): boolean {
    return this.UserSerice.deleteUser(id);
  }
}
