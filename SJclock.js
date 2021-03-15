const clockContainet = document.querySelector(".js-clock"),
    clocktitle = document.querySelector("h3");

    function getTime(){
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        clocktitle.innerText =  `${hours}:${minutes}`;
    };

    const clockStyle = document.querySelector("h1");

    const magicHand = {
        handleMouseOver: function(){
            clocktitle.style.color = "#34495e";
        },
        handleMouseLeave: function(){
            clocktitle.style.color = "white";
        }
    }

    clocktitle.addEventListener("mouseover", magicHand.handleMouseOver);
    clocktitle.addEventListener("mouseleave", magicHand.handleMouseLeave);

    
    function init(){
        getTime();
        setInterval(getTime,1000);
    }
    init();