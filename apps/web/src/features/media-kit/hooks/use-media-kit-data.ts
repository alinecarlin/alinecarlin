'use client'

import { useQuery } from '@tanstack/react-query'

import { getMediaKitData } from '../api/get-media-kit-data'
import { mediaKitMock } from '../data/media-kit.mock'
import type { MediaKitData } from '../types/media-kit.types'

export const MEDIA_KIT_QUERY_KEY = ['media-kit'] as const

export function useMediaKitData(initialData: MediaKitData = mediaKitMock) {
  return useQuery({
    queryKey: MEDIA_KIT_QUERY_KEY,
    queryFn: getMediaKitData,
    initialData
  })
}
