export interface User {
    _id?: string;
    name: string;
    password: string;
    email?: string;
    last_login?: Date;
    active: boolean;
  }
  