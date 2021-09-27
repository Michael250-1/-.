function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xcXNKWIpj/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        r=Math.floor(Math.random()* 255) + 1;
        g=Math.floor(Math.random()* 255) + 1;
        b=Math.floor(Math.random()* 255) + 1;

        document.getElementById("resultlabel").innerHTML="I can hear - " + results[0].label;
        document.getElementById("resultconfidence").innerHTML=" Accuracy - " + (results[0].confidence*100).toFixed(2)+"%";

        document.getElementById("resultlabel").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("resultconfidence").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById("Alien1");
        img2=document.getElementById("Alien2");
        img3=document.getElementById("Alien3");
        img4=document.getElementById("Alien4");

        if (results[0].label=="bird"){
          ;
        }
        else if (results[0].label=="phone alarm"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.gif';
            img3.src='aliens-03.png';
            img4.src='aliens-04.png';
        }
        else if (results[0].label=="Michael"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.gif';
            img4.src='aliens-04.png';
        }
        else if (results[0].label=="clap"){
            img1.src='aliens-01.png';
            img2.src='aliens-02.png';
            img3.src='aliens-03.png';
            img4.src='aliens-04.gif';
        }
    }
    
}