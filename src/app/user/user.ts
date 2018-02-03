export class User {

  private name: String;
  private username: String;
  private admin: boolean;
  private location: String;
  private password: String;

  constructor(name, username, admin, location, password) {
    this.name = name;
    this.username = username;
    this.admin = admin;
    this.location = location;
    this.password = password;
  }

}