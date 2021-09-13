/* selectors */
export const getAll = ({ feeds }) => feeds;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
