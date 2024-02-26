var yu = document.getElementById("yu");
var box_6_9 = document.getElementById("box_6_9");
var la = document.getElementById("la");
let com = "";
yu.onclick =()=> {
	if(!box_6_9.checked){
		box_6_9.click();
		yu.innerHTML = "&check;";
		com = "a";
	} else {
		box_6_9.click();
		yu.innerHTML = "";
		com = "";
		return;
	}
}
la.innerHTML = '<label for="yu">I`m not a robot</label><img height="30" src="log.png">';
setInterval(() => {
	if(!box_6_9.checked){
		return;
		com = "";
	} else {
		com = "a";
	}
});
