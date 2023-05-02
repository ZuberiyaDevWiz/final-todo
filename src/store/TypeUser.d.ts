export interface TypeUser {
  data: Data;
  error: Error;
}

export interface Data {
  user: User;
  token: string;
}

export interface User {
  _id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lists: any[];
  createdAt: string;
  updatedAt: string;
}
