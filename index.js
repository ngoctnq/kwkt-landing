target = "";
del_ = false;
count = 0;

window.onload = () => {
    chooser = document.getElementById("choose");

    function set_target(text) {
        if (chooser.innerHTML !== text) {
            target = text;
            del_ = true;
        }
    }

    top_elem = document.getElementById("top");
    bot_elem = document.getElementById("bot");

    particles = document.getElementById("particles");
    hear_vid = document.getElementById("pink");
    over_vid = document.getElementById("overlayer");

    function set_default() {
        particlesJS("particles",{particles:{number:{value:6,density:{enable:!0,value_area:800}},color:{value:"#1b1e34"},shape:{type:"polygon",stroke:{width:0,color:"#000"},polygon:{nb_sides:6}},opacity:{value:.3,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:160,random:!1,anim:{enable:!0,speed:10,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});
        particles.style["background-color"] = "#2c2e43";
        particles.style.visibility = "visible";
        hear_vid.style.visibility = "hidden";
        overlayer.style.visibility = "hidden";
    }
    set_default();

    function blur(elem, reset) {
        elem.style.filter = (reset ? "none" : "saturate(50%) blur(4px) grayscale(30%) brightness(60%)");
    }

    top_elem.onmouseenter = () => {
        set_target("resume and stuff");
        blur(bot_elem);
        particlesJS("particles",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0});
        particles.style["background-color"] = "#313131";
        particles.style.visibility = "visible";
        overlayer.style.visibility = "visible";
    };

    top_elem.onmouseleave = () => {
        set_target("Pick one.");
        blur(bot_elem, true);
        set_default();
    }

    top_elem.onclick = () => {
        window.location.href = 'https://hire.kwkt.ml';
    };

    bot_elem.onmouseenter = () => {
        set_target("in-your-face music");
        blur(top_elem);
        particles.style.visibility = "hidden";
        hear_vid.style.visibility = "visible";
        overlayer.style.visibility = "visible";
    };

    bot_elem.onmouseleave = () => {
        set_target("Pick one.");
        blur(top_elem, true);
        set_default();
    }

    bot_elem.onclick = () => {
        window.location.href = 'https://hear.kwkt.ml';
    };

    kawaii = document.getElementById("kawaii");
    dot_cycle = 30;
    (async () => {
        while (1) {
            await new Promise(resolve => setTimeout(resolve, 50));
            if (count % dot_cycle == 0) {
                kawaii.innerHTML = kawaii.innerHTML.substr(0, 6) + '.'.repeat(count / dot_cycle)
            };
            count = (count + 1) % (dot_cycle * 4);

            if (del_) {
                if (chooser.innerHTML.length > 0) {
                    chooser.innerHTML = chooser.innerHTML.substr(0, chooser.innerHTML.length - 1);
                    continue;
                } else del_ = false;
            } else if (target.length == 0) continue;
            chooser.innerHTML = chooser.innerHTML + target.substr(0, 1);
            target = target.substr(1);
        }
    })();
}