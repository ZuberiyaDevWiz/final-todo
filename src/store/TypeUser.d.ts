export interface User {
  _id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lists: any[];
  createdAt: string;
  updatedAt: string;
}

export interface TypeUser {
  user: User;
  error: Error;
}
