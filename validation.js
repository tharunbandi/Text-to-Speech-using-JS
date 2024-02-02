let textele=document.getElementById("text")
let voiceLists=document.getElementById("voiceList")
let speaks=document.getElementById("speak")
 
 
 
let speechSynth=speechSynthesis
 
speechSynth.addEventListener("voiceschanged",loadvoices)
 
function loadvoices(){
    let voices=speechSynth.getVoices()
    for(voice of voices)
    {
     
        let option=document.createElement("option")
        option.value=voice.name;
        option.innerText=`${voice.name} ${voice.lang}`
        voiceLists.appendChild(option)
       
    }
}
function textToSpeech(text){
    let uttarance=new SpeechSynthesisUtterance(text)
    for(let voice of speechSynth.getVoices()){
        if(voice.name==voiceLists.value)
        {
            uttarance.voice=voice
        }
    }
    speechSynth.speak(uttarance)
   
}
 
speaks.addEventListener("click",function(){
    if(!textele.value=="")
    {
        if(!speechSynth.speaking){
            textToSpeech(textele.value);
        }
        else
        {
            alert("Text should not be Empty")
        }
    }
})