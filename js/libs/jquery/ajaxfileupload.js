$.extend({createUploadIframe:function(a,b){var c="jUploadFrame"+a,d='<iframe id="'+c+'" name="'+c+'" style="position:absolute; top:-9999px; left:-9999px"';return window.ActiveXObject&&("boolean"==typeof b?d+=' src="javascript:false"':"string"==typeof b&&(d+=' src="'+b+'"')),d+=" />",jQuery(d).appendTo(document.body),jQuery("#"+c).get(0)},createUploadForm:function(a,b,c){var d="jUploadForm"+a,e="jUploadFile"+a,f=jQuery('<form  action="" method="POST" name="'+d+'" id="'+d+'" enctype="multipart/form-data"></form>');if(c)for(var g in c)jQuery('<input type="hidden" name="'+g+'" value="'+c[g]+'" />').appendTo(f);var h=jQuery("#"+b),i=jQuery(h).clone();return jQuery(h).attr("id",e),jQuery(h).before(i),jQuery(h).appendTo(f),jQuery(f).css("position","absolute"),jQuery(f).css("top","-1200px"),jQuery(f).css("left","-1200px"),jQuery(f).appendTo("body"),f},ajaxFileUpload:function(a){a=jQuery.extend({},jQuery.ajaxSettings,a);var b=(new Date).getTime(),c=jQuery.createUploadForm(b,a.fileElementId,"undefined"==typeof a.data?!1:a.data),e=(jQuery.createUploadIframe(b,a.secureuri),"jUploadFrame"+b),f="jUploadForm"+b;a.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");var g=!1,h={};a.global&&jQuery.event.trigger("ajaxSend",[h,a]);var i=function(b){var d=document.getElementById(e);try{d.contentWindow?(h.responseText=d.contentWindow.document.body?d.contentWindow.document.body.innerHTML:null,h.responseXML=d.contentWindow.document.XMLDocument?d.contentWindow.document.XMLDocument:d.contentWindow.document):d.contentDocument&&(h.responseText=d.contentDocument.document.body?d.contentDocument.document.body.innerHTML:null,h.responseXML=d.contentDocument.document.XMLDocument?d.contentDocument.document.XMLDocument:d.contentDocument.document)}catch(f){jQuery.handleError(a,h,null,f)}if(h||"timeout"==b){g=!0;var i;try{if(i="timeout"!=b?"success":"error","error"!=i){var j=jQuery.uploadHttpData(h,a.dataType);a.success&&a.success(j,i),a.global&&jQuery.event.trigger("ajaxSuccess",[h,a])}else jQuery.handleError(a,h,i)}catch(f){i="error",jQuery.handleError(a,h,i,f)}a.global&&jQuery.event.trigger("ajaxComplete",[h,a]),a.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop"),a.complete&&a.complete(h,i),jQuery(d).unbind(),setTimeout(function(){try{jQuery(d).remove(),jQuery(c).remove()}catch(b){jQuery.handleError(a,h,null,b)}},100),h=null}};a.timeout>0&&setTimeout(function(){g||i("timeout")},a.timeout);try{var c=jQuery("#"+f);jQuery(c).attr("action",a.url),jQuery(c).attr("method","POST"),jQuery(c).attr("target",e),c.encoding?jQuery(c).attr("encoding","multipart/form-data"):jQuery(c).attr("enctype","multipart/form-data"),jQuery(c).submit()}catch(j){jQuery.handleError(a,h,null,j)}return jQuery("#"+e).load(i),{abort:function(){}}},handleError:function(a,b,c,d){a.error&&a.error.call(a.context||a,b,c,d),a.global&&(a.context?jQuery(a.context):jQuery.event).trigger("ajaxError",[b,a,d])},uploadHttpData:function(r,type){var data=!type;return data="xml"==type||data?r.responseXML:r.responseText,"script"==type&&jQuery.globalEval(data),"json"==type&&eval("data = "+data),"html"==type&&jQuery("<div>").html(data).evalScripts(),data}});