const FRASES1 = ['People like you always want back The love they gave away',"'Cause the players gonna play, play, play, play, play And the haters gonna hate, hate, hate, hate, hate",'It was the best of times, the worst of crimes I struck a match and blew your mind'];
const FRASES2 = ["My name is whatever you decide And I'm just gonna call you mine I'm insane, but I'm your baby","Candle wax and Polaroids on the hardwood floor You and me from the night before, but dont read the last page","I should not be left to my own devices They come with prices and vices I end up in crisis"];  
const FRASES3 = ["Hey, all you had to do was stay Had me in the palm of your hand, then Why'd you have to go and lock me out when I let you in?","Nice to meet you, where you been? I could show you incredible things Magic, madness, heaven, sin","For you, I would cross the line I would waste my time I would lose my mind They say, She's gone too far this time"];
const FRASES4 = ["We're all bored, we're all so tired of everything We wait for trains that just aren't coming We show off our different scarlet letters Trust me, mine is better","Everything you lose is a step you take So, make the friendship bracelets, take the moment and taste it You've got no reason to be afraid","I have this thing where I get older, but just never wiser Midnights become my afternoons When my depression works the graveyard shift, all of the people I've ghosted stand there in the room"];
const FRASES5 = ['Your Midas touch on the Chevy door, November flush and your flannel cure',"How's one to know? I'd meet you where the spirit meets the bones","Whether weather be the frost Or the violence of the dog days I'm on waves, out being tossed Is there a line that I could just go cross?","Is it romantic how all my elegies eulogize me? I'm not cut out for all these cynical clones These hunters with cell phones"];
const NIVELES = [FRASES1,FRASES2,FRASES3,FRASES4,FRASES5];
let FRASES = ['','',''];
let palabras = [];
let palabraIndice =0;
let startTime= Date.now();
const frase= document.getElementById ('frase');
const tipeado = document.getElementById('texto-tipeado');
const messageElement = document.getElementById('message');
const JUEGO = document.getElementById('juego');
const DIFERROR = document.getElementById('diferror');
const ELECDIF = document.getElementById('elecciondif');
JUEGO.style.display='none';
DIFERROR.style.display='none';


document.getElementById('introdif').addEventListener('click', ()=>{
    const DIFICULTAD = document.getElementById('dificultad').value;
    let niveldedif = 0;
    if(DIFICULTAD<1 || DIFICULTAD>5){
    DIFERROR.style.display='block';
    }
    else{
        ELECDIF.style.display='none';
        DIFERROR.style.display='none';
        JUEGO.style.display='block';
        niveldedif=DIFICULTAD-1;
        let ejecucion = NIVELES[niveldedif];
        console.log(ejecucion);
        let i;
        for (i=0 ; i<ejecucion.length; i++){
            FRASES[i]=ejecucion[i];
        } 
        console.log(FRASES + 'este es frases');    
    }
    
})

document.getElementById('inicio').addEventListener('click', () =>{
    const TEXTOindice= Math.floor(Math.random()*FRASES.length);
    const texto = FRASES[TEXTOindice];
    palabras = texto.split(' ');
    console.log(palabras);
    palabraIndice = 0;
    const spanPalabras = palabras.map(function(palabras) { return `<span>${palabras} </span>`});
    frase.innerHTML = spanPalabras.join('');
    frase.childNodes[0].className = 'highlight';
    messageElement.innerText='';
    tipeado.value=''; 
    tipeado.focus();    
    startTime = new Date().getTime();

}) 

tipeado.addEventListener('input', ()=>{
    const currentWord = palabras[palabraIndice];
    const typedValue = tipeado.value;
    if (typedValue === currentWord && palabraIndice === palabras.length - 1){
        const elapsedTime = new Date().getTime() - startTime;
        const message = `Felicitaciones. Finalizaste en ${elapsedTime/1000} segundos`;
        messageElement.innerText = message;
    } else if(typedValue.endsWith(' ') && typedValue.trim() === currentWord){
        tipeado.value='';
        palabraIndice++;
        for(const palabraElement of frase.childNodes){
            palabraElement.className = '';
            
        }
        frase.childNodes[palabraIndice].className ='highlight';
    } else if(currentWord.startsWith(typedValue)){
        tipeado.className = '';
    } else{
        tipeado.className='error';
    }
});
