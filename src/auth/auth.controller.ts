import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: User): Promise<{ message: string }> {
    try {
      await this.authService.register(user);
      return { message: 'Registration successful' };
    } catch (error) {
      return { message: error.message || 'Registration failed' };
    }
  }

  @Post('login')
  async login(@Body() body: any, @Res() res: Response): Promise<any> {
    const { email, password } = body;

    console.log('Login request received with credentials:', email, password);

    try {
      // Call the login method of the AuthService
      const result = await this.authService.login({ email, password }, res);

      console.log('Login successful. Response:', result);

      if (result) {
        
        res.send({ message: 'Login successful', result });
      } else {
        
        res.status(401).json({ message: 'Unauthorized' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Invalid credentials' });
      console.error('Login failed. Error:', error);
    }
  }


  @Get('details')
  async findByToken(@Body() body: any) {
    const { token } = body;

    // Call the findByToken method of the AuthService
    const result = await this.authService.findByToken({ token });

    if (result) {
      return { message: 'User info', result };
    } else {
      return { message: 'Fail' };
    }
  }
}
