import * as i from 'types';

export interface FactData {
  fact: string;
  length: number;
}

export type DataState = {
  data?: FactData;
  error: boolean;
  loading: boolean;
};

export type GetData = i.BaseThunkAction<() => void>;
