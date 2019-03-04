/**
 * Created by Administrator on 2015-09-20.
 */
//跨浏览器获取视口大小
function getInner(){
    if(typeof window.innerWidth!='undefined'){
        return{
            width:window.innerHeight,
            height:window.innerHeight
        }
    }else{
        return {
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
}