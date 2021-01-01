/* en réalité il faut utiliser des librairies pour être plus efficace, celle d'AOS Animation est très bien.
Mais il faut quand même déclarer à quelle moment (scroll) l'animation se fait*/

const imgImprovise = document.getElementById('img-improvise');
const popup = document.getElementById('pop-up');
let playOnce = true;

window.addEventListener('scroll', function(){

    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);

    console.log(scrollValue);
    //faire apparaître l'image
    if (scrollValue > 0.45){
        imgImprovise.style.opacity = '1';
        imgImprovise.style.transform = 'none';
    };

    //faire apparaître pop-up
    function playFunctionOnce(){

        if (scrollValue > 0.90 && playOnce){
            this.setTimeout(() => {
                popup.style.opacity = '1';
                popup.style.transform = 'none';
            }, 500);
            playOnce = false;
        };
    };
    playFunctionOnce();
})

document.getElementById('close').addEventListener('click', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(500px)';
})

