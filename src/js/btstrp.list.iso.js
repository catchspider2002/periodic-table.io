/* Native Javascript for Bootstrap 3 v2.0.22 - bootstrap-native.js*/
Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(searchElement){"use strict"
if(void 0===this||null===this)throw new TypeError
var n,k,t=Object(this),len=t.length>>>0
if(0===len)return-1
for(n=len-1,arguments.length>1&&(n=+arguments[1],n!=n?n=0:0!=n&&n!=1/0&&n!=-(1/0)&&(n=(n>0||-1)*Math.floor(Math.abs(n)))),k=n>=0?Math.min(n,len-1):len-Math.abs(n);k>=0;k--)if(k in t&&t[k]===searchElement)return k
return-1}),function(){function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:void 0}
var evt=document.createEvent("CustomEvent")
return evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail),evt}return"function"==typeof window.CustomEvent?!1:(CustomEvent.prototype=window.Event.prototype,void(window.CustomEvent=CustomEvent))}(),!function(t,n){if("function"==typeof define&&define.amd)define([],n)
else if("object"==typeof module&&module.exports)module.exports=n()
else{var e=n()
t.Modal=e.Modal}}(this,function(){"use strict"
var t="undefined"!=typeof global?global:this||window,n=document,e=n.documentElement,i="body",o=t.BSN={},a=o.supports=[],r="data-toggle",c="data-dismiss",u="Modal",d="data-backdrop",s="data-keyboard",l="data-target",f="backdrop",h="keyboard",p="content",v="target",m="clientWidth",g="clientHeight",b="offsetWidth",y="innerWidth",C="scrollHeight",w="aria-hidden",k="click",L="keydown",x="resize",E="show",T="shown",M="hide",S="hidden",A="getAttribute",N="setAttribute",W="hasAttribute",j="createElement",B="appendChild",H="innerHTML",q="preventDefault",z="getBoundingClientRect",D="querySelectorAll",I="getElementsByClassName",R="parentNode",O="length",F="toLowerCase",G="Transition",J="Webkit",K="style",P="push",Q="contains",U="in",V="left",X="right",Y=!("opacity"in e[K]),Z=0,$="navbar-fixed-top",_="navbar-fixed-bottom",tt=J+G in e[K]||G[F]()in e[K],nt=J+G in e[K]?J[F]()+G+"End":G[F]()+"end",et=function(t){t.focus?t.focus():t.setActive()},it=function(t,n){t.classList.add(n)},ot=function(t,n){t.classList.remove(n)},at=function(t,n){return t.classList[Q](n)},rt=function(t){for(var n=[],e=0,i=t[O];i>e;e++)n[P](t[e])
return n},ct=function(t,n){var e=Y?D:I
return rt(t[e](Y?"."+n.replace(/\s(?=[a-z])/g,"."):n))},ut=function(t,e){var i=e?e:n
return"object"==typeof t?t:i.querySelector(t)},dt=function(t,n,e){t.addEventListener(n,e,!1)},st=function(t,n,e){t.removeEventListener(n,e,!1)},lt=function(t,n,e){dt(t,n,function i(o){e(o),st(t,n,i)})},ft=function(t,n){tt?lt(t,nt,function(t){n(t)}):n()},ht=function(t,n,e){var i=new CustomEvent(t+".bs."+n)
i.relatedTarget=e,this.dispatchEvent(i)}
o.version="2.0.22"
var pt=function(o,a){o=ut(o)
var r=o[A](l)||o[A]("href"),D=ut(r),I=at(o,"modal")?o:D,F="modal",G="static",J="paddingLeft",P="paddingRight",Q="modal-backdrop"
if(at(o,"modal")&&(o=null),I){a=a||{},this[h]=a[h]===!1||"false"===I[A](s)?!1:!0,this[f]=a[f]===G||I[A](d)===G?G:!0,this[f]=a[f]===!1||"false"===I[A](d)?!1:this[f],this[p]=a[p]
var Y,nt,rt,lt,pt=this,vt=null,mt=ct(e,$).concat(ct(e,_)),gt=function(){var n=e[z]()
return t[y]||n[X]-Math.abs(n[V])},bt=function(){var e,o=n[i].currentStyle||t.getComputedStyle(n[i]),a=parseInt(o[P],10)
if(Y&&(n[i][K][P]=a+rt+"px",mt[O]))for(var r=0;r<mt[O];r++)e=(mt[r].currentStyle||t.getComputedStyle(mt[r]))[P],mt[r][K][P]=parseInt(e)+rt+"px"},yt=function(){if(n[i][K][P]="",mt[O])for(var t=0;t<mt[O];t++)mt[t][K][P]=""},Ct=function(){var t,e=n[j]("div")
return e.className=F+"-scrollbar-measure",n[i][B](e),t=e[b]-e[m],n[i].removeChild(e),t},wt=function(){Y=n[i][m]<gt(),nt=I[C]>e[g],rt=Ct()},kt=function(){I[K][J]=!Y&&nt?rt+"px":"",I[K][P]=Y&&!nt?rt+"px":""},Lt=function(){I[K][J]="",I[K][P]=""},xt=function(){Z=1
var t=n[j]("div")
lt=ut("."+Q),null===lt&&(t[N]("class",Q+" fade"),lt=t,n[i][B](lt))},Et=function(){lt=ut("."+Q),lt&&null!==lt&&"object"==typeof lt&&(Z=0,n[i].removeChild(lt),lt=null),ht.call(I,S,F)},Tt=function(){at(I,U)?dt(n,L,jt):st(n,L,jt)},Mt=function(){at(I,U)?dt(t,x,pt.update):st(t,x,pt.update)},St=function(){at(I,U)?dt(I,k,Bt):st(I,k,Bt)},At=function(){et(I),ht.call(I,T,F,vt)},Nt=function(){I[K].display="",o&&et(o),setTimeout(function(){ct(n,F+" "+U)[0]||(Lt(),yt(),ot(n[i],F+"-open"),lt&&at(lt,"fade")?(ot(lt,U),ft(lt,Et)):Et(),Mt(),St(),Tt())},50)},Wt=function(t){var n=t[v]
n=n[W](l)||n[W]("href")?n:n[R],n!==o||at(I,U)||(I.modalTrigger=o,vt=o,pt.show(),t[q]())},jt=function(t){var n=t.which||t.keyCode
pt[h]&&27==n&&at(I,U)&&pt.hide()},Bt=function(t){var n=t[v]
at(I,U)&&(n[R][A](c)===F||n[A](c)===F||n===I&&pt[f]!==G)&&(pt.hide(),vt=null,t[q]())}
this.toggle=function(){at(I,U)?this.hide():this.show()},this.show=function(){ht.call(I,E,F,vt)
var t=ct(n,F+" in")[0]
t&&t!==I&&t.modalTrigger[u].hide(),this[f]&&!Z&&xt(),lt&&Z&&!at(lt,U)&&(lt[b],it(lt,U)),setTimeout(function(){I[K].display="block",wt(),bt(),kt(),it(n[i],F+"-open"),it(I,U),I[N](w,!1),Mt(),St(),Tt(),at(I,"fade")?ft(I,At):At()},tt?150:0)},this.hide=function(){ht.call(I,M,F),lt=ut("."+Q),ot(I,U),I[N](w,!0),setTimeout(function(){at(I,"fade")?ft(I,Nt):Nt()},tt?150:0)},this.setContent=function(t){ut("."+F+"-content",I)[H]=t},this.update=function(){at(I,U)&&(wt(),bt(),kt())},!o||u in o||dt(o,k,Wt),pt[p]&&pt.setContent(pt[p]),!!o&&(o[u]=pt)}}
a[P]([u,pt,"["+r+'="modal"]'])
var vt=function(t,n){for(var e=0,i=n[O];i>e;e++)new t(n[e])},mt=o.initCallback=function(t){t=t||n
for(var e=0,i=a[O];i>e;e++)vt(a[e][1],t[D](a[e][2]))}
return n[i]?mt():dt(n,"DOMContentLoaded",function(){mt()}),{Modal:pt}})


