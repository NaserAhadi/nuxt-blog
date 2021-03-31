import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state:{
            loadedPosts:[]
        },
        mutations:{
            SET_POSTS:(state, payload) => {
                state.loadedPosts = payload
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return axios.get("http://localhost:3000/posts")
                            .then(res => {
                                vuexContext.commit("SET_POSTS", res.data)
                            })
                            .catch(e => context.error(e))
            },
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