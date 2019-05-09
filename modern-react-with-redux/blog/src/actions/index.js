import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

// Action creator
export const fetchPosts = () =>  async dispatch => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

// using memoize
// export const fetchUser = (id) => dispatch => {
//   _fetchUser(id, dispatch);
// }
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data })
// });

// default version
// export const fetchUser = function(id) {
//   return async function (dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: 'FETCH_USER', payload: response.data })
//   }
// }

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data })
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userId = _.uniq(_.map(getState().posts, 'userId'));

  userId.forEach(id => dispatch(fetchUser(id)));

};




