window.addEventListener ("load", main, false);
function main (evt) {
	if(!document.body.innerHTML.includes("Errore")) {
		if(document.querySelector("#login") && document.querySelector("#password"))
			chrome.storage.sync.get({
		    code: '',
		    password: ''
		  }, function(items) {
				if(items.code != "" && items.password != "") {
		    	document.querySelector("#login").value= items.code;
			   	document.querySelector("#password").value = items.password;

					if(document.querySelector("#RESTA_CONNESSO"))
						document.querySelector("#RESTA_CONNESSO").click();

					if(document.querySelector("#auth-polimi > form > button"))
						document.querySelector("#auth-polimi > form > button").click();
				}
		  });

		if(document.querySelector("#jafBodyContainer > table.TablePage > tbody > tr > td.CenterBar > a:nth-child(3)"))
			document.querySelector("#jafBodyContainer > table.TablePage > tbody > tr > td.CenterBar > a:nth-child(3)").click();
	}
}
