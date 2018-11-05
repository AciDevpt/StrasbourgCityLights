var maxModal;jQuery(document).ready(function(t){$=t,(maxModal=function(){}).prototype={currentModal:null,modals:[],controls:[],parent:"#maxbuttons",multiple:!1,windowHeight:!1,windowWidth:!1,setWidth:!1,setHeight:!1,target:!1},maxModal.prototype.init=function(){this.windowHeight=$(window).height(),this.windowWidth=$(window).width(),$(document).off("click",".maxmodal"),$(document).on("click",".maxmodal",$.proxy(this.buildModal,this)),$(window).on("resize",$.proxy(this.checkResize,this))},maxModal.prototype.focus=function(){this.currentModal.show()},maxModal.prototype.get=function(){return this.currentModal},maxModal.prototype.show=function(){$(".maxmodal_overlay").remove(),$("body").removeClass("max-modal-active"),this.writeOverlay(),this.currentModal.show(),this.setWidth&&this.currentModal.width(this.setWidth),this.setHeight&&this.currentModal.height(this.setHeight),$m=this.currentModal;var t=$m.find(".modal_header").outerHeight(),o=$m.find(".modal_content").outerHeight(),e=$m.find(".modal_content").width(),a=$m.find(".modal_controls").outerHeight(),i=t+o+a,d=e,n=(this.windowHeight-i)/2,s=(this.windowWidth-d)/2;if(n<30&&(n=30),i>this.windowHeight){newHeight=this.windowHeight-n-5,this.currentModal.height(newHeight);var l=newHeight-t-a;$m.find(".modal_content").height(l)}this.currentModal.css("left",s+"px"),this.currentModal.css("top",n+"px"),this.currentModal.css("height",i),$(".maxmodal_overlay").show(),$("body").addClass("max-modal-active"),$(document).off("keydown",$.proxy(this.keyPressHandler,this)),$(document).on("keydown",$.proxy(this.keyPressHandler,this)),this.currentModal.focus()},maxModal.prototype.keyPressHandler=function(t){27===t.keyCode&&this.close()},maxModal.prototype.checkResize=function(){this.windowHeight=$(window).height(),this.windowWidth=$(window).width(),null!==this.currentModal&&(this.currentModal.removeAttr("style"),this.currentModal.find(".modal_content").removeAttr("style"),this.currentModal.removeAttr("style"),this.show())},maxModal.prototype.close=function(){this.currentModal.trigger("modal_close",[this]),this.currentModal.remove(),this.currentModal=null,$(".maxmodal_overlay").remove(),$("body").removeClass("max-modal-active"),$(document).off("keydown",$.proxy(this.keyPressHandler,this))},maxModal.prototype.fadeOut=function(t){void 0==typeof t&&(t=600);var o=this;this.currentModal.fadeOut(t,function(){o.close()})},maxModal.prototype.setTitle=function(t){this.currentModal.find(".modal_title").text(t)},maxModal.prototype.resetControls=function(){this.controls=[]},maxModal.prototype.setControls=function(t){var o=this.currentModal.find(".modal_content"),e=$('<div class="modal_controls controls">');for(i=0;i<this.controls.length;i++)e.append(this.controls[i]);void 0!==t&&e.append(t),o.append(e),$(this.currentModal).find(".modal_close").off("click"),$(this.currentModal).find(".modal_close").on("click",$.proxy(this.close,this))},maxModal.prototype.addControl=function(t,o,e){var a="";switch(t){case"yes":a=modaltext.yes;break;case"ok":a=modaltext.ok;break;case"no":a=modaltext.no;break;case"cancel":a=modaltext.cancel;break;default:a=t,t="custom"}var i=$('<a class="button-primary '+t+'">'+a+"</a>");i.on("click",o,e),this.controls.push(i)},maxModal.prototype.setContent=function(t){this.currentModal.find(".modal_content").html(t)},maxModal.prototype.buildModal=function(t){t.preventDefault();var o=$(t.target);void 0===o.data("modal")&&(o=o.parents(".maxmodal")),this.target=o;var e=o.data("modal"),a=$("#"+e);void 0!==a.data("width")?this.setWidth=a.data("width"):this.setWidth=!1,void 0!==a.data("height")?this.setHeight=a.data("height"):this.setHeight=!1;var i=$(a).find(".title").text(),d=$(a).find(".controls").html(),n=$(a).find(".content").html();if(this.newModal(e),this.setTitle(i),this.setContent(n),this.setControls(d),void 0!==$(a).data("load")){var s=a.data("load")+"(modal)",l=new Function("modal",s);try{l(this)}catch(t){console.log("MB Modal Callback Error: "+t.message),console.log("MB Mobdal tried calling: "+s)}}this.show()},maxModal.prototype.newModal=function(t){null!==this.currentModal&&this.close();var o=$('<div class="max-modal '+t+'" > \t\t\t\t\t\t   <div class="modal_header"> \t\t\t\t\t\t\t   <div class="modal_close dashicons dashicons-no"></div><h3 class="modal_title"></h3> \t\t\t\t\t\t   </div> \t\t\t\t\t\t   <div class="inner modal_content"></div>\t\t\t\t\t   </div>');return $(this.parent).length>0?$(this.parent).append(o):$("body").append(o),$(o).draggable({handle:".modal_header"}),this.modals.push(o),this.currentModal=o,this.controls=[],this},maxModal.prototype.writeOverlay=function(){$(this.parent).append('<div class="maxmodal_overlay"></div>'),$(".maxmodal_overlay").on("click",$.proxy(this.close,this))}});