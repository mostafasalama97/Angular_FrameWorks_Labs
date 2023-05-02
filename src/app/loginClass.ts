export class LoginUser {
  constructor(
    public email:string = '',
    public password: string = '',
    public date: Date = new Date()
  ){}
}
