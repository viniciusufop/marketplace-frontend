import {Role} from '../dto/role';

export class JwtResponse {
  token: string;
  type: string;
  username: string;
  authorities: Role[];
}
