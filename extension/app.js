var int = 0, joy = 0, bas = 0, sta = 0, adv = 0, up = 0, plus = 0, unt = 0, untRev = 0;
var medSta = 0, medBas = 0, medInt = 0, medJoy = 0, medAdv = 0, medUp = 0; medPlus = 0; medUnt = 0; average = 0;
var lista = document.getElementById("listaHistoricoPedagogico");
for (let i = 0, row; row = lista.rows[i]; i++){
	var col = row.cells;
	var aula = lista.rows[i].cells[2].children[0].innerHTML;
	var status = lista.rows[i].cells[5].children[0].innerText;
	var nota = parseFloat(lista.rows[i].cells[7].innerText);
	switch (aula){
		case "STARTER":
			if(status == "APROVADO"){
				sta++;
				medSta += nota;
			}
			break;
		case "BASIC CONVERSATION":
			if(status == "APROVADO"){
				bas++;
				medBas += nota;
			}
		break;
		case "INTERMEDIATE CONVERSATION":
			if(status == "APROVADO"){
				int++;
				medInt += nota;
			}
		break;
		case "JOY CONVERSATION":
			if(status == "APROVADO"){
				joy++;
				medJoy += nota;
			}
		break;
		case "ADVANCED CONVERSATION":
			if(status == "APROVADO"){
				adv++;
				medAdv += nota;
			}
		break;
		case "UPPER":
			if(status == "APROVADO"){
				up++;
				medUp += nota;
			}
		break;
		case "UP PLUS":
			if(status == "APROVADO"){
				plus++;
				medPlus += nota;
			}
		break;
	}
	if(aula.startsWith("UNIT")){
		
		if(status == "APROVADO"){
			if(aula.startsWith("UNIT 01")){
				unt++;
				nota = parseFloat(lista.rows[i].cells[7].innerText);
				medUnt += nota;
			}else{
				unt++;
				notaUnits = lista.rows[i].cells[7].innerHTML.split("|");
				nota = parseFloat(notaUnits[0])+parseFloat(notaUnits[1])+parseFloat(notaUnits[2]);
				medUnt += nota;
			}
		}else if(status == "REPROVADO"){
			if(nota != 0){
				untRev++;
			}
		}
	}
}
var avgStarter = medSta/sta;
var avgBasic = medBas/bas;
var avgInter = medInt/int;
var avgJoy = medJoy/joy;
var avgAdvanced = medAdv/adv;
var avgUpper = medUp/up;
var avgPlus = medPlus/plus;
var avgUnit = medUnt/unt;

var horas = unt+untRev+sta+bas+int+joy+adv+(up*2)+(plus*2);

chrome.runtime.sendMessage({
	starter: sta,
	medStarter: avgStarter,
	basic: bas,
	medBasic: avgBasic,
	inter: int,
	medInter: avgInter,
	joyy: joy,
	medJoyy: avgJoy,
	advanced: adv,
	medAdvanced: avgAdvanced,
	upper: up,
	medUpper: avgUpper,
	upPlus: plus,
	medUpPlus: avgPlus,
	unit: unt+untRev,
	medUnit: avgUnit,
}, function(response){
	console.log(response.status);
})