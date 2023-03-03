



function login(){
	var a=document.getElementById("t1")
	var b=document.getElementById("t2")
	var c=document.getElementById("t3")
	
	if(a.value==""){
		alert("please enter your name")
		a.focus()
	return false
	}
	
	else if(b.value==""){
		alert("please enter your Email")
		b.focus()
	return false
	}
	
	else if(c.value==""){
		alert("please enter your Message")
		c.focus()
	return false
	}

	return true
}