//При масштабировании, разнести типы и интерфейсы

export type TUser = {
  id: number;
  email: string;
  password: string;
};

export type TFruit = {
  id: number;
  name: string;
  color: string;
  sellBy: string;
};

export type TAuthPayload = Omit<TUser, "id">;

declare global {
  namespace Express {
    interface Request {
      user?: TUser;
    }
  }
}
