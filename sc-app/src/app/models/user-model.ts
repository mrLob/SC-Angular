export class UserModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public contacts: string,
    public role: string,
    public password: string,
    public token?: string
  ) {
  }
}
