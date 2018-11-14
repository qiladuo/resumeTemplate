window.onload = function () {
    var oNavHid = document.getElementById('navBtn');
    // var oNavHid = document.getElementById('nav_hidden');
    var oNavShr = document.getElementById('navShr');

    oNavHid.onclick=function () {
        oNavShr.style.display='block';
        oNavHid.style.background='url("images/nav.jpg") no-repeat';
    }

}