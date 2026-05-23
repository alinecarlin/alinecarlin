import { mediaKitMock } from '../data/media-kit.mock'
import type { MediaKitData } from '../types/media-kit.types'

export async function getMediaKitData(): Promise<MediaKitData> {
  // Futuramente substituir por fetch real da API.
  return mediaKitMock
}
