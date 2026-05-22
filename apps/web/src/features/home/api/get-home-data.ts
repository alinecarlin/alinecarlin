import { homeMock } from '../data/home.mock'
import type { HomeData } from '../types/home.types'

export async function getHomeData(): Promise<HomeData> {
  // Futuramente substituir por fetch real da API.
  return homeMock
}
