import { getModelForClass, prop } from "@typegoose/typegoose";
class Login {

  //#region Variables
  @prop({ required: true, trim: true, unique: true, type: () => String })
  private username: string;

  @prop({ required: true, trim: true, type: () => String})
  private password: string;

  @prop({ required: true, type: () => String})
  private role: string;

  @prop({required: true, type: () => Boolean, default: true})
  private status: boolean;
  //#endRegion
  constructor(
    username: string,
    password: string,
    role: string,
    status: boolean
  ) {
    this.username = username;
    this.password = password;
    this.role = role;
    this.status = status;
  }

  //#region Getters
  get _username(): string {
    return this.username;
  }

  get _password(): string {
    return this.password;
  }

  get _role(): string {
    return this.role;
  }

  get _status(): boolean {
    return this.status;
  }
  //#endRegion
  //#region Setters
  set _password(password: string){
    this.password = password;
  }
  //#endRegion
  
}

const LoginModel = getModelForClass(Login);

export default LoginModel;