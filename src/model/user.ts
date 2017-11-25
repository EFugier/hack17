import Drive from ./drive.ts
import Wallet from ./wallet.ts

export interface user{
	name : string;
	picutre : string;
	distance : integer;	
	wallet : Wallet;
	drives : Drive[];
}