const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lamp")

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1};

function lampOn () { 
    if(! isLampBroken ())
    lamp.src = './assents/on.jpg';
}

function lampOff () {
    if(! isLampBroken ())
    lamp.src = './assents/desligada.jpg';

}

function lampBroken () {
    lamp.src = './assents/quebrada.jpg'
}



turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );

    
    

