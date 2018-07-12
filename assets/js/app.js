var lp = {
	datas:{
		gurl: "https://script.google.com/macros/s/AKfycbzODJAIzzM-nvybwWpsmaeVmUfkeVZF3ncOKuq4jGbOBX9-Vxk/exec",
		forms: document.forms
	},
	init:function(){
		this.form.init();
	},
	form:{
		init: function(){
			var forms = lp.datas.forms;
			lp.loop(forms,lp.form.check,'click');
		},
		check: function(arr){
			console.log(this);
		}
	},
	loop: function(arr,callback,event,byname){
		var newarr = [];
		if(!lp.isnull(byname)){
			for(var name in arr){
				if(!lp.isnull(event)) arr[name].addEventListener(event, callback);
				else{ newarr[name] = arr[name]; callback(newarr); }
			}
		}else{
			for(var i=0, len = arr.length; i < len; i++){
				if(!lp.isnull(event)){ arr[i].addEventListener(event, callback); }
				else{ newarr.push(arr[i]); callback(newarr); newarr = []; }
			}
		}
		
	},
	isnull: function(el){
		return !(typeof el !=="undefined" && el!==null && el!=="");
	}
}
lp.init();