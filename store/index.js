import Vuex from "vuex";


const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            SET_POSTS:(state, payload) => state.loadedPosts = payload
        },
        actions:{
            setPosts(vuexContext, posts){
                vuexContext.commit("SET_POSTS", posts)
            }
        },
        getters:{
            loadedPosts:(state) => state.loadedPosts
        }
    })
}

export default createStore;