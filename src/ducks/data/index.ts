/**
 * This is an example file from react-prime
 */
import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { DataState } from './types';

export const dataActions = {
  load: () => action('data/GET'),
  success: (data: string) => action('data/GET_SUCCESS', data),
  failed: () => action('data/GET_FAILED'),
} as const; // <-- Important if you don't want to explicitly type the return type of all actions

export const GET_DATA = 'GET_DATA';

const initialState: DataState = {
  data: undefined,
  error: false,
  loading: false,
};

export const getFacts: any = () => {
  return (dispatch: any) => {
    try {
      fetch('https://catfact.ninja/fact')
        .then((response) => response.json())
        .then((data) => {
          dispatch(dataActions.success(data))
        });
    } catch (err) {
      console.log(err);
    };

  };
};

export default (state = initialState, action: ActionType<typeof dataActions>): i.DataState => {
  switch (action.type) {
    case 'data/GET':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'data/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case 'data/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

// export const getData: i.GetData['thunk'] = () => (dispatch) => {
//   dispatch(dataActions.load());

//   setTimeout(() => {
//     dispatch(dataActions.success(true));
//   }, 2000);
// };
