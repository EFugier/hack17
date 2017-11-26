import { Drive } from './drive';
import { Wallet } from './wallet';
import { DriverLicense } from './driver-license';
import { Insurance } from './insurance';

export interface User {
  name: string;
  picture: string;
  distance: number;
  wallet: Wallet;
  drives: Drive[];
  license: DriverLicense;
  insurance: Insurance;
}