/*List - list.min.js*/
var List=function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports
var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}}
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={}
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module["default"]}:function(){return module}
return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=11)}([function(module,exports,__webpack_require__){function ClassList(el){if(!el||!el.nodeType)throw Error("A DOM element reference is required")
this.el=el,this.list=el.classList}var index=__webpack_require__(4),re=/\s+/
Object.prototype.toString
module.exports=function(el){return new ClassList(el)},ClassList.prototype.add=function(name){if(this.list)return this.list.add(name),this
var arr=this.array(),i=index(arr,name)
return~i||arr.push(name),this.el.className=arr.join(" "),this},ClassList.prototype.remove=function(name){if(this.list)return this.list.remove(name),this
var arr=this.array(),i=index(arr,name)
return~i&&arr.splice(i,1),this.el.className=arr.join(" "),this},ClassList.prototype.toggle=function(name,force){return this.list?(void 0!==force?force!==this.list.toggle(name,force)&&this.list.toggle(name):this.list.toggle(name),this):(void 0!==force?force?this.add(name):this.remove(name):this.has(name)?this.remove(name):this.add(name),this)},ClassList.prototype.array=function(){var className=this.el.getAttribute("class")||"",str=className.replace(/^\s+|\s+$/g,""),arr=str.split(re)
return""===arr[0]&&arr.shift(),arr},ClassList.prototype.has=ClassList.prototype.contains=function(name){return this.list?this.list.contains(name):!!~index(this.array(),name)}},function(module,exports,__webpack_require__){var bind=window.addEventListener?"addEventListener":"attachEvent",unbind=window.removeEventListener?"removeEventListener":"detachEvent",prefix="addEventListener"!==bind?"on":"",toArray=__webpack_require__(5)
exports.bind=function(el,type,fn,capture){el=toArray(el)
for(var i=0;i<el.length;i++)el[i][bind](prefix+type,fn,capture||!1)},exports.unbind=function(el,type,fn,capture){el=toArray(el)
for(var i=0;i<el.length;i++)el[i][unbind](prefix+type,fn,capture||!1)}},function(module,exports){module.exports=function(list){return function(initValues,element,notCreate){var item=this
this._values={},this.found=!1,this.filtered=!1
var init=function(initValues,element,notCreate){if(void 0===element)notCreate?item.values(initValues,notCreate):item.values(initValues)
else{item.elm=element
var values=list.templater.get(item,initValues)
item.values(values)}}
this.values=function(newValues,notCreate){if(void 0===newValues)return item._values
for(var name in newValues)item._values[name]=newValues[name]
notCreate!==!0&&list.templater.set(item,item.values())},this.show=function(){list.templater.show(item)},this.hide=function(){list.templater.hide(item)},this.matching=function(){return list.filtered&&list.searched&&item.found&&item.filtered||list.filtered&&!list.searched&&item.filtered||!list.filtered&&list.searched&&item.found||!list.filtered&&!list.searched},this.visible=function(){return item.elm&&item.elm.parentNode==list.list?!0:!1},init(initValues,element,notCreate)}}},function(module,exports){var getElementsByClassName=function(container,className,single){return single?container.getElementsByClassName(className)[0]:container.getElementsByClassName(className)},querySelector=function(container,className,single){return className="."+className,single?container.querySelector(className):container.querySelectorAll(className)},polyfill=function(container,className,single){for(var classElements=[],tag="*",els=container.getElementsByTagName(tag),elsLen=els.length,pattern=RegExp("(^|\\s)"+className+"(\\s|$)"),i=0,j=0;elsLen>i;i++)if(pattern.test(els[i].className)){if(single)return els[i]
classElements[j]=els[i],j++}return classElements}
module.exports=function(){return function(container,className,single,options){return options=options||{},options.test&&options.getElementsByClassName||!options.test&&document.getElementsByClassName?getElementsByClassName(container,className,single):options.test&&options.querySelector||!options.test&&document.querySelector?querySelector(container,className,single):polyfill(container,className,single)}}()},function(module,exports){var indexOf=[].indexOf
module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj)
for(var i=0;i<arr.length;++i)if(arr[i]===obj)return i
return-1}},function(module,exports){function isArray(arr){return"[object Array]"===Object.prototype.toString.call(arr)}module.exports=function(collection){if(void 0===collection)return[]
if(null===collection)return[null]
if(collection===window)return[window]
if("string"==typeof collection)return[collection]
if(isArray(collection))return collection
if("number"!=typeof collection.length)return[collection]
if("function"==typeof collection&&collection instanceof Function)return[collection]
for(var arr=[],i=0;i<collection.length;i++)(Object.prototype.hasOwnProperty.call(collection,i)||i in collection)&&arr.push(collection[i])
return arr.length?arr:[]}},function(module,exports){module.exports=function(s){return s=void 0===s?"":s,s=null===s?"":s,s=""+s}},function(module,exports){module.exports=function(object){for(var source,args=Array.prototype.slice.call(arguments,1),i=0;source=args[i];i++)if(source)for(var property in source)object[property]=source[property]
return object}},function(module,exports){module.exports=function(list){var addAsync=function(values,callback,items){var valuesToAdd=values.splice(0,50)
items=items||[],items=items.concat(list.add(valuesToAdd)),values.length>0?setTimeout(function(){addAsync(values,callback,items)},1):(list.update(),callback(items))}
return addAsync}},function(module,exports){module.exports=function(list){return list.handlers.filterStart=list.handlers.filterStart||[],list.handlers.filterComplete=list.handlers.filterComplete||[],function(filterFunction){if(list.trigger("filterStart"),list.i=1,list.reset.filter(),void 0===filterFunction)list.filtered=!1
else{list.filtered=!0
for(var is=list.items,i=0,il=is.length;il>i;i++){var item=is[i]
filterFunction(item)?item.filtered=!0:item.filtered=!1}}return list.update(),list.trigger("filterComplete"),list.visibleItems}}},function(module,exports,__webpack_require__){var events=(__webpack_require__(0),__webpack_require__(1)),extend=__webpack_require__(7),toString=__webpack_require__(6),getByClass=__webpack_require__(3),fuzzy=__webpack_require__(19)
module.exports=function(list,options){options=options||{},options=extend({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},options)
var fuzzySearch={search:function(searchString,columns){for(var searchArguments=options.multiSearch?searchString.replace(/ +$/,"").split(/ +/):[searchString],k=0,kl=list.items.length;kl>k;k++)fuzzySearch.item(list.items[k],columns,searchArguments)},item:function(item,columns,searchArguments){for(var found=!0,i=0;i<searchArguments.length;i++){for(var foundArgument=!1,j=0,jl=columns.length;jl>j;j++)fuzzySearch.values(item.values(),columns[j],searchArguments[i])&&(foundArgument=!0)
foundArgument||(found=!1)}item.found=found},values:function(values,value,searchArgument){if(values.hasOwnProperty(value)){var text=toString(values[value]).toLowerCase()
if(fuzzy(text,searchArgument,options))return!0}return!1}}
return events.bind(getByClass(list.listContainer,options.searchClass),"keyup",function(e){var target=e.target||e.srcElement
list.search(target.value,fuzzySearch.search)}),function(str,columns){list.search(str,columns,fuzzySearch.search)}}},function(module,exports,__webpack_require__){var naturalSort=__webpack_require__(18),getByClass=__webpack_require__(3),extend=__webpack_require__(7),indexOf=__webpack_require__(4),events=__webpack_require__(1),toString=__webpack_require__(6),classes=__webpack_require__(0),getAttribute=__webpack_require__(17),toArray=__webpack_require__(5)
module.exports=function(id,options,values){var init,self=this,Item=__webpack_require__(2)(self),addAsync=__webpack_require__(8)(self),initPagination=__webpack_require__(12)(self)
init={start:function(){self.listClass="list",self.searchClass="search",self.sortClass="sort",self.page=1e4,self.i=1,self.items=[],self.visibleItems=[],self.matchingItems=[],self.searched=!1,self.filtered=!1,self.searchColumns=void 0,self.handlers={updated:[]},self.valueNames=[],self.utils={getByClass:getByClass,extend:extend,indexOf:indexOf,events:events,toString:toString,naturalSort:naturalSort,classes:classes,getAttribute:getAttribute,toArray:toArray},self.utils.extend(self,options),self.listContainer="string"==typeof id?document.getElementById(id):id,self.listContainer&&(self.list=getByClass(self.listContainer,self.listClass,!0),self.parse=__webpack_require__(13)(self),self.templater=__webpack_require__(16)(self),self.search=__webpack_require__(14)(self),self.filter=__webpack_require__(9)(self),self.sort=__webpack_require__(15)(self),self.fuzzySearch=__webpack_require__(10)(self,options.fuzzySearch),this.handlers(),this.items(),this.pagination(),self.update())},handlers:function(){for(var handler in self.handlers)self[handler]&&self.on(handler,self[handler])},items:function(){self.parse(self.list),void 0!==values&&self.add(values)},pagination:function(){if(void 0!==options.pagination){options.pagination===!0&&(options.pagination=[{}]),void 0===options.pagination[0]&&(options.pagination=[options.pagination])
for(var i=0,il=options.pagination.length;il>i;i++)initPagination(options.pagination[i])}}},this.reIndex=function(){self.items=[],self.visibleItems=[],self.matchingItems=[],self.searched=!1,self.filtered=!1,self.parse(self.list)},this.toJSON=function(){for(var json=[],i=0,il=self.items.length;il>i;i++)json.push(self.items[i].values())
return json},this.add=function(values,callback){if(0!==values.length){if(callback)return void addAsync(values,callback)
var added=[],notCreate=!1
void 0===values[0]&&(values=[values])
for(var i=0,il=values.length;il>i;i++){var item=null
notCreate=self.items.length>self.page?!0:!1,item=new Item(values[i],void 0,notCreate),self.items.push(item),added.push(item)}return self.update(),added}},this.show=function(i,page){return this.i=i,this.page=page,self.update(),self},this.remove=function(valueName,value,options){for(var found=0,i=0,il=self.items.length;il>i;i++)self.items[i].values()[valueName]==value&&(self.templater.remove(self.items[i],options),self.items.splice(i,1),il--,i--,found++)
return self.update(),found},this.get=function(valueName,value){for(var matchedItems=[],i=0,il=self.items.length;il>i;i++){var item=self.items[i]
item.values()[valueName]==value&&matchedItems.push(item)}return matchedItems},this.size=function(){return self.items.length},this.clear=function(){return self.templater.clear(),self.items=[],self},this.on=function(event,callback){return self.handlers[event].push(callback),self},this.off=function(event,callback){var e=self.handlers[event],index=indexOf(e,callback)
return index>-1&&e.splice(index,1),self},this.trigger=function(event){for(var i=self.handlers[event].length;i--;)self.handlers[event][i](self)
return self},this.reset={filter:function(){for(var is=self.items,il=is.length;il--;)is[il].filtered=!1
return self},search:function(){for(var is=self.items,il=is.length;il--;)is[il].found=!1
return self}},this.update=function(){var is=self.items,il=is.length
self.visibleItems=[],self.matchingItems=[],self.templater.clear()
for(var i=0;il>i;i++)is[i].matching()&&self.matchingItems.length+1>=self.i&&self.visibleItems.length<self.page?(is[i].show(),self.visibleItems.push(is[i]),self.matchingItems.push(is[i])):is[i].matching()?(self.matchingItems.push(is[i]),is[i].hide()):is[i].hide()
return self.trigger("updated"),self},init.start()}},function(module,exports,__webpack_require__){var classes=__webpack_require__(0),events=__webpack_require__(1),List=__webpack_require__(11)
module.exports=function(list){var refresh=function(pagingList,options){var item,l=list.matchingItems.length,index=list.i,page=list.page,pages=Math.ceil(l/page),currentPage=Math.ceil(index/page),innerWindow=options.innerWindow||2,left=options.left||options.outerWindow||0,right=options.right||options.outerWindow||0
right=pages-right,pagingList.clear()
for(var i=1;pages>=i;i++){var className=currentPage===i?"active":""
is.number(i,left,right,currentPage,innerWindow)?(item=pagingList.add({page:i,dotted:!1})[0],className&&classes(item.elm).add(className),addEvent(item.elm,i,page)):is.dotted(pagingList,i,left,right,currentPage,innerWindow,pagingList.size())&&(item=pagingList.add({page:"...",dotted:!0})[0],classes(item.elm).add("disabled"))}},is={number:function(i,left,right,currentPage,innerWindow){return this.left(i,left)||this.right(i,right)||this.innerWindow(i,currentPage,innerWindow)},left:function(i,left){return left>=i},right:function(i,right){return i>right},innerWindow:function(i,currentPage,innerWindow){return i>=currentPage-innerWindow&&currentPage+innerWindow>=i},dotted:function(pagingList,i,left,right,currentPage,innerWindow,currentPageItem){return this.dottedLeft(pagingList,i,left,right,currentPage,innerWindow)||this.dottedRight(pagingList,i,left,right,currentPage,innerWindow,currentPageItem)},dottedLeft:function(pagingList,i,left,right,currentPage,innerWindow){return i==left+1&&!this.innerWindow(i,currentPage,innerWindow)&&!this.right(i,right)},dottedRight:function(pagingList,i,left,right,currentPage,innerWindow,currentPageItem){return pagingList.items[currentPageItem-1].values().dotted?!1:i==right&&!this.innerWindow(i,currentPage,innerWindow)&&!this.right(i,right)}},addEvent=function(elm,i,page){events.bind(elm,"click",function(){list.show((i-1)*page+1,page)})}
return function(options){var pagingList=new List(list.listContainer.id,{listClass:options.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"})
list.on("updated",function(){refresh(pagingList,options)}),refresh(pagingList,options)}}},function(module,exports,__webpack_require__){module.exports=function(list){var Item=__webpack_require__(2)(list),getChildren=function(parent){for(var nodes=parent.childNodes,items=[],i=0,il=nodes.length;il>i;i++)void 0===nodes[i].data&&items.push(nodes[i])
return items},parse=function(itemElements,valueNames){for(var i=0,il=itemElements.length;il>i;i++)list.items.push(new Item(valueNames,itemElements[i]))},parseAsync=function(itemElements,valueNames){var itemsToIndex=itemElements.splice(0,50)
parse(itemsToIndex,valueNames),itemElements.length>0?setTimeout(function(){parseAsync(itemElements,valueNames)},1):(list.update(),list.trigger("parseComplete"))}
return list.handlers.parseComplete=list.handlers.parseComplete||[],function(){var itemsToIndex=getChildren(list.list),valueNames=list.valueNames
list.indexAsync?parseAsync(itemsToIndex,valueNames):parse(itemsToIndex,valueNames)}}},function(module,exports){module.exports=function(list){var text,columns,searchString,customSearch,prepare={resetList:function(){list.i=1,list.templater.clear(),customSearch=void 0},setOptions:function(args){2==args.length&&args[1]instanceof Array?columns=args[1]:2==args.length&&"function"==typeof args[1]?(columns=void 0,customSearch=args[1]):3==args.length?(columns=args[1],customSearch=args[2]):columns=void 0},setColumns:function(){0!==list.items.length&&void 0===columns&&(columns=void 0===list.searchColumns?prepare.toArray(list.items[0].values()):list.searchColumns)},setSearchString:function(s){s=list.utils.toString(s).toLowerCase(),s=s.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),searchString=s},toArray:function(values){var tmpColumn=[]
for(var name in values)tmpColumn.push(name)
return tmpColumn}},search={list:function(){for(var k=0,kl=list.items.length;kl>k;k++)search.item(list.items[k])},item:function(item){item.found=!1
for(var j=0,jl=columns.length;jl>j;j++)if(search.values(item.values(),columns[j]))return void(item.found=!0)},values:function(values,column){return values.hasOwnProperty(column)&&(text=list.utils.toString(values[column]).toLowerCase(),""!==searchString&&text.search(searchString)>-1)?!0:!1},reset:function(){list.reset.search(),list.searched=!1}},searchMethod=function(str){return list.trigger("searchStart"),prepare.resetList(),prepare.setSearchString(str),prepare.setOptions(arguments),prepare.setColumns(),""===searchString?search.reset():(list.searched=!0,customSearch?customSearch(searchString,columns):search.list()),list.update(),list.trigger("searchComplete"),list.visibleItems}
return list.handlers.searchStart=list.handlers.searchStart||[],list.handlers.searchComplete=list.handlers.searchComplete||[],list.utils.events.bind(list.utils.getByClass(list.listContainer,list.searchClass),"keyup",function(e){var target=e.target||e.srcElement,alreadyCleared=""===target.value&&!list.searched
alreadyCleared||searchMethod(target.value)}),list.utils.events.bind(list.utils.getByClass(list.listContainer,list.searchClass),"input",function(e){var target=e.target||e.srcElement
""===target.value&&searchMethod("")}),searchMethod}},function(module,exports){module.exports=function(list){var buttons={els:void 0,clear:function(){for(var i=0,il=buttons.els.length;il>i;i++)list.utils.classes(buttons.els[i]).remove("asc"),list.utils.classes(buttons.els[i]).remove("desc")},getOrder:function(btn){var predefinedOrder=list.utils.getAttribute(btn,"data-order")
return"asc"==predefinedOrder||"desc"==predefinedOrder?predefinedOrder:list.utils.classes(btn).has("desc")?"asc":list.utils.classes(btn).has("asc")?"desc":"asc"},getInSensitive:function(btn,options){var insensitive=list.utils.getAttribute(btn,"data-insensitive")
"false"===insensitive?options.insensitive=!1:options.insensitive=!0},setOrder:function(options){for(var i=0,il=buttons.els.length;il>i;i++){var btn=buttons.els[i]
if(list.utils.getAttribute(btn,"data-sort")===options.valueName){var predefinedOrder=list.utils.getAttribute(btn,"data-order")
"asc"==predefinedOrder||"desc"==predefinedOrder?predefinedOrder==options.order&&list.utils.classes(btn).add(options.order):list.utils.classes(btn).add(options.order)}}}},sort=function(){list.trigger("sortStart")
var options={},target=arguments[0].currentTarget||arguments[0].srcElement||void 0
target?(options.valueName=list.utils.getAttribute(target,"data-sort"),buttons.getInSensitive(target,options),options.order=buttons.getOrder(target)):(options=arguments[1]||options,options.valueName=arguments[0],options.order=options.order||"asc",options.insensitive=void 0===options.insensitive?!0:options.insensitive),buttons.clear(),buttons.setOrder(options)
var sortFunction,customSortFunction=options.sortFunction||list.sortFunction||null,multi="desc"===options.order?-1:1
sortFunction=customSortFunction?function(itemA,itemB){return customSortFunction(itemA,itemB,options)*multi}:function(itemA,itemB){var sort=list.utils.naturalSort
return sort.alphabet=list.alphabet||options.alphabet||void 0,!sort.alphabet&&options.insensitive&&(sort=list.utils.naturalSort.caseInsensitive),sort(itemA.values()[options.valueName],itemB.values()[options.valueName])*multi},list.items.sort(sortFunction),list.update(),list.trigger("sortComplete")}
return list.handlers.sortStart=list.handlers.sortStart||[],list.handlers.sortComplete=list.handlers.sortComplete||[],buttons.els=list.utils.getByClass(list.listContainer,list.sortClass),list.utils.events.bind(buttons.els,"click",sort),list.on("searchStart",buttons.clear),list.on("filterStart",buttons.clear),sort}},function(module,exports){var Templater=function(list){var itemSource,templater=this,init=function(){itemSource=templater.getItemSource(list.item),itemSource&&(itemSource=templater.clearSourceItem(itemSource,list.valueNames))}
this.clearSourceItem=function(el,valueNames){for(var i=0,il=valueNames.length;il>i;i++){var elm
if(valueNames[i].data)for(var j=0,jl=valueNames[i].data.length;jl>j;j++)el.setAttribute("data-"+valueNames[i].data[j],"")
else valueNames[i].attr&&valueNames[i].name?(elm=list.utils.getByClass(el,valueNames[i].name,!0),elm&&elm.setAttribute(valueNames[i].attr,"")):(elm=list.utils.getByClass(el,valueNames[i],!0),elm&&(elm.innerHTML=""))
elm=void 0}return el},this.getItemSource=function(item){if(void 0===item){for(var nodes=list.list.childNodes,i=0,il=nodes.length;il>i;i++)if(void 0===nodes[i].data)return nodes[i].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(item)){var tbody=document.createElement("tbody")
return tbody.innerHTML=item,tbody.firstChild}if(-1!==item.indexOf("<")){var div=document.createElement("div")
return div.innerHTML=item,div.firstChild}var source=document.getElementById(list.item)
if(source)return source}},this.get=function(item,valueNames){templater.create(item)
for(var values={},i=0,il=valueNames.length;il>i;i++){var elm
if(valueNames[i].data)for(var j=0,jl=valueNames[i].data.length;jl>j;j++)values[valueNames[i].data[j]]=list.utils.getAttribute(item.elm,"data-"+valueNames[i].data[j])
else valueNames[i].attr&&valueNames[i].name?(elm=list.utils.getByClass(item.elm,valueNames[i].name,!0),values[valueNames[i].name]=elm?list.utils.getAttribute(elm,valueNames[i].attr):""):(elm=list.utils.getByClass(item.elm,valueNames[i],!0),values[valueNames[i]]=elm?elm.innerHTML:"")
elm=void 0}return values},this.set=function(item,values){var getValueName=function(name){for(var i=0,il=list.valueNames.length;il>i;i++)if(list.valueNames[i].data){for(var data=list.valueNames[i].data,j=0,jl=data.length;jl>j;j++)if(data[j]===name)return{data:name}}else{if(list.valueNames[i].attr&&list.valueNames[i].name&&list.valueNames[i].name==name)return list.valueNames[i]
if(list.valueNames[i]===name)return name}},setValue=function(name,value){var elm,valueName=getValueName(name)
valueName&&(valueName.data?item.elm.setAttribute("data-"+valueName.data,value):valueName.attr&&valueName.name?(elm=list.utils.getByClass(item.elm,valueName.name,!0),elm&&elm.setAttribute(valueName.attr,value)):(elm=list.utils.getByClass(item.elm,valueName,!0),elm&&(elm.innerHTML=value)),elm=void 0)}
if(!templater.create(item))for(var v in values)values.hasOwnProperty(v)&&setValue(v,values[v])},this.create=function(item){if(void 0!==item.elm)return!1
if(void 0===itemSource)throw Error("The list need to have at list one item on init otherwise you'll have to add a template.")
var newItem=itemSource.cloneNode(!0)
return newItem.removeAttribute("id"),item.elm=newItem,templater.set(item,item.values()),!0},this.remove=function(item){item.elm.parentNode===list.list&&list.list.removeChild(item.elm)},this.show=function(item){templater.create(item),list.list.appendChild(item.elm)},this.hide=function(item){void 0!==item.elm&&item.elm.parentNode===list.list&&list.list.removeChild(item.elm)},this.clear=function(){if(list.list.hasChildNodes())for(;list.list.childNodes.length>=1;)list.list.removeChild(list.list.firstChild)},init()}
module.exports=function(list){return new Templater(list)}},function(module,exports){module.exports=function(el,attr){var result=el.getAttribute&&el.getAttribute(attr)||null
if(!result)for(var attrs=el.attributes,length=attrs.length,i=0;length>i;i++)void 0!==attr[i]&&attr[i].nodeName===attr&&(result=attr[i].nodeValue)
return result}},function(module,exports,__webpack_require__){"use strict"
function isNumberCode(code){return code>=48&&57>=code}function naturalCompare(a,b){for(var lengthA=(a+="").length,lengthB=(b+="").length,aIndex=0,bIndex=0;lengthA>aIndex&&lengthB>bIndex;){var charCodeA=a.charCodeAt(aIndex),charCodeB=b.charCodeAt(bIndex)
if(isNumberCode(charCodeA)){if(!isNumberCode(charCodeB))return charCodeA-charCodeB
for(var numStartA=aIndex,numStartB=bIndex;48===charCodeA&&++numStartA<lengthA;)charCodeA=a.charCodeAt(numStartA)
for(;48===charCodeB&&++numStartB<lengthB;)charCodeB=b.charCodeAt(numStartB)
for(var numEndA=numStartA,numEndB=numStartB;lengthA>numEndA&&isNumberCode(a.charCodeAt(numEndA));)++numEndA
for(;lengthB>numEndB&&isNumberCode(b.charCodeAt(numEndB));)++numEndB
var difference=numEndA-numStartA-numEndB+numStartB
if(difference)return difference
for(;numEndA>numStartA;)if(difference=a.charCodeAt(numStartA++)-b.charCodeAt(numStartB++))return difference
aIndex=numEndA,bIndex=numEndB}else{if(charCodeA!==charCodeB)return alphabetIndexMapLength>charCodeA&&alphabetIndexMapLength>charCodeB&&-1!==alphabetIndexMap[charCodeA]&&-1!==alphabetIndexMap[charCodeB]?alphabetIndexMap[charCodeA]-alphabetIndexMap[charCodeB]:charCodeA-charCodeB;++aIndex,++bIndex}}return lengthA-lengthB}var alphabet,alphabetIndexMap,alphabetIndexMapLength=0
naturalCompare.caseInsensitive=naturalCompare.i=function(a,b){return naturalCompare((""+a).toLowerCase(),(""+b).toLowerCase())},Object.defineProperties(naturalCompare,{alphabet:{get:function(){return alphabet},set:function(value){alphabet=value,alphabetIndexMap=[]
var i=0
if(alphabet)for(;i<alphabet.length;i++)alphabetIndexMap[alphabet.charCodeAt(i)]=i
for(alphabetIndexMapLength=alphabetIndexMap.length,i=0;alphabetIndexMapLength>i;i++)void 0===alphabetIndexMap[i]&&(alphabetIndexMap[i]=-1)}}}),module.exports=naturalCompare},function(module,exports){module.exports=function(text,pattern,options){function match_bitapScore_(e,x){var accuracy=e/pattern.length,proximity=Math.abs(loc-x)
return Match_Distance?accuracy+proximity/Match_Distance:proximity?1:accuracy}var Match_Location=options.location||0,Match_Distance=options.distance||100,Match_Threshold=options.threshold||.4
if(pattern===text)return!0
if(pattern.length>32)return!1
var loc=Match_Location,s=function(){var i,q={}
for(i=0;i<pattern.length;i++)q[pattern.charAt(i)]=0
for(i=0;i<pattern.length;i++)q[pattern.charAt(i)]|=1<<pattern.length-i-1
return q}(),score_threshold=Match_Threshold,best_loc=text.indexOf(pattern,loc);-1!=best_loc&&(score_threshold=Math.min(match_bitapScore_(0,best_loc),score_threshold),best_loc=text.lastIndexOf(pattern,loc+pattern.length),-1!=best_loc&&(score_threshold=Math.min(match_bitapScore_(0,best_loc),score_threshold)))
var matchmask=1<<pattern.length-1
best_loc=-1
for(var bin_min,bin_mid,last_rd,bin_max=pattern.length+text.length,d=0;d<pattern.length;d++){for(bin_min=0,bin_mid=bin_max;bin_mid>bin_min;)match_bitapScore_(d,loc+bin_mid)<=score_threshold?bin_min=bin_mid:bin_max=bin_mid,bin_mid=Math.floor((bin_max-bin_min)/2+bin_min)
bin_max=bin_mid
var start=Math.max(1,loc-bin_mid+1),finish=Math.min(loc+bin_mid,text.length)+pattern.length,rd=Array(finish+2)
rd[finish+1]=(1<<d)-1
for(var j=finish;j>=start;j--){var charMatch=s[text.charAt(j-1)]
if(0===d?rd[j]=(rd[j+1]<<1|1)&charMatch:rd[j]=(rd[j+1]<<1|1)&charMatch|((last_rd[j+1]|last_rd[j])<<1|1)|last_rd[j+1],rd[j]&matchmask){var score=match_bitapScore_(d,j-1)
if(score_threshold>=score){if(score_threshold=score,best_loc=j-1,!(best_loc>loc))break
start=Math.max(1,2*loc-best_loc)}}}if(match_bitapScore_(d+1,loc)>score_threshold)break
last_rd=rd}return 0>best_loc?!1:!0}}])

