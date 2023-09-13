import { VideoProps } from './types'
import { atom } from 'recoil';

export const moviesState = atom({
  key: 'moviesState',
  default: [] as VideoProps[],
});

export const SeriesState = atom({
  key: 'seriesState',
  default: [] as VideoProps[],
});