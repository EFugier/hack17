import { Drive } from "../model/drive";

export const DRIVES: Drive[] = [
  {
    distance : 145,
    start_date : "Aujourd'hui, 12:45 - 15h32",
    end_date : "25/11/2017",
    start_location : "Paris",
    end_location : "Dreiburg",
    incidents : [{
      cause : "Going too fast before a sidewalk",
      advice : "Slow down",
      has_happened : false,
      car_reaction_time : 12,
      driver_reaction_time : 90,
    },
    {
      cause : "Obstacle",
      advice : "Stay alert !",
      has_happened : false,
      car_reaction_time : 8,
      driver_reaction_time : 78
    }]
  },
  {
    distance : 8,
    start_date : "24/11/2017, 14:08 - 14:20",
    end_date : "12/09/2017",
    start_location : "Plaisir",
    end_location : "Versailles",
    incidents : []
  }
]