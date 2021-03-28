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
                console.log("payload", payload)
            }
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                return axios.get("https://nuxt-blog-426f8-default-rtdb.firebaseio.com/posts.json")
                            .then(res => {
                                const postsArray = []
                                for(const key in res.data){
                                    postsArray.push({...res.data[key], id:key})
                                }
                                console.log(123)
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