import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'
import { returnDiaries } from '@controller/diaries.controller'

const router = express.Router()

// Este es el original del video, el que esta puesto es una prueba para swagger
/* router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
}) */

router.get('/', returnDiaries)

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)
  return (diary !== null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e) {
    // A partir de typescript 4.4 el useUnknownInCatchVariables esta por default a true
    if (e instanceof Error) {
      res.status(404).send(e.message)
    }
  }
})

export default router
