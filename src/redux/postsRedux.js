export const getAllPosts = ({ posts }) => posts;
export const getCountPosts = ({ posts }) => posts.length;

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
