window.onload = content;


function content()
{
    
    //  Avak Yeramian
    //
    //  GNU GENERAL PUBLIC LICENSE Version 3
    //
    // The GNU General Public License is a free, copyleft license for software and other kinds of works.

    //  The licenses for most software and other practical works are designed to take away your freedom to share and change the works.
    //  By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.
    //
    
    /* -- useless/20 -- */
    
    var document = window.document;
    var alert = window.alert;
    var screen = window.screen;
    var console = window.console;
    var body = document.body;
    var navigator = window.navigator;
    
    /* -- screen -- */
    
    var screen_w = parseInt(window.innerWidth,10)-5;
    var screen_h = parseInt(window.innerHeight,10)-5;
    window.onresize = updateScreen;
    
    /* -- init dom vars  -- */
    
    var love_div = document.getElementById("i_love");
    var max_heart = 50;

    
    if(window.location.search)
    {
        var search = window.location.search;
        search = search.substr(1);
        var lover = search.toUpperCase();
        while(lover.search("%20")!=-1){
            lover = lover.replace("%20", " ");
        }
        document.title = "I LOVE YOU "+lover;
        
        var lover_declare = document.createElement("h1");
        lover_declare.setAttribute("class","lover_declare");
        lover_declare.innerHTML = "I LOVE YOU "+lover;
        love_div.append(lover_declare);
        
        var copy_btn = document.createElement("button");
        copy_btn.setAttribute("class","copy");
        copy_btn.setAttribute("id","copy");
        copy_btn.innerHTML = "Copy the link !";
        copy_btn.onclick = copyUrl;
        love_div.append(copy_btn);
        
        setInterval(function(){heart();}, 100);
        
            
    }else{
        var lover_declare = document.createElement("h1");
        lover_declare.setAttribute("class","lover_declare");
        lover_declare.innerHTML = "Declare your love";
        love_div.append(lover_declare);
        
        var div_add = document.createElement("div");
        div_add.setAttribute("class","lover_input");
        love_div.append(div_add);
        
        var lover_input = document.createElement("input");
        lover_input.setAttribute("type","text");
        lover_input.setAttribute("placeholder","Add your lover");
        lover_input.setAttribute("maxlength","22");
        lover_input.setAttribute("size","28");
        lover_input.setAttribute("class","lover_input");
        lover_input.onkeyup = function(event){
        if (event.key === "Enter") {
            var lolo = event.target.value
            if(lolo!=""){
                window.location.replace(window.location.href+"?"+lolo);
            }
        }
        };
        div_add.append(lover_input);
        
        var boutton_add = document.createElement("button");
        boutton_add.innerHTML = "❤️";
        boutton_add.onclick = function(event){
            var lolo = event.target.parentElement.firstChild.value;
            if(lolo!=""){
                window.location.replace(window.location.href+"?"+lolo);
            }
        }
        div_add.append(boutton_add);
    }
    
    function updateScreen(){
        screen_w = parseInt(window.innerWidth,10)-5;
        screen_h = parseInt(window.innerHeight,10)-5;
    }
    
    function heart(){
        if(max_heart>0){
            max_heart = max_heart - 1;
            var pos_w = Math.floor(Math.random() * screen_w);
            var pos_h = Math.floor(Math.random() * screen_h);
            var heart = document.createElement("div");
            heart.setAttribute("class","heart");
            heart.style.top = pos_h + "px";
            heart.style.left = pos_w + "px";
            heart.innerHTML = "❤️";
            heart.style.fontSize = "1px";
            love_div.append(heart);
            zoom(heart);
        }
    }
    
    function zoom(e){
        var size = 1;
        var action = "zoom";
        var id = setInterval(frame, 10);
        function frame() {
            if(action=="zoom" && size<50){
                size++;
                e.style.marginTop = "-"+size/2+"px";
                e.style.marginLeft = "-"+size/2+"px";
                e.style.fontSize = size+"px";
            }else if(action=="unzoom" && size>1){
                size--;
                e.style.marginTop = "-"+size/2+"px";
                e.style.marginLeft = "-"+size/2+"px";
                e.style.fontSize = size+"px";
            }else if (size == 1 && action == "unzoom") {
                clearInterval(id);
                max_heart = max_heart + 1;
                e.remove();
            }else if (size == 50){
                action = "unzoom";
            }
        }
    }
    
    function copyUrl(e) {
        var textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        textArea.style.left = "10000px";
        textArea.style.position = "absolute";
        love_div.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        love_div.removeChild(textArea);
        document.getElementById("copy").innerHTML = "Copied !";
    }
        
}