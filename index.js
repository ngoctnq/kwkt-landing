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
    
    function blur(elem, reset) {
        elem.style.filter = (reset ? "none" : "saturate(50%) blur(4px) grayscale(30%) brightness(60%)");
    }

    top_elem.onmouseenter = () => {
        set_target("resume and stuff");
        blur(bot_elem);
        
        // top_elem.style["border-image-source"] = "linear-gradient(to left, #743ad5, #d53a9d)";
        // bot_elem.style["border-image-source"] = "none";
    };

    top_elem.onmouseleave = () => {
        set_target("Pick one.");
        blur(bot_elem, true);
    }

    top_elem.onclick = () => {
        window.location.href = 'https://hire.kwkt.ml';
    };

    bot_elem.onmouseenter = () => {
        set_target("in-your-face music");
        blur(top_elem);

        // top_elem.style["border-image-source"] = "none";
        // bot_elem.style["border-image-source"] = "linear-gradient(to left, #743ad5, #d53a9d)";
    };

    bot_elem.onmouseleave = () => {
        set_target("Pick one.");
        blur(top_elem, true);
    }
    
    bot_elem.onclick = () => {
        window.location.href = 'https://hear.kwkt.ml';
    };

    kawaii = document.getElementById("kawaii");
    dot_cycle = 30;
    (async () => { while (1) {
        await new Promise(resolve => setTimeout(resolve, 50));
        if (count % dot_cycle == 0) {
            kawaii.innerHTML = kawaii.innerHTML.substr(0, 6) + '.'.repeat(count / dot_cycle)};
        count = (count + 1) % (dot_cycle * 4);

        if (del_) {
            if (chooser.innerHTML.length > 0) {
                chooser.innerHTML = chooser.innerHTML.substr(0, chooser.innerHTML.length - 1);
                continue;
            }
            else del_ = false;
        }
        else if (target.length == 0) continue;
        chooser.innerHTML = chooser.innerHTML + target.substr(0, 1);
        target = target.substr(1);
    }})();
}