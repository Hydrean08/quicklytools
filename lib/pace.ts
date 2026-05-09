export interface PaceResult {
  pacePerMile: string; // mm:ss
  pacePerKm: string; // mm:ss
  totalSeconds: number;
}

export interface FinishTimeResult {
  finishTime: string; // hh:mm:ss or mm:ss
  totalSeconds: number;
}

export interface RacePrediction {
  distance: string;
  distanceValue: number;
  unit: string;
  predictedTime: string;
  predictedSeconds: number;
}

export const RACE_DISTANCES: { label: string; km: number }[] = [
  { label: "1 Mile", km: 1.60934 },
  { label: "5K", km: 5 },
  { label: "10K", km: 10 },
  { label: "15K", km: 15 },
  { label: "Half Marathon", km: 21.0975 },
  { label: "Marathon", km: 42.195 },
  { label: "50K", km: 50 },
];

export function secondsToHMS(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  if (h > 0) return `${h}:${mm}:${ss}`;
  return `${m}:${ss}`;
}

export function secondsToPace(secondsPerUnit: number): string {
  const m = Math.floor(secondsPerUnit / 60);
  const s = Math.round(secondsPerUnit % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function parseTimeToSeconds(hours: number, minutes: number, seconds: number): number {
  return hours * 3600 + minutes * 60 + seconds;
}

export function parsePaceToSeconds(minutesStr: string, secondsStr: string): number {
  return parseInt(minutesStr || "0") * 60 + parseInt(secondsStr || "0");
}

// km to miles: 1 km = 0.621371 miles
const KM_TO_MILES = 0.621371;

export function calcPace(distanceKm: number, totalSeconds: number): PaceResult {
  if (distanceKm <= 0 || totalSeconds <= 0) {
    return { pacePerMile: "0:00", pacePerKm: "0:00", totalSeconds };
  }
  const secondsPerKm = totalSeconds / distanceKm;
  const secondsPerMile = totalSeconds / (distanceKm * KM_TO_MILES);
  return {
    pacePerMile: secondsToPace(secondsPerMile),
    pacePerKm: secondsToPace(secondsPerKm),
    totalSeconds,
  };
}

export function calcFinishTime(distanceKm: number, paceSecondsPerKm: number): FinishTimeResult {
  const totalSeconds = distanceKm * paceSecondsPerKm;
  return {
    finishTime: secondsToHMS(totalSeconds),
    totalSeconds,
  };
}

// Riegel formula: T2 = T1 * (D2/D1)^1.06
export function predictRaceTimes(
  knownDistanceKm: number,
  knownTimeSeconds: number
): RacePrediction[] {
  return RACE_DISTANCES.map(({ label, km }) => {
    const predictedSeconds =
      knownTimeSeconds * Math.pow(km / knownDistanceKm, 1.06);
    return {
      distance: label,
      distanceValue: km,
      unit: "km",
      predictedTime: secondsToHMS(predictedSeconds),
      predictedSeconds,
    };
  });
}
