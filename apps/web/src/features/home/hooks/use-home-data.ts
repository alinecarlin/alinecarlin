'use client'

import { useQuery } from '@tanstack/react-query'

import { getHomeData } from '../api/get-home-data'
import { homeMock } from '../data/home.mock'
import type { HomeData } from '../types/home.types'

export const HOME_QUERY_KEY = ['home'] as const

export function useHomeData(initialData: HomeData = homeMock) {
  return useQuery({
    queryKey: HOME_QUERY_KEY,
    queryFn: getHomeData,
    initialData
  })
}
