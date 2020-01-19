export function SET_POSTS (state, {posts}) {
    state.loadingPosts = false;
    console.log(" SET_POSTS loading posts : " + state.loadingPosts);
    state.posts = posts;
  }
  
  export function FETCHING_POSTS (state) {
    state.loadingPosts = true;
    console.log(" FETCHING_POSTS loading posts : " + state.loadingPosts);
  }
  