import diaryData from './diaries.json'
import { DiaryEntry, NoSensitiveDiaryEntry, NewDiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NoSensitiveDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo = (): NoSensitiveDiaryEntry[] => {
  /* return diaries.map(diary => {
    return { id: diary.id, date: diary.date, weather: diary.weather, visibility: diary.visibility }
  }) */
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary: DiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
