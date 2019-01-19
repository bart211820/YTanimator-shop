export class User {

  private userID;
  private fullname;
  private postcode;
  private streetnumber;
  private emailAdress;
  private password;
  private roles;

  constructor(private data?) {
    this.userID = data.userID;
    this.fullname = data.fullname;
    this.postcode = data.postcode;
    this.streetnumber = data.streetnumber;
    this.emailAdress = data.emailAdress;
    this.password = data.password;
    this.roles = data.roles;
  }

  public getData() {
    const data = {
      userID: this.userID,
      fullname: this.fullname,
      postcode: this.postcode,
      streetnumber: this.streetnumber,
      emailAdress: this.emailAdress,
      password: this.password,
      roles: this.roles
    };
    return data;
  }

  public getUserID() {
    return this.userID;
  }

  public getFullname() {
    return this.fullname;
  }

  public getPostcode() {
    return this.postcode;
  }

  public getStreetnumber() {
    return this.streetnumber;
  }

  public getEmailAdress() {
    return this.emailAdress;
  }

  public getPassword() {
    return this.password;
  }

  public getRoles() {
    return this.roles;
  }
}
