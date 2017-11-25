import { Incident } from "./incident";

export interface Drive {
  distance: number;
  start_date: string;
  end_date: string;
  start_location: string;
  end_location: string;
  incidents: Incident[];
}
