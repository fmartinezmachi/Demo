import { Injectable } from '@angular/core';
import { JwtService } from './jwt.service';
import { User } from '@coreModels/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private jwtService: JwtService) {}

  purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
  }

  setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.token);
  }

  // todo -> change when services are done!
  get isAuthenticated(): boolean {
    const token = this.jwtService.getToken();
    if (!token) {
      return false;
    }
    return true;
  }
}
