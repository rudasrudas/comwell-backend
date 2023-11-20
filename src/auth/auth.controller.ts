// auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    // Implement registration logic using the authService
    // Example: const user = await this.authService.register(body);
    // Return appropriate response
    return { message: 'Registration successful' };
  }

  @Post('login')
  async login(@Body() body: any) {
    // Implement login logic using the authService
    // Example: const token = await this.authService.login(body);
    // Return appropriate response
    return { message: 'Login successful' };
  }
}
