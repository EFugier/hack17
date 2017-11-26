import { User } from "../model/user";
import { DriverLicense } from "../model/driver-license";
import { Insurance } from "../model/insurance";

export const USERS: User[] = [
  {
    name: "Bob Dupont",
    picture: '',
    distance: 121456,
    wallet: null,
    drives: null,
    license: null,
    insurance: null
  },

  {
    name: "Alice Durant",
    picture: '',
    distance: 646982,
    wallet: null,
    drives: null,
    
    license: {
      id: "A1FRA13AA000026181231BOB<<9",
      deliveryDate: "01/01/2000",
      qrPath: "../img/qr-code-1.jpg"},
    
    insurance: {
      id: "0806600",
      fromDate: "25/12/2017",
      toDate: "25/12/2042",
      qrPath: "../img/qr-code-2.png"}
  },

  {
    name: "Charlie Roy",
    picture: '',
    distance: 9675243,
    wallet: null,
    drives: null,
    license: null,
    insurance: null
  }
]
