/* Native Javascript for Bootstrap 3 v2.0.22 */
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
/*list*/
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
/*isotope*/
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict"
function i(i,s,a){function u(t,e,o){var n,s="$()."+i+'("'+e+'")'
return t.each(function(t,u){var h=a.data(u,i)
if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s)
var d=h[e]
if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method")
var l=d.apply(h,o)
n=void 0===n?l:n}),void 0!==n?n:t}function h(t,e){t.each(function(t,o){var n=a.data(o,i)
n?(n.option(e),n._init()):(n=new s(o,e),a.data(o,i,n))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=n.call(arguments,1)
return u(this,t,e)}return h(this,t),this},o(a))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var n=Array.prototype.slice,s=t.console,r=void 0===s?function(){}:function(t){s.error(t)}
return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype
return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[]
return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e)
var i=this._onceEvents=this._onceEvents||{},o=i[t]=i[t]||{}
return o[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t]
if(i&&i.length){var o=i.indexOf(e)
return-1!=o&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t]
if(i&&i.length){i=i.slice(0),e=e||[]
for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n],r=o&&o[s]
r&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict"
"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict"
function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e)
return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e]
t[i]=0}return t}function o(t){var e=getComputedStyle(t)
return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function n(){if(!d){d=!0
var e=document.createElement("div")
e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box"
var i=document.body||document.documentElement
i.appendChild(e)
var n=o(e)
s.isBoxSizeOuter=r=200==t(n.width),i.removeChild(e)}}function s(e){if(n(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=o(e)
if("none"==s.display)return i()
var a={}
a.width=e.offsetWidth,a.height=e.offsetHeight
for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c)
a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width)
x!==!1&&(a.width=x+(z?0:p+_))
var S=t(s.height)
return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1
return s}),function(t,e){"use strict"
"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict"
var t=function(){var t=window.Element.prototype
if(t.matches)return"matches"
if(t.matchesSelector)return"matchesSelector"
for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i],n=o+"MatchesSelector"
if(t[n])return n}}()
return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={}
i.extend=function(t,e){for(var i in e)t[i]=e[i]
return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[]
if(Array.isArray(t))e=t
else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i])
else e.push(t)
return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},i.filterFindElements=function(t,o){t=i.makeArray(t)
var n=[]
return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t)
e(t,o)&&n.push(t)
for(var i=t.querySelectorAll(o),s=0;s<i.length;s++)n.push(i[s])}}),n},i.debounceMethod=function(t,e,i){var o=t.prototype[e],n=e+"Timeout"
t.prototype[e]=function(){var t=this[n]
t&&clearTimeout(t)
var e=arguments,s=this
this[n]=setTimeout(function(){o.apply(s,e),delete s[n]},i||100)}},i.docReady=function(t){var e=document.readyState
"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()}
var o=t.console
return i.htmlInit=function(e,n){i.docReady(function(){var s=i.toDashed(n),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery
h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d)
try{i=s&&JSON.parse(s)}catch(a){return void(o&&o.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i)
l&&l.data(t,n,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict"
function i(t){for(var e in t)return!1
return e=null,!0}function o(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function n(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=o.prototype=Object.create(t.prototype)
d.constructor=o,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type
this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style
for(var i in t){var o=h[i]||i
e[o]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=this.layout.size,r=-1!=o.indexOf("%")?parseFloat(o)/100*s.width:parseInt(o,10),a=-1!=n.indexOf("%")?parseFloat(n)/100*s.height:parseInt(n,10)
r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n]
e[s]=this.getXValue(a),e[r]=""
var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u]
e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal")
return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal")
return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition()
var i=this.position.x,o=this.position.y,n=parseInt(t,10),s=parseInt(e,10),r=n===this.position.x&&s===this.position.y
if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition()
var a=t-i,u=e-o,h={}
h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop")
return t=i?t:-t,e=o?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to)
for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t)
var e=this._transn
for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i]
for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0)
if(t.from){this.css(t.from)
var o=this.element.offsetHeight
o=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}
var l="opacity,"+n(a)
d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration
t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)}
var f={"-webkit-transform":"transform"}
d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,o=f[t.propertyName]||t.propertyName
if(delete e.ingProperties[o],i(e.ingProperties)&&this.disableTransition(),o in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[o]),o in e.onEnd){var n=e.onEnd[o]
n.call(this),delete e.onEnd[o]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={}
for(var i in t)e[i]=""
this.css(e)}
var c={transitionProperty:"",transitionDuration:"",transitionDelay:""}
return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""})
var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle")
e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t]
if(e.opacity)return"opacity"
for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""})
var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle")
e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},o}),function(t,e){"use strict"
"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,o,n,s){return e(t,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,o,n){"use strict"
function s(t,e){var i=o.getQueryElement(t)
if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)))
this.element=i,h&&(this.$element=h(this.element)),this.options=o.extend({},this.constructor.defaults),this.option(e)
var n=++l
this.element.outlayerGUID=n,f[n]=this,this._create()
var s=this._getOption("initLayout")
s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t
var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2]
if(!i.length)return 0
i=parseFloat(i)
var n=m[o]||1
return i*n}var u=t.console,h=t.jQuery,d=function(){},l=0,f={}
s.namespace="outlayer",s.Item=n,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}}
var c=s.prototype
o.extend(c,e.prototype),c.option=function(t){o.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t]
return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),o.extend(this.element.style,this.options.containerStyle)
var t=this._getOption("resize")
t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=e[n],r=new i(s,this)
o.push(r)}return o},c._filterFindItemElements=function(t){return o.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps()
var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited
this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var o,n=this.options[t]
n?("string"==typeof n?o=this.element.querySelector(n):n instanceof HTMLElement&&(o=n),this[t]=o?i(o)[e]:n):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[]
t.forEach(function(t){var o=this._getItemLayoutPosition(t)
o.item=t,o.isInstant=e||t.isLayoutInstant,i.push(o)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger
return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer")
if(t){var e=this._getContainerSize()
e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size
i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){n.dispatchEvent(t+"Complete",null,[e])}function o(){r++,r==s&&i()}var n=this,s=e.length
if(!e||!s)return void i()
var r=0
e.forEach(function(e){e.once(t,o)})},c.dispatchEvent=function(t,e,i){var o=e?[e].concat(i):i
if(this.emitEvent(t,o),h)if(this.$element=this.$element||h(this.element),e){var n=h.Event(e)
n.type=t,this.$element.trigger(n,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t)
e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t)
e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){o.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=o.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size
this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),o=this._boundingRect,n=i(t),s={left:e.left-o.left-n.marginLeft,top:e.top-o.top-n.marginTop,right:o.right-e.right-n.marginRight,bottom:o.bottom-e.bottom-n.marginBottom}
return s},c.handleEvent=o.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},o.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t
return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t)
return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t)
e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t)
if(e.length){var i=this.items.slice(0)
this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger()
t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger()
t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t)
this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t)
this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e]
if(i.element==t)return i}},c.getItems=function(t){t=o.makeArray(t)
var e=[]
return t.forEach(function(t){var i=this.getItem(t)
i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t)
this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),o.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style
t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize()
var e=this.element.outlayerGUID
delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=o.getQueryElement(t)
var e=t&&t.outlayerGUID
return e&&f[e]},s.create=function(t,e){var i=r(s)
return i.defaults=o.extend({},s.defaults),o.extend(i.defaults,e),i.compatOptions=o.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(n),o.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i}
var m={ms:1,s:1e3}
return s.Item=n,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict"
function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create
i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random()
var t=this.layout.options.getSortData,e=this.layout._sorters
for(var i in t){var o=e[i]
this.sortData[i]=o(this.element,this)}}}
var n=i.destroy
return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict"
function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var o=i.prototype,n=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"]
return n.forEach(function(t){o[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),o.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e
return i&&e.innerHeight!=this.isotope.size.innerHeight},o._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},o.getColumnWidth=function(){this.getSegmentSize("column","Width")},o.getRowHeight=function(){this.getSegmentSize("row","Height")},o.getSegmentSize=function(t,e){var i=t+e,o="outer"+e
if(this._getMeasurement(i,o),!this[i]){var n=this.getFirstItemSize()
this[i]=n&&n[o]||this.isotope.size["inner"+e]}},o.getFirstItemSize=function(){var e=this.isotope.filteredItems[0]
return e&&e.element&&t(e.element)},o.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},o.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function n(){i.apply(this,arguments)}return n.prototype=Object.create(o),n.prototype.constructor=n,e&&(n.options=e),n.prototype.namespace=t,i.modes[t]=n,n},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry")
i.compatOptions.fitWidth="isFitWidth"
var o=i.prototype
return o._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[]
for(var t=0;t<this.cols;t++)this.colYs.push(0)
this.maxY=0,this.horizontalColIndex=0},o.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element
this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var o=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,s=n/o,r=o-n%o,a=r&&1>r?"round":"floor"
s=Math[a](s),this.cols=Math.max(s,1)},o.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,o=e(i)
this.containerWidth=o&&o.innerWidth},o._getItemLayoutPosition=function(t){t.getSize()
var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",o=Math[i](t.size.outerWidth/this.columnWidth)
o=Math.min(o,this.cols)
for(var n=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",s=this[n](o,t),r={x:this.columnWidth*s.col,y:s.y},a=s.y+t.size.outerHeight,u=o+s.col,h=s.col;u>h;h++)this.colYs[h]=a
return r},o._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e)
return{col:e.indexOf(i),y:i}},o._getTopColGroup=function(t){if(2>t)return this.colYs
for(var e=[],i=this.cols+1-t,o=0;i>o;o++)e[o]=this._getColGroupY(o,t)
return e},o._getColGroupY=function(t,e){if(2>e)return this.colYs[t]
var i=this.colYs.slice(t,t+e)
return Math.max.apply(Math,i)},o._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,o=t>1&&i+t>this.cols
i=o?0:i
var n=e.size.outerWidth&&e.size.outerHeight
return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},o._manageStamp=function(t){var i=e(t),o=this._getElementOffset(t),n=this._getOption("originLeft"),s=n?o.left:o.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth)
a=Math.max(0,a)
var u=Math.floor(r/this.columnWidth)
u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u)
for(var h=this._getOption("originTop"),d=(h?o.top:o.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},o._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs)
var t={height:this.maxY}
return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},o._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++
return(this.cols-t)*this.columnWidth-this.gutter},o.needsResizeLayout=function(){var t=this.containerWidth
return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict"
var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0}
for(var s in e.prototype)n[s]||(o[s]=e.prototype[s])
var r=o.measureColumns
o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)}
var a=o._getOption
return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict"
var e=t.create("fitRows"),i=e.prototype
return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize()
var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter
0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY)
var o={x:this.x,y:this.y}
return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict"
var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype
return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize()
var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y
return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(i,o,n,s,r,a){return e(t,i,o,n,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,o,n,s,r){function a(t,e){return function(i,o){for(var n=0;n<t.length;n++){var s=t[n],r=i.sortData[s],a=o.sortData[s]
if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1
return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0})
d.Item=s,d.LayoutMode=r
var l=d.prototype
l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"]
for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var o=t[i]
o.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{}
this.options[t]=e.options?n.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant()
this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant()
var e=this._filter(this.items)
this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited
return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this
this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},l._filter=function(t){var e=this.options.filter
e=e||"*"
for(var i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r]
if(!a.isIgnored){var u=s(a)
u&&i.push(a),u&&a.isHidden?o.push(a):u||a.isHidden||n.push(a)}}return{matches:i,needReveal:o,needHide:n}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return o(e.element,t)}},l.updateSortData=function(t){var e
t?(t=n.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData
for(var e in t){var i=t[e]
this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var o=t[i]
o.updateSortData()}}
var f=function(){function t(t){if("string"!=typeof t)return t
var i=h(t).split(" "),o=i[0],n=o.match(/^\[(.+)\]$/),s=n&&n[1],r=e(s,o),a=d.sortDataParsers[i[1]]
return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e)
return i&&i.textContent}}return t}()
d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){if(this.options.sortBy){var t=n.makeArray(this.options.sortBy)
this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory))
var e=a(this.sortHistory,this.options.sortAscending)
this.filteredItems.sort(e)}},l._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1
return!0},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t]
if(!e)throw Error("No layout mode: "+t)
return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t)
if(e.length){var i=this._filterRevealAdded(e)
this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t)
if(e.length){this._resetLayout(),this._manageStamps()
var i=this._filterRevealAdded(e)
this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t)
return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t)
if(e.length){var i,o,n=e.length
for(i=0;n>i;i++)o=e[i],this.element.appendChild(o.element)
var s=this._filter(e).matches
for(i=0;n>i;i++)e[i].isLayoutInstant=!0
for(this.arrange(),i=0;n>i;i++)delete e[i].isLayoutInstant
this.reveal(s)}}
var c=l.remove
return l.remove=function(t){t=n.makeArray(t)
var e=this.getItems(t)
c.call(this,t)
for(var i=e&&e.length,o=0;i&&i>o;o++){var s=e[o]
n.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t]
e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration
this.options.transitionDuration=0
var o=t.apply(this,e)
return this.options.transitionDuration=i,o},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d})

