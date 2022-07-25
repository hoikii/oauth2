import { Injectable } from "@nestjs/common";

type User = {
  id: number;
  name: string;
}

type FtUser = {
  id: number;
  refresh_token: string;
  access_token: string;
}

@Injectable()
export class AuthService {
  id: number;
  users: User[];
  ftUsers: FtUser[];

  constructor() {
    this.id = 0;
    this.users = []
    this.ftUsers = []
  }
  
  findFtUser(id: number) {
    return this.ftUsers.find(user => user.id === id)
  }

  createFtUser(id: number, refresh_token: string, access_token: string) {
    this.ftUsers.push({
      id: id,
      refresh_token: refresh_token,
      access_token: access_token
    })
  }

  findUser(uid: number) {
    return this.users.find(user => user.id === uid)
  }

  createUser(username: string): number {
    this.users.push({
      id: this.id,
      name: username
    })
    this.id++
    return this.users[this.id - 1].id
  }

}

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { FtOauth } from './ftoauth.entity'
// import { User } from './user.entity';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(FtOauth)
//     private ftOauthRepository: Repository<FtOauth>,
//     private userRepository: Repository<User>,
//     private jwtService: JwtService
//   ) {}
  
//   async login(access_token: string, refresh_token: string, profile: any) {
//     const ident = await this.ftOauthRepository.findOneBy({ id: profile.id as number })

//     let uid: number
//     if (!ident) {
//       const user = new User()
//       user.nickname = profile.name
//       await this.userRepository.save(user)
//       await this.ftOauthRepository.save({ access_token, refresh_token, user: profile.id as number })
//       uid = user.uid
//     } else {
//       uid = ident.uid
//     }
//     const payload = { uid }

//     return this.jwtService.sign(payload)
//   }

//   addUser() {

//   }

//   issueToken(uid: number) {
//     const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//     const refreshToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//     const ftOauth = new FtOauth();
//     ftOauth.user = uid;
//     ftOauth.access_token = token;
//     ftOauth.refresh_token = refreshToken;
//   }
// }