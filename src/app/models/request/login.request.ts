
export class LoginRequest {
  nickname: String;
  password: String;

  constructor(nickname: String, password: String) {
    this.nickname = nickname;
    this.password = password;
  }
}
