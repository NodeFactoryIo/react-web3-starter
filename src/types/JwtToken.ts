export interface JwtToken {
  iat: number;
  exp: number;
  name: string;
  surname: string;
  email: string;
  role: string[];
}
