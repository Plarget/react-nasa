type TAsteroidDiameter = {
  estimated_diameter_max: number,
  estimated_diameter_min: number,
}

export type TAsteroidApproachData = {
  close_approach_date: string,
  close_approach_date_full: string,
  miss_distance: {
    astronomical: string,
    kilometers: string,
    lunar: string,
    miles: string
  },
  orbiting_body: string,
  relative_velocity: {
    kilometers_per_hour: string,
    kilometers_per_second: string,
    miles_per_hour: string,
  }
}

export type TAsteroid = {
  id: string,
  name: string,
  estimated_diameter: {
    meters:  TAsteroidDiameter,
    kilometers:  TAsteroidDiameter,
    miles:  TAsteroidDiameter,
    feet:  TAsteroidDiameter,
  },
  is_potentially_hazardous_asteroid: boolean,
  close_approach_data: Array<TAsteroidApproachData>
}

export type TAsteroidDistance = "kilometers" | "lunar"