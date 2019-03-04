/**
 * Created by Administrator on 2015-09-20.
 */
//设置物体水平垂直居中
Base.prototype.center=function(width,height){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.top=(document.documentElement.clientHeight-height)/2-20+'px';
        this.elements[i].style.left=(document.documentElement.clientHeight-height)/2+'px';
    }
    return this;
};
//触发浏览器变动事件
Base.prototype.resize=function(fn){
    window.onresize=fn;
    return this;
};
//锁屏功能
Base.prototype.lock=function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.width=getInner().width+"px";
        this.elements[i].style.height=getInner().height+"px";
        this.elements[i].style.display="block";
    }
};
//解锁功能
Base.prototype.unlock=function(){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style.display="none";
    }
};
