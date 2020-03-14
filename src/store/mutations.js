export default {
    changeCity(state, city) {
        state.city = city;
        //不但改了state的数据,还把数据存到缓存里
        try {
            localStorage.city = city
        } catch (e) { }
    }
}