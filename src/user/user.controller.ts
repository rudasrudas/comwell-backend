import { Controller, Get, Param, NotFoundException, Header, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.schema";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUserByEmail(@Req() request: any): Promise<User | null> {
    const email = request.headers.email;

    try {
      const user = await this.userService.findOne(email);

      if (!user) {
        throw new NotFoundException(`User with email '${email}' not found`);
      }

      return user;
    } catch (error) {
      console.error(`Error in getUserByEmail: ${error.message}`);
      throw new NotFoundException(`User with email '${email}' not found`);
    }
  }
}
