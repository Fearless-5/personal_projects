var yu = document.getElementById("yu");
var box_6_9 = document.getElementById("box_6_9");
var la = document.getElementById("la");
let rei = "";
yu.onclick =()=> {
	if(!box_6_9.checked){
		box_6_9.click();
		yu.innerHTML = "&check;";
		rei = "a";
	} else {
		box_6_9.click();
		yu.innerHTML = "";
		rei = "";
		return;
	}
}
la.innerHTML = '<label for="yu">I`m not a robot</label>';
setInterval(() => {
	if(!box_6_9.checked){
		return;
		rei = "";
	} else {
		rei = "a";
	}
});
