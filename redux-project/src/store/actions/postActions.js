export const fetchPostsRequest = () => ({
    type: "FETCH_POSTS_REQUEST",
});

export const fetchPostsSuccess = (posts) => ({
    type: "FETCH_POSTS_SUCCESS",
    payload: posts,
});

export const fetchPostsFailure = (error) => ({
    type: "FETCH_POSTS_FAILURE",
    payload: error,
});

export const fetchPosts = () => async (dispatch) => {
    // Dispatch the fetch posts - Manage loading
    dispatch(fetchPostsRequest());
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // Dispatch fetch success
        dispatch(fetchPostsSuccess(data));
    } catch (error) {
        // Dipatch fetch failure
        dispatch(fetchPostsFailure(error.message));
    }
};