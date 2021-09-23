import initialState from './initialState';

/* selectors */
export const getSize = ({ size }) => size;
/* action name creator */
const reducerName = 'size';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_DEVICE = createActionName('CHANGE_DEVICE');

/* action creators */
export const changeDevice = payload => ({ payload, type: CHANGE_DEVICE });

/*initialState.size*/
if (window.innerWidth < 768) initialState.size = 'mobile';
if (window.innerWidth >= 768) initialState.size = 'mobile';
if (window.innerWidth >= 992) initialState.size = 'tablet';
if (window.innerWidth >= 1200) initialState.size = 'desktop';

/* reducer */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_DEVICE: {
      return action.payload;
    }
    default:
      return statePart;
  }
}
