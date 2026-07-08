fetch('/html/Layout/header.html')
.then(Response => Response.text())
.then(data =>{
    document.getElementById('header').innerHTML = data;
});

fetch('/html/Layout/footer.html')
.then(Response => Response.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});