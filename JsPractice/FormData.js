let fd=document.getElementById("formId");
// console.log(fd);

fd.addEventListener("submit",function(e){
    e.preventDefault();
    let formdata=new FormData(this);
    console.log(formdata);
    fetch('login.php',{
        method:"post",
        body:formdata
    })
    .then((response)=>response.text())
    .then((data)=>console.log(data))
    .catch((e)=>console.log(e))
})


