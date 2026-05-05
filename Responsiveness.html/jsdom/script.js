function submit(){
    console.log("submit button clicked");

    const fn =  document.getElementById("fullname").value;
    console.log(fn);

    document.getElementById("myData").innerText = fn;
    document.getElementById("fullname").value="";
}