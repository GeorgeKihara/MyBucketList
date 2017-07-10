function show() {
    //window.open('login.html');
    alert("Welcome to MyBucketList");
    document.getElementById("ent").circleType({radius: 800});
}

function notShow() {
    return [(form1.style.display = 'block'), (form.style.display = 'none')];

}

function blinker()
    {
        if(document.getElementById("new"))
        {
            //var d = document.getElementById("ent");
            var h = document.getElementById("new");
            var top = document.getElementById("top");            
            h.style.color = (h.style.color=='magenta'?'black':'magenta');
            //top.style.background = (top.style.background=='black'?'images/tuk.jpg':'black');
            setTimeout('blinker()', 1000);
        }
        
    }

