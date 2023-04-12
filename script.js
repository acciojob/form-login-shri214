function getFormvalue() {
    //Write your code here
	let fname = document.querySelector("input[name='fname']");
	let lname = document.querySelector("input[name='lname']");
	let str=fname.value+" "+lname.value;
  alert(str);

}