var userLang, langValue, derivedLang;

var color1 = "255,193,7";
var color2 = "255,140,0";
var color3 = "247,99,12";
var color4 = "239,105,80";
var color5 = "232,17,35";
var color6 = "195,0,82";
var color7 = "191,0,119";
var color8 = "154,0,137";
var color9 = "0,120,215";
var color10 = "0,99,177";
var color11 = "142,140,216";
var color12 = "107,105,214";
var color13 = "0,153,188";
var color14 = "45,125,154";
var color15 = "3,131,135";
var color16 = "0,204,106";
var color17 = "16,137,62";
var color18 = "73,130,5";
var color19 = "16,124,16";
var color20 = "118,118,118";
var color21 = "76,74,72";
var color22 = "105,121,126";
var color23 = "100,124,100";
var color24 = "132,117,69";
var color25 = "126,115,95";

function getLang() {
  langValue = localStorage.getItem("langValue");

  if (!langValue) {
    userLang = window.navigator.language || window.navigator.userLanguage;
    localStorage.setItem("langValue", "sys");
    langValue = "sys";
  } else
    userLang = (langValue === "sys") ? (window.navigator.language || window.navigator.userLanguage) : langValue;

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

  return newLang;
}

derivedLang = getLang();

if(derivedLang === "pl"){
	derivedLang = "en";
	localStorage.setItem("langValue", "sys");
}