var userLang, langValue, urlLang;
var root = document.documentElement;

var color1 = "253, 58, 74"
var color2 =  "245, 128, 37"
var color3 =  "255, 167, 0"
var color4 =  "123, 113, 81"
var color5 =  "91, 170, 9"
var color6 =  "26, 152, 90"
var color7 =  "59, 168, 221"
var color8 =  "0, 120, 215"
var color9 =  "139, 102, 204"
var color10 =  "228, 27, 144"

var languageList =  [
  { id: 'en', url: 'en'},
  { id: 'gb', url: 'en-gb'},
  { id: 'bg', url: 'bg'}, 
  { id: 'ca', url: 'ca'}, 
  { id: 'zs', url: 'zh-cn'}, 
  { id: 'zt', url: 'zh-tw'}, 
  { id: 'hr', url: 'hr'}, 
  { id: 'cs', url: 'cs'}, 
  { id: 'da', url: 'da'}, 
  { id: 'nl', url: 'nl'}, 
  { id: 'fi', url: 'fi'}, 
  { id: 'fr', url: 'fr'}, 
  { id: 'de', url: 'de'}, 
  { id: 'el', url: 'el'}, 
  { id: 'hi', url: 'hi'}, 
  { id: 'hu', url: 'hu'}, 
  { id: 'hy', url: 'hy'}, 
  { id: 'id', url: 'id'}, 
  { id: 'it', url: 'it'}, 
  { id: 'ja', url: 'ja'}, 
  { id: 'ko', url: 'ko'}, 
  { id: 'ms', url: 'ms'}, 
  { id: 'mk', url: 'mk'}, 
  { id: 'nb', url: 'nb-no'}, 
  { id: 'nn', url: 'nn-no'}, 
  { id: 'ph', url: 'pl'}, 
  { id: 'pt', url: 'pt'}, 
  { id: 'ro', url: 'ro'}, 
  { id: 'ru', url: 'ru'}, 
  { id: 'sr', url: 'sr'}, 
  { id: 'sk', url: 'sk'}, 
  { id: 'sl', url: 'sl'}, 
  { id: 'es', url: 'es'}, 
  { id: 'sv', url: 'sv'}, 
  { id: 'th', url: 'th'}, 
  { id: 'tr', url: 'tr'}, 
  { id: 'uk', url: 'uk'}, 
  { id: 'vi', url: 'vi'},
  { id: 'ar', url: 'ar'}, 
  { id: 'he', url: 'he'}, 
  { id: 'fa', url: 'fa'}
]

function getLang() {
  // console.log("getLang")
  langValue = localStorage.getItem("langValue");

  if (!langValue || langValue === "sys") {
    userLang = window.navigator.language || window.navigator.userLanguage;

    var newLang;
    if (userLang === "zh-Hans-CN" || userLang === "zh-SG" || userLang === "zh-CN" || userLang === "zh-Hans" || userLang === "zh-Hans-HK")
      newLang = "zs";
    else if (userLang === "zh-Hant-TW" || userLang === "zh-Hant" || userLang === "zh-TW" || userLang === "zh-Hant-HK")
      newLang = "zt";
    else if (userLang === "pl" || userLang === "pl-PL")
      newLang = "ph";
    else if (userLang === "en-GB")
      newLang = "gb";
    else
      newLang = (userLang.indexOf("-") > 0) ? (userLang.substr(0, userLang.indexOf("-"))) : userLang;

    let langExists = languageList.find(x => x.id === newLang)
    if(langExists)
      langValue = newLang
    else
      langValue = "en"

    localStorage.setItem("langValue", langValue);
  }
}
getLang();

function getUrlLang(lang){
  let langExists = languageList.find(x => x.id === lang)
  if (langExists)
    return langExists.url
  else
    return "en"
}

function getIdLang(lang){
  let langExists = languageList.find(x => x.url === lang)
  if (langExists)
    return langExists.id
  else
    return "en"
}

