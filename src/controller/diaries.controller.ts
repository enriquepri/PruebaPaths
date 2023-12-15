// este archivo es de pruebas no del video original
import { RequestHandler } from 'express'

import * as diaryServices from '../services/diaryServices'

/**
 * Devolver todos los diarios
 * @route GET /api/diaries
 * @group diaries - Operaciones con el diaries
 * @returns {object} 200 - Array con todos los diaries
 */
export const returnDiaries: RequestHandler = (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
}
