import { Injectable, BadRequestException, Res } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../user/user.schema';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async register(userData: any): Promise<any> {
    const { email, password } = userData;

    // Check if the user with the provided email already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new this.userModel({
      ...userData,
      password: hashedPassword,
      registrationDate: new Date(),
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return relevant information
    return { userId: savedUser._id, email: savedUser.email };
  }

  async login(credentials: any, @Res() res: Response): Promise<any> {
    const { email, password } = credentials;
  
    console.log('Received credentials:', email, password);
  
    // Find the user by email
    const user = await this.userModel.findOne({ email });
  
    // Check if the user exists
    if (!user) {
      console.log('User not found');
      throw new BadRequestException('Invalid credentials');
    }
  
    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    console.log('Password match:', passwordMatch);
  
    // Check if the passwords match
    if (!passwordMatch) {
      console.log('Invalid credentials');
      throw new BadRequestException('Invalid credentials');
    }
  
    const token = this.generateToken(user);
  
    // Set the JWT token as an HTTP-only cookie in the response
    res.cookie('access_token', token, { httpOnly: true });
  
    // Return relevant information
    return { userId: user._id, email: user.email, name: user.name, phoneNumber: user.phoneNumber };
  }
  async findByEmail(credentials: any): Promise<any> {
    const { email, password } = credentials;

    // Find the user by email
    const user = await this.userModel.findOne({ email });

    // Check if the user exists
    if (!user) {
      throw new BadRequestException('Invalid credentials');
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // Check if the passwords match
    if (!passwordMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    const token = this.generateToken(user);
    return { user };
  }

  async findByToken(credentials: any): Promise<any> {
    const { token } = credentials;
    try {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

      const userId = decodedToken.sub;

      const user = await this.userModel.findById(userId);

      // Check if the user exists
      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }

      return { user };
    } catch (error) {
      // Handle token verification errors
      console.error('Error verifying token:', error);
      throw new BadRequestException('Invalid credentials');
    }
  }

  private generateToken(user: User): string {
    const payload = { sub: user._id, email: user.email };
    const secretKey = process.env.JWT_SECRET;
    const expiresIn = '1h';

    return jwt.sign(payload, secretKey, { expiresIn });
  }
}
