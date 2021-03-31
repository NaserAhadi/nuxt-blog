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
                                const postsArray = []
                                for(const key in res.data){
                                    postsArray.push({...res.data[key]})
                                }
                                vuexContext.commit("SET_POSTS", postsArray)
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