function setLangFile(inLang) {
  var regularFont, heavyFont, fontType, fontExt;

  switch (inLang) {
    case "ar":
    case "fa":
      regularFont = "NotoSansKufiArabic-Regular";
      heavyFont = "NotoSansKufiArabic-Bold";
      fontExt = "ttf";
      break;
    case "hi":
      regularFont = "NotoSansDevanagari-Regular";
      heavyFont = "NotoSansDevanagari-Bold";
      fontExt = "ttf";
      break;
    case "ko":
      regularFont = "NotoSansKR-Regular";
      heavyFont = "NotoSansKR-Bold";
      fontExt = "otf";
      break;
    case "ja":
      regularFont = "NotoSansJP-Regular";
      heavyFont = "NotoSansJP-Bold";
      fontExt = "otf";
      break;
    case "zs":
      regularFont = "NotoSansSC-Regular";
      heavyFont = "NotoSansSC-Bold";
      fontExt = "otf";
      break;
    case "zt":
      regularFont = "NotoSansTC-Regular";
      heavyFont = "NotoSansTC-Bold";
      fontExt = "otf";
      break;
    default:
      regularFont = "LatoLatin-Regular";
      heavyFont = "LatoLatin-Heavy";
      fontExt = "ttf";
  }

  fontType = (fontExt === "ttf") ? "truetype" : "opentype";
  
  var newStyle = document.createElement("style");
  newStyle.appendChild(document.createTextNode("@font-face {font-family: Special Regular;src: url(fonts/" + regularFont + ".woff2) format('woff2'), url(fonts/" + regularFont + ".woff) format('woff'), url(fonts/" + regularFont + "." + fontExt + ") format('" + fontType + "');}"));
  newStyle.appendChild(document.createTextNode("@font-face {font-family: Special Heavy;src: url(fonts/" + heavyFont + ".woff2) format('woff2'), url(fonts/" + heavyFont + ".woff) format('woff'), url(fonts/" + heavyFont + "." + fontExt + ") format('" + fontType + "');}"));

  var dir, dirRev;

  if (derivedLang === "ar" || derivedLang === "fa" || derivedLang === "he") {
    newStyle.appendChild(document.createTextNode("html{direction:rtl}.listNum{border-width:60px 60px 0 0}"));
    dir = "right";
    dirRev = "left";
  } else {
    newStyle.appendChild(document.createTextNode("html{direction:ltr}.listNum{border-width:0 60px 60px 0}"));
    dir = "left";
    dirRev = "right";
  }

  newStyle.appendChild(document.createTextNode("button{float:" + dirRev + "}.listNum>*{" + dirRev + ":25px;" + dir + ":unset}.text-left{text-align:" + dir + "}.text-right{text-align:" + dirRev + "}"));
  newStyle.appendChild(document.createTextNode(".col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.navbar-brand,.listName,.listSym{float:" + dir + "}"));
  newStyle.appendChild(document.createTextNode("@media (min-width:768px){.post-masonry{" + dirRev + ":0;" + dir + ":unset}.col-sm-3,.col-sm-6,.navbar-header,.navbar-nav,.navbar-nav>li{float:" + dir + "}.navbar-right{float:" + dirRev + "}}@media (min-width:992px){.col-md-2,.col-md-3,.col-md-4{float:" + dir + "}}@media (min-width:1200px){.col-lg-3,.col-lg-4{float:" + dir + "}}@media (min-width:1724px){.col-lg-3,.col-lg-4,.col-md-4{float:" + dir + "}}"));
  newStyle.appendChild(document.createTextNode("#topRowCompare{margin-" + dir + ":-25px}.webLink{float:" + dir + ";clear:" + dir + "}"));

  document.head.appendChild(newStyle);
}

function rgbToHex(rgb) {
  var r = rgb.split(",")[0];
  g = rgb.split(",")[1];
  b = rgb.split(",")[2];

  var rgbNew = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 + rgbNew).toString(16).slice(1);
}

function setColor(themeColor) {
  var hexValue = rgbToHex(themeColor);

  var metaThemeColor = document.querySelector("meta[name=theme-color]");
  metaThemeColor.setAttribute("content", hexValue);

  var metaTileColor = document.querySelector("meta[name=msapplication-TileColor]");
  metaTileColor.setAttribute("content", hexValue);

  var newStyle = document.createElement("style");
  newStyle.appendChild(document.createTextNode("#footerwrap,#topRowCompare,.modal-content,.navbar-default,button,html{background-color:rgba(" + themeColor + ",1)}.aboutHeader{color:rgba(" + themeColor + ",.7)}input:checked+.slider{background-color:rgb(" + themeColor + ")}input:focus+.slider{box-shadow:0 0 1px rgb(" + themeColor + ")}"));
  newStyle.appendChild(document.createTextNode(".box-content,.list-content{background-color:rgba(" + themeColor + ",.25)}.actualHeader,.listSym{background-color:rgba(" + themeColor + ",.5)}"));
  newStyle.appendChild(document.createTextNode(".navbar-default,.navbar-collapse.in{background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35)), linear-gradient(to right, rgb(" + themeColor + "), rgb(" + themeColor + "))}.sort{background: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(to right, rgb(" + themeColor + "), rgb(" + themeColor + "))}"));

  if (derivedLang === "ar" || derivedLang === "fa" || derivedLang === "he")
    newStyle.appendChild(document.createTextNode(".listNum{border-color:rgba(" + themeColor + ",0.5) transparent transparent transparent}.navbar-toggle{background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), linear-gradient(to right, rgb(" + themeColor + "), rgb(" + themeColor + "))}"));
    
  else
    newStyle.appendChild(document.createTextNode(".listNum{border-color:transparent rgba(" + themeColor + ",0.5) transparent transparent}.navbar-toggle{background: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), linear-gradient(to right, rgb(" + themeColor + "), rgb(" + themeColor + "))}"));

  document.head.appendChild(newStyle);
}
