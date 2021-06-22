document.addEventListener("DOMContentLoaded", function(){
    var mediaGeral = horasGeral = contagem = 0;

    document.getElementById("button").addEventListener("click", function(){
        chrome.tabs.executeScript({
            file:"app.js"
        })
    });
    buttonsHora = document.getElementsByClassName("hora");
    buttonsNota = document.getElementsByClassName("nota");

    for (let i=0;i<buttonsHora.length;i++){
        buttonsHora[i].addEventListener("click", function(){
            if(this.classList.contains("ativo")){
                this.classList.remove("ativo");
            }else{
                this.classList.add("ativo");
            }
        })
    }
    for (let i=0;i<buttonsNota.length;i++){
        buttonsNota[i].addEventListener("click", function(){
            if(this.classList.contains("ativo")){
                this.classList.remove("ativo");
            }else{
                this.classList.add("ativo");
            }
        })
    }

    function checkGrades(request){
        if(request.starter != 0){
            document.getElementById("starter").innerText = request.starter;
            document.getElementById("medStarter").innerText = request.medStarter.toFixed(2);
            mediaGeral += request.medStarter;
            horasGeral += request.starter;
            contagem++;
        }
        if(request.basic != 0){
            document.getElementById("basic").innerText = request.basic;
            document.getElementById("medBasic").innerText = request.medBasic.toFixed(2);
            mediaGeral += request.medBasic;
            horasGeral += request.basic;
            contagem++;
        }
        if(request.inter != 0){
            document.getElementById("inter").innerText = request.inter;
            document.getElementById("medInter").innerText = request.medInter.toFixed(2);
            mediaGeral += request.medInter;
            horasGeral += request.inter;
            contagem++;
        }
        if(request.joyy != 0){
            document.getElementById("joy").innerText = request.joyy;
            document.getElementById("medJoy").innerText = request.medJoyy.toFixed(2);
            mediaGeral += request.medJoyy;
            horasGeral += request.joyy;
            contagem++
        }
        if(request.advanced != 0){
            document.getElementById("adv").innerText = request.advanced;
            document.getElementById("medAdv").innerText = request.medAdvanced.toFixed(2);
            mediaGeral += request.medAdvanced;
            horasGeral += request.advanced;
            contagem++;
        }
        if(request.upper != 0){
            document.getElementById("upper").innerText = request.upper;
            document.getElementById("medUpper").innerText = request.medUpper.toFixed(2);
            mediaGeral += request.medUpper;
            horasGeral += request.upper;
            contagem++;
        }
        if(request.upPlus != 0){
            document.getElementById("plus").innerText = request.upPlus;
            document.getElementById("medPlus").innerText = request.medUpPlus.toFixed(2);
            mediaGeral += request.medUpPlus;
            horasGeral += request.upPlus;
            contagem++;
        }
        if(request.unit != 0){
            document.getElementById("unit").innerText = request.unit;
            document.getElementById("medUnit").innerText = request.medUnit.toFixed(2);
            mediaGeral += request.medUnit;
            horasGeral += request.unit;
        }
    }

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        
        checkGrades(request);

        document.getElementById("media").innerHTML = mediaGeral;
        document.getElementById("horas").innerHTML = horasGeral;
        sendResponse({status: "Histórico analisado!"});
    })

})
