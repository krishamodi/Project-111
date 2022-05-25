prediction_1="";

Webcam.set ({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9cHJmhcD4/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data_1 ="The first prediction is"+prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}