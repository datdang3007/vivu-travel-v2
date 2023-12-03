export interface IUser {
  email: string;
  password: string;
  username: string;
  avatar?: string;
}

export interface IAuthEditUser {
  username: string;
  avatar: string;
  country: string;
  description: string;
  id: string | number;
  email: string;
}

export interface IAuthUser {
  id: number | string;
  email: string;
  username: string;
  like: number;
  role: number;
  country: string;
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
  country: string;
  username: string;
  password: string;
  confirm_password: string;
}
