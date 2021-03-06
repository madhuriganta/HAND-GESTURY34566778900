prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

   camera = document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id=" captured_image" src="'+data_uri+'"/>';  
    });
}

console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fENQs4Lef/model.json' , modalLoaded)

function modalLoaded() {
    console.log(" Model Loaded");
}

function check()
{
   img = document.getElementById('captured_image');
   classifier.classify(img , gotResult);
}

function speak() {
     var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is " + prediction_1;
    speak_data_2 = "the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
     synth.speak(utterThis);
}

function gotResult(error , results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_handges_name").innerHTML = results[0].label;
        document.getElementById("result_handges_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak()
        if(resuts[0].label == "nice")
        {
            document.getElementById("update_handges").innerHTML = "&#128077;";
        }
        if(resuts[0].label == "sad")
        {
            document.getElementById("update_handges").innerHTML = "&#128078;";
        }
        if(resuts[0].label == "angry")
        {
            document.getElementById("update_handges").innerHTML = "&#129304;";
        }

        if(resuts[1].label == "nice")
        {
            document.getElementById("update_handges2").innerHTML = "&#128077;";
        }
        if(resuts[1].label == "sad")
        {
            document.getElementById("update_handges2").innerHTML = "&#128078;";
        }
        if(resuts[1].label == "angry")
        {
            document.getElementById("update_handges2").innerHTML = "&#129304;";
        }

        
    }
}