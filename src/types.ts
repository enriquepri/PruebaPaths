// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'

import { Weather, Visibility } from './enums'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type NoSensitiveDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NoSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>
