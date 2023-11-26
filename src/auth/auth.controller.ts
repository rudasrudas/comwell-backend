// auth/auth.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: User): Promise<{ message: string }> {
    try {
      const registeredUser = await this.authService.register(user);
      return { message: 'Registration successful'};
    } catch (error) {
      return { message: error.message || 'Registration failed' };
    }
  }

  @Post('login')
  async login(@Body() body: any) {
    const { email, password} = body;
    
    // Call the login method of the AuthService
    const result = await this.authService.login({email, password});
    
    if (result) {
      return { message: 'Login successful', result };
    } else {
      return { message: 'Login failed' };
    }
  }

  @Get("details")
  async findByToken(@Body() body: any) {
    const { token} = body;
    
    // Call the login method of the AuthService
    const result = await this.authService.findByToken({token});
    
    if (result) {
      return { message: 'User info', result };
    } else {
      return { message: 'Fail' };
    }
  }
}