urlLang = getUrlLang(langValue);

function setLangFile(inLang) {
  // console.log("setLangFile")
  var regularFont, heavyFont;

  switch (inLang) {
    case "ar":
    case "fa":
      regularFont = "NotoSansKufiArabic-Regular";
      heavyFont = "NotoSansKufiArabic-Bold";
      break;
    case "hi":
      regularFont = "NotoSansDevanagari-Regular";
      heavyFont = "NotoSansDevanagari-Bold";
      break;
    case "he":
      regularFont = "NotoSansHebrew-Regular";
      heavyFont = "NotoSansHebrew-Bold";
      break;
    case "th":
      regularFont = "NotoSansThai-Regular";
      heavyFont = "NotoSansThai-Bold";
      break;
    case "ko":
      regularFont = "NotoSansKR-Regular";
      heavyFont = "NotoSansKR-Bold";
      break;
    case "ja":
      regularFont = "NotoSansJP-Regular";
      heavyFont = "NotoSansJP-Bold";
      break;
    case "hy":
      regularFont = "NotoSansArmenian-Regular";
      heavyFont = "NotoSansArmenian-Bold";
      break;
    case "zs":
      regularFont = "NotoSansSC-Regular";
      heavyFont = "NotoSansSC-Bold";
      break;
    case "zt":
      regularFont = "NotoSansTC-Regular";
      heavyFont = "NotoSansTC-Bold";
      break;
    default:
      regularFont = "LatoLatin-Regular";
      heavyFont = "LatoLatin-Heavy";
  }

  var newStyle = document.createElement("style");
  newStyle.appendChild(document.createTextNode("@font-face {font-family: Special Regular;src: url(fonts/" + regularFont + ".woff2) format('woff2'), url(fonts/" + regularFont + ".woff) format('woff');}"));
  newStyle.appendChild(document.createTextNode("@font-face {font-family: Special Heavy;src: url(fonts/" + heavyFont + ".woff2) format('woff2'), url(fonts/" + heavyFont + ".woff) format('woff');}"));

 
  if (langValue === "ar" || langValue === "fa" || langValue === "he") 
    document.documentElement.setAttribute('data-direction', "rtl");
   else 
    document.documentElement.setAttribute('data-direction', "ltr");
  
  document.head.appendChild(newStyle);
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] === variable)
      return pair[1];
  }
  return null;
}

function rgbToHex(rgb) {
  var r = rgb.split(",")[0];
  g = rgb.split(",")[1];
  b = rgb.split(",")[2];

  var rgbNew = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 + rgbNew).toString(16).slice(1);
}

function colorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

function setColor(color) {
  var hexValue = rgbToHex(color);

  var darkerColor50 = colorLuminance(hexValue, -0.5);
  var darkerColor0 = colorLuminance(hexValue, -0.6);

  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", darkerColor50);

  var metaTileColor = document.querySelector("meta[name=msapplication-TileColor]");
  metaTileColor.setAttribute("content", hexValue);
  
  root.style.setProperty("--theme-color", color);
  root.style.setProperty("--darker-color-50", darkerColor50);
  root.style.setProperty("--darker-color-0", darkerColor0);
}