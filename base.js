/**
 * Created by Administrator on 2015-09-13.
 */
function Base(){
    this.elements=[];
    //获取id节点
    this.getId=function(id){
        this.elements.push(document.getElementById(id));
        return this;
    };
    //获取name节点数组
    this.getName=function(name){
        var names=document.getElementsByName(name);
        for(var i=0;i<names.length;i++){
            this.elements.push(targs[i]);
            return this;
        }
        return document.getElementsByName(name);
    };
    //获取元素节点数组
    this.getTagName=function(tag){
       var tags=document.getElementsByTagName(tag);
        for(var i=0;i<tags.length;i++){
            this.elements.push(tags);
        }
        return this;
    };
}
Base.prototype.click=function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick=fn;
    }
    return this;
};
Base.prototype.css=function(attr,value){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].style[attr]=value;
    }
    return this;
};
Base.prototype.html=function(str){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].innerHTML=str;
    }
    return this;
};
var $=function(){
    return new Base();
};
