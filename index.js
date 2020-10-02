window.onload = () => {
    function set_status(text) {
        if (typeof(text) !== "string") text = "the <span>.ml</span> stands for ...";
        document.getElementById("portrait_title").innerHTML = text;
    }

    document.getElementById("top").onmouseenter = () => {
        set_status("machine learning");
    };

    document.getElementById("top").onmouseleave = set_status;

    document.getElementById("top").onclick = () => {
        window.location.href = 'https://hire.kwkt.ml';
    };

    document.getElementById("bot").onmouseenter = () => {
        set_status("[expletive]");
    };

    document.getElementById("bot").onmouseleave = set_status;
    
    document.getElementById("bot").onclick = () => {
        window.location.href = 'https://hear.kwkt.ml';
    };
}