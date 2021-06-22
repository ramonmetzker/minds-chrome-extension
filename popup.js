document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("button").addEventListener("click", function(){
        chrome.tabs.executeScript({
            file:"app.js"
        })
    })

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        console.log(request);
        if(request.starter != 0){
            document.getElementById("starter").innerText = request.starter;
            document.getElementById("medStarter").innerText = request.medStarter.toFixed(2);
        }
        if(request.basic != 0){
            document.getElementById("basic").innerText = request.basic;
            document.getElementById("medBasic").innerText = request.medBasic.toFixed(2);
        }
        if(request.inter != 0){
            document.getElementById("inter").innerText = request.inter;
            document.getElementById("medInter").innerText = request.medInter.toFixed(2);
        }
        if(request.joyy != 0){
            document.getElementById("joy").innerText = request.joyy;
            document.getElementById("medJoy").innerText = request.medJoyy.toFixed(2);
        }
        if(request.advanced != 0){
            document.getElementById("adv").innerText = request.advanced;
            document.getElementById("medAdv").innerText = request.medAdvanced.toFixed(2);
        }
        if(request.upper != 0){
            document.getElementById("upper").innerText = request.upper;
            document.getElementById("medUpper").innerText = request.medUpper.toFixed(2);
        }
        if(request.upPlus != 0){
            document.getElementById("plus").innerText = request.upPlus;
            document.getElementById("medPlus").innerText = request.medUpPlus.toFixed(2);
        }
        if(request.unit != 0){
            document.getElementById("unit").innerText = request.unit;
            document.getElementById("medUnit").innerText = request.medUnit.toFixed(2);
        }
        document.getElementById("horas").innerText = request.total;
        document.getElementById('media').innerText = request.media;

        sendResponse({status: "Histórico analisado!"});
    })
})
