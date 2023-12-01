export interface IUser {
  email: string;
  password: string;
  username: string;
  avatar?: string;
}

export interface IAuthUser {
  id: number;
  email: string;
  username: string;
  like: number;
  role: number;
  description?: string;
  avatar?: string;
  iat: number;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IAuthSignUp {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}
