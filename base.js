/**
 * Created by Administrator on 2015-09-13.
 */

//前台调用
var $=function(_this){
    return new Base(_this);
};

//基础库
function Base(_this){
    this.elements=[];
    if(_this !=undefined){  //_this 是一个对象，undefined也是一个对象，区别于typeof返回的带单引号的'undefined'
        this.elements[0]=_this;
    }
}
//获取id节点
Base.prototype.getId=function(id){
    this.elements.push(document.getElementById(id));
    return this;
};
//获取name节点数组
Base.prototype.getName=function(name){
    var names=document.getElementsByName(name);
    for(var i=0;i<names.length;i++){
        this.elements.push(names[i]);

    }
    return this;
};
//获取元素节点数组
Base.prototype.getTagName=function(tag){
    var tags=document.getElementsByTagName(tag);
    for(var i=0;i<tags.length;i++){
        this.elements.push(tags[i]);
    }
    return this;
};
//点击事件
Base.prototype.click=function(fn){
    for(var i=0;i<this.elements.length;i++){
        this.elements[i].onclick=fn;
    }
    return this;
};
//css方法
Base.prototype.css=function(attr,value){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length==1){
            if(typeof window.getComputedStyle!='undefined'){
                return window.getComputedStyle(this.elements[i],null)[attr];
            }else if(typeof this.elements[i].currentStyle!="undefined"){
                return this.elements[i].currentStyle[attr];
            }
        }else{
            this.elements[i].style[attr]=value;
        }
    }
    return this;
};
//html方法
Base.prototype.html=function(str){
    for(var i=0;i<this.elements.length;i++){
        if(arguments.length==0){
            return this.elements[i].innerHTML;
        }else{
            this.elements[i].innerHTML=str;
        }
    }
    return this;
};
//获取className
Base.prototype.getClass=function(className,idName){
    var node=null;
    if(arguments.length==2){
        node=document.getElementById(idName);
    }else{
        node=document;
    }
    var all=document.getElementsByTagName("*");
    for(var i=0;i<all.length;i++){
        if(all[i].className==className){
            this.elements.push(all[i]);
        }
    }
    return this
};
//获取元素
Base.prototype.getElement=function(num){
    var element=this.elements[num];
    this.elements=[];
    this.elements[0]=element;
    return this;
};
//添加class
Base.prototype.addClass=function(className){
    for(var i=0;i<this.elements.length;i++){
        if(!this.elements[i].className.match(new RegExp('(\\S|^)'+className+'(\\s|$)'))){
            this.elements[i].className +=""+className;
        }
    }
    return this;
};
//移除class
Base.prototype.removeClass=function(className){
    for(var i=0;i<this.elements.length;i++){
        if(this.elements[i].className.match(new RegExp('(\\S|^)'+className+'(\\s|$)'))){
            this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
        }
    }
    return this;
};
//设置link或style中的CSS规则
Base.prototype.addRule=function(num,selectorText,cssText,position){
    var sheet=document.styleSheets[num];
    if(typeof  sheet.insertRule!='undefined'){
        sheet.insertRule(selectorText+"{"+cssText+"}",position);
    }else if(typeof sheet.addRule!='undefined'){
        sheet.addRule(selectorText,cssText,position);
    }
    return this;
};
//移除link或style中的CSS规则
Base.prototype.removeClass=function(num,index){
    var sheet=document.styleSheets[num];
    if(typeof sheet.deleteRule!="undefined"){
        sheet.deleteRule(index);
    }else if(typeof  sheet.removeRule!="undefined"){
        sheet.removeRule(index);
    }
    return this;
};