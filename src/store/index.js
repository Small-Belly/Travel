import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'


//使用插件
Vue.use(Vuex)


//通过Vuex创建仓库
export default new Vuex.Store({
    //state: state,
    state,
    mutations
    /* actions: {
        changeCity(ctx, city) {
            //ctx 上下文,city 在List点击的那个城市名
            // console.log(ctx);
            // console.log(city);
            ctx.commit('changeCity', city)
        }
    }, */

})