document.addEventListener("DOMContentLoaded", function(){
    var notasAtivo = horasAtivo = countAtivo = 0;
    document.getElementById("button").addEventListener("click", function(){
        horasAtivo = 0;
        chrome.tabs.executeScript({
            file:"app.js"
        })
        
    });
    
    function ativa(elemento){
        elemento.classList.add("ativo");
        var rows = document.querySelectorAll("tr");
        for (let i=0;i<rows.length;i++){
            for (let a=0;a<rows[i].children.length;a++){
                if(rows[i].children[a].classList.contains("ativo")){
                    rows[i].children[0].classList.add("ativo");
                }
            }
        }
    }
    function desativa(elemento){
        elemento.classList.remove("ativo");
        var rows = document.querySelectorAll("tr");
        for (let i=0;i<rows.length;i++){
            if(rows[i].children[1].classList.contains("ativo") || rows[i].children[2].classList.contains("ativo")){
                rows[i].children[0].classList.add("ativo");
            }else{
                rows[i].children[0].classList.remove("ativo");
            }
        }  
    }

    function addSum(button, type){
        var handle = button;
        if(type == "hora"){
            horasAtivo += parseInt(handle.innerHTML);
            document.getElementById("horas").innerHTML = horasAtivo;
        }else if(type == "nota"){
            notasAtivo = notasAtivo + parseFloat(handle.innerHTML);
            countAtivo++;
            document.getElementById("media").innerHTML = parseFloat(notasAtivo/countAtivo).toFixed(2);
        }
    }
    function removeSum(button, type){
        var handle = button;
        if(type == "hora"){
            horasAtivo -= parseInt(handle.innerHTML);
            document.getElementById("horas").innerHTML = horasAtivo;
            if(horasAtivo == 0){
                document.getElementById("horas").innerHTML = "Select Classes";
            }
        }else if(type == "nota"){
            notasAtivo -= parseFloat(handle.innerHTML).toFixed(2);
            countAtivo--;
            document.getElementById("media").innerHTML = parseFloat(notasAtivo/countAtivo).toFixed(2);
            if(countAtivo == 0){
                document.getElementById("media").innerHTML = "Select Grades";
            }
        }
    }


    function checkGrades(request){
        if(request.starter != 0){
            ativa(document.getElementById("starter"));
            ativa(document.getElementById("medStarter"));
            document.getElementById("starter").innerHTML = request.starter;
            document.getElementById("medStarter").innerHTML = request.medStarter.toFixed(2);

        }
        if(request.basic != 0){
            ativa(document.getElementById("basic"));
            ativa(document.getElementById("medBasic"));
            document.getElementById("basic").innerText = request.basic;
            document.getElementById("medBasic").innerText = request.medBasic.toFixed(2);
            
        }
        if(request.inter != 0){
            ativa(document.getElementById("inter"));
            ativa(document.getElementById("medInter"));
            document.getElementById("inter").innerText = request.inter;
            document.getElementById("medInter").innerText = request.medInter.toFixed(2);
  
        }
        if(request.joyy != 0){
            ativa(document.getElementById("joy"));
            ativa(document.getElementById("medJoy"));
            document.getElementById("joy").innerText = request.joyy;
            document.getElementById("medJoy").innerText = request.medJoyy.toFixed(2);

        }
        if(request.advanced != 0){
            ativa(document.getElementById("adv"));
            ativa(document.getElementById("medAdv"));
            document.getElementById("adv").innerText = request.advanced;
            document.getElementById("medAdv").innerText = request.medAdvanced.toFixed(2);
  
        }
        if(request.upper != 0){
            ativa(document.getElementById("upper"));
            ativa(document.getElementById("medUpper"));
            document.getElementById("upper").innerText = request.upper;
            document.getElementById("medUpper").innerText = request.medUpper.toFixed(2);
     
        }
        if(request.upPlus != 0){
            ativa(document.getElementById("plus"));
            ativa(document.getElementById("medPlus"));
            document.getElementById("plus").innerText = request.upPlus;
            document.getElementById("medPlus").innerText = request.medUpPlus.toFixed(2);
     
        }
        if(request.unit != 0){
            ativa(document.getElementById("unit"));
            ativa(document.getElementById("medUnit"));
            document.getElementById("unit").innerText = request.unit;
            document.getElementById("medUnit").innerText = request.medUnit.toFixed(2);
   
        }
    }

    var ativos = document.querySelectorAll("td.button");
    for (let i=0;i<ativos.length;i++){
        ativos[i].addEventListener("click", function(){
           var cList = ativos[i].classList;
           if(cList.contains("ativo") && cList.contains("hora")){
               desativa(ativos[i]);
               removeSum(ativos[i], "hora");
           }else if(cList.contains("ativo") && cList.contains("nota")){
               desativa(ativos[i]);
               removeSum(ativos[i], "nota");
           }else if(!cList.contains("ativo")){
               if(cList.contains("hora")){
                   ativa(ativos[i]);
                   addSum(ativos[i], "hora");
               }else if(cList.contains("nota")){
                   ativa(ativos[i]);
                   addSum(ativos[i], "nota");
               }
           }
        })
    }
        
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
        
        checkGrades(request);        
        
        var buttons = document.getElementsByClassName("button");
        for (var i=0;i<=buttons.length;i++){
            if(buttons[i].classList.contains("ativo")){
                if(buttons[i].classList.contains("hora")){
                    horasAtivo += parseInt(buttons[i].innerHTML);
                    document.getElementById("horas").innerHTML = horasAtivo;
                }else if(buttons[i].classList.contains("nota")){
                    notasAtivo += parseFloat(buttons[i].innerHTML);
                    countAtivo++;
                    document.getElementById("media").innerHTML = (notasAtivo/countAtivo).toFixed(2);
                }
            }
        }
    
    

        sendResponse({status: "Histórico analisado!"});
    })

})
