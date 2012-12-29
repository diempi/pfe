var Debugger = function(){};
Debugger.log = function(message){ /*declaration de la methode*/
/*Utilisation de la methode: Debugger.log("monmessage");*/
        try
        {
            console.log(message);
        }catch(exception)
        {
            alert(message);
        }
    };
var monSon = new Audio();
monSon.src = "media/space.wav";
//monSon.play();
var volMonSon= monSon.volume;
var duree = monSon.duration;
function joue(e)
{
    monSon.play();    
    if
}

function pause(e)
{
    monSon.pause();
}

function stop(e)
{
    monSon.pause();
    monSon.currentTime=0;
}

function augmenter(e)
{
    if(monSon.volume > 1)
    {
        monSon.volume = 1;
    }
    else
    {
        monSon.volume += 0.1;
    }
}

function diminuer(e)
{
    if(monSon.volume < 0)
    {
        monSon.volume = 0.1;
    }
    else
    {
        monSon.volume -= 0.1;
    }
}

// duration/currentTime: position de la barre de defilement

// On recupere les boutons et on affecte une action
var btnPlay = document.getElementById('play');
btnPlay.addEventListener('click',joue);
var btnPause = document.getElementById('pause');
btnPause.addEventListener('click',pause);
var btnStop = document.getElementById('stop');
btnStop.addEventListener('click',stop);
var btnAug = document.getElementById('hi');
btnAug.addEventListener('click',augmenter);
var btnDim = document.getElementById('lo');
btnDim.addEventListener('click',diminuer);
var duration = monSon.duration;
/* CANVAS*/
    
    function canvasSupport()
    {
        return Modernizr.canvas; /* Modernizr teste le navigateur pour voir s'il supporte Canvas */
    }
    
    function canvasApp()
    {
        if(!canvasSupport())
        {
            return;
        }
        var MonCanvas = document.createElement('canvas');
        var container = document.getElementById('player');
        container.appendChild(MonCanvas);
        ctx = MonCanvas.getContext('2d');
        
        
    var currentTime = monSon.currentTime,
    progression = (currentTime / duree)*MonCanvas.width,
    defbar,
    bW = MonCanvas.width - 8,
    bH = MonCanvas.height + 8,
    timer = setInterval(env, 30),
    XBar = 0;
            
        //On dessine le canvas
        function env()
        {
            Debugger.log(duree);
            XBar = XBar + progression;
             drawScreen();
        }
       
        
        function drawScreen()
        {
            
            // Initiatlisation de l'interface de Canvas
            ctx.fillStyle = "#000000";
            ctx.fillRect(-10,0,MonCanvas.width,MonCanvas.height,true);          
            
            //Initialisation de la barre de defilement
            ctx.beginPath();
            ctx.fillStyle = "#fff555";
            ctx.closePath();
            ctx.fillRect(XBar,10,5,bH);
        }
        
    }
    canvasApp();


