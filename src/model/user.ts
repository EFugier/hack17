import { Drive } from './drive';
import { Wallet } from './wallet';

export interface User {
  name: string;
  picture: string;
  distance: number;
  wallet: Wallet;
  drives: Drive[];
}
