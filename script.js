let primeiroTime = "";
let primeiraCor = "";
let segundoTime = "";
let segundaCor = "";
let terceiroTime = "";
let terceiraCor = "";
let quartoTime = "";
let quartaCor = "";
let timeFinal1 = "";
let timeFinal2 = "";
let corFinal1 = "";
let corFinal2 = "";


document.querySelector("#botaoTimes").addEventListener("click", enviarTimes);
function enviarTimes() {

    primeiroTime = document.querySelector("#time1").value;
    document.querySelector("#labelGol1").innerHTML = primeiroTime;
    primeiraCor = document.querySelector("#cor1").value;
    document.querySelector("#labelGol1").style.color = primeiraCor;

    segundoTime = document.querySelector("#time2").value;
    document.querySelector("#labelGol2").innerHTML = segundoTime;
    segundaCor = document.querySelector("#cor2").value;
    document.querySelector("#labelGol2").style.color = segundaCor;

    terceiroTime = document.querySelector("#time3").value;
    document.querySelector("#labelGol3").innerHTML = terceiroTime;
    terceiraCor = document.querySelector("#cor3").value;
    document.querySelector("#labelGol3").style.color = terceiraCor;

    quartoTime = document.querySelector("#time4").value;
    document.querySelector("#labelGol4").innerHTML = quartoTime;
    quartaCor = document.querySelector("#cor4").value;
    document.querySelector("#labelGol4").style.color = quartaCor;

    document.querySelector("#time1").style.color = primeiraCor;
    document.querySelector("#time1").disabled = true;
    document.querySelector("#cor1").disabled = true;

    document.querySelector("#time2").style.color = segundaCor;
    document.querySelector("#time2").disabled = true;
    document.querySelector("#cor2").disabled = true;

    document.querySelector("#time3").style.color = terceiraCor;
    document.querySelector("#time3").disabled = true;
    document.querySelector("#cor3").disabled = true;

    document.querySelector("#time4").style.color = quartaCor;
    document.querySelector("#time4").disabled = true;
    document.querySelector("#cor4").disabled = true;

    document.querySelector("#botaoTimes").disabled = true;

    document.querySelector("#gol1").disabled = false;
    document.querySelector("#gol2").disabled = false;
}

// Primeira partida

document.querySelector("#gol1").addEventListener("change", () => {
    validarGols();
});

document.querySelector("#gol2").addEventListener("change", () => {
    validarGols();
});

function validarGols() {
    let golTime1 = document.querySelector("#gol1").value;
    let golTime2 = document.querySelector("#gol2").value;
    let botaoResultado = document.querySelector("#jogo1");

    if (golTime1 !== "" && golTime2 !== "") {
        botaoResultado.hidden = false;
    }
}


document.querySelector("#jogo1").addEventListener("click", enviarPenalts1);
function enviarPenalts1() {
    golTime1 = document.querySelector("#gol1").value;
    golTime2 = document.querySelector("#gol2").value;
    botaoResultado = document.querySelector("#jogo1");

    if (golTime1 == golTime2) {
        Swal.fire({
            title: "Pênaltis",
            iconHtml: '<img src="./img/penalty1.png" alt="Ícone de pênalti">',
            confirmButtonColor: 'transparent',
            confirmButtonText: '<img src="./img/bola1.png" alt="Ícone de bola">',
            background: 'transparent',
            customClass: {
                title: 'custom-swal-title'
            }
        });
        jogoPenalts1.hidden = false;
        penalts1.hidden = false;
        penalts2.hidden = false;
        vs1.hidden = false;
        gol1.disabled = true;
        gol2.disabled = true;
        botaoResultado.hidden = true;
        document.querySelector("#labelPenalts1").innerHTML = primeiroTime;
        document.querySelector("#cor1").value;
        document.querySelector("#labelPenalts1").style.color = primeiraCor;
        document.querySelector("#labelPenalts2").innerHTML = segundoTime;
        document.querySelector("#cor2").value;
        document.querySelector("#labelPenalts2").style.color = segundaCor;
    } else if (golTime1 > golTime2) {

        document.querySelector("#labelGolFinal1").innerHTML = primeiroTime;
        document.querySelector("#cor1").value;
        document.querySelector("#labelGolFinal1").style.color = primeiraCor;
        gol1.disabled = true;
        gol2.disabled = true;
        botaoResultado.hidden = true;
        document.querySelector("#gol3").disabled = false;
        document.querySelector("#gol4").disabled = false;
        timeFinal1 = primeiroTime;
        corFinal1 = primeiraCor;

    } else {

        document.querySelector("#labelGolFinal1").innerHTML = segundoTime;
        document.querySelector("#cor2").value;
        document.querySelector("#labelGolFinal1").style.color = segundaCor;
        gol1.disabled = true;
        gol2.disabled = true;
        botaoResultado.hidden = true;
        document.querySelector("#gol3").disabled = false;
        document.querySelector("#gol4").disabled = false;
        timeFinal1 = segundoTime;
        corFinal1 = segundaCor;
    }


}
//Penaltis primeira partida

document.querySelector("#jogoPenalts1").addEventListener("click", enviarPenaltsFinal);
function enviarPenaltsFinal() {
    golTime1 = document.querySelector("#penalts1").value;
    golTime2 = document.querySelector("#penalts2").value;
    botaoResultado2 = document.querySelector("#jogoPenalts1");
    if (golTime1 == golTime2) {

        Swal.fire({
            iconHtml: '<img src="./img/apito.png" alt="Ícone de apito">',
            title: 'Atenção',
            text: 'Pênaltis não podem empatar.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });

    } else if (golTime1 > golTime2) {

        timeFinal1 = primeiroTime;
        document.querySelector("#labelGolFinal1").innerHTML = primeiroTime;
        document.querySelector("#cor1").value;
        document.querySelector("#labelGolFinal1").style.color = primeiraCor;
        jogoPenalts1.disabled = true;
        penalts1.disabled = true;
        penalts2.disabled = true;
        document.querySelector("#gol3").disabled = false;
        document.querySelector("#gol4").disabled = false;
        timeFinal1 = primeiroTime;
        corFinal1 = primeiraCor;

    } else {

        timeFinal1 = segundoTime;
        document.querySelector("#labelGolFinal1").innerHTML = segundoTime;
        document.querySelector("#cor2").value;
        document.querySelector("#labelGolFinal1").style.color = segundaCor;
        jogoPenalts1.disabled = true;
        penalts1.disabled = true;
        penalts2.disabled = true;
        document.querySelector("#gol3").disabled = false;
        document.querySelector("#gol4").disabled = false;
        timeFinal1 = segundoTime;
        corFinal1 = segundaCor;

    }

}

//Segunda partida

document.querySelector("#gol3").addEventListener("change", () => {
    validarGols2();
});

document.querySelector("#gol4").addEventListener("change", () => {
    validarGols2();
});

function validarGols2() {
    let golTime3 = document.querySelector("#gol3").value;
    let golTime4 = document.querySelector("#gol4").value;
    let botaoResultado3 = document.querySelector("#jogo2");

    if (golTime3 !== "" && golTime4 !== "") {
        botaoResultado3.hidden = false;
    }
}

document.querySelector("#jogo2").addEventListener("click", enviarPenalts2);
function enviarPenalts2() {
    golTime3 = document.querySelector("#gol3").value;
    golTime4 = document.querySelector("#gol4").value;
    botaoResultado3 = document.querySelector("#jogo2");

    if (golTime3 == golTime4) {
        Swal.fire({
            title: "Pênaltis",
            iconHtml: '<img src="./img/penalty1.png" alt="Ícone de pênalti">',
            confirmButtonColor: 'transparent',
            confirmButtonText: '<img src="./img/bola1.png" alt="Ícone de bola">',
            background: 'transparent',
            customClass: {
                title: 'custom-swal-title'
            }
        });
        jogoPenalts2.hidden = false;
        penalts3.hidden = false;
        penalts4.hidden = false;
        vs2.hidden = false;
        gol3.disabled = true;
        gol4.disabled = true;
        botaoResultado3.hidden = true;
        document.querySelector("#labelPenalts3").innerHTML = terceiroTime;
        document.querySelector("#cor3").value;
        document.querySelector("#labelPenalts3").style.color = terceiraCor;
        document.querySelector("#labelPenalts4").innerHTML = quartoTime;
        document.querySelector("#cor4").value;
        document.querySelector("#labelPenalts4").style.color = quartaCor;

    } else if (golTime3 > golTime4) {

        timeFinal2 = terceiroTime;
        document.querySelector("#labelGolFinal2").innerHTML = terceiroTime;
        document.querySelector("#cor3").value;
        document.querySelector("#labelGolFinal2").style.color = terceiraCor;
        gol3.disabled = true;
        gol4.disabled = true;
        botaoResultado3.hidden = true;
        document.querySelector("#gol5").disabled = false;
        document.querySelector("#gol6").disabled = false;
        timeFinal2 = terceiroTime;
        corFinal2 = terceiraCor;

    } else {

        document.querySelector("#labelGolFinal2").innerHTML = quartoTime;
        document.querySelector("#cor4").value;
        document.querySelector("#labelGolFinal2").style.color = quartaCor;
        gol3.disabled = true;
        gol4.disabled = true;
        botaoResultado3.hidden = true;
        document.querySelector("#gol5").disabled = false;
        document.querySelector("#gol6").disabled = false;
        timeFinal2 = quartoTime;
        corFinal2 = quartaCor;

    }


}

//Penaltis segunda partida

document.querySelector("#jogoPenalts2").addEventListener("click", enviarPenaltsFinal2);
function enviarPenaltsFinal2() {
    golTime3 = document.querySelector("#penalts3").value;
    golTime4 = document.querySelector("#penalts4").value;
    botaoResultado4 = document.querySelector("#jogoPenalts2");
    if (golTime3 == golTime4) {

        Swal.fire({
            iconHtml: '<img src="./img/apito.png" alt="Ícone de apito">',
            title: 'Atenção',
            text: 'Pênaltis não podem empatar.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });

    } else if (golTime3 > golTime4) {

        document.querySelector("#labelGolFinal2").innerHTML = terceiroTime;
        document.querySelector("#cor3").value;
        document.querySelector("#labelGolFinal2").style.color = terceiraCor;
        jogoPenalts2.disabled = true;
        penalts3.disabled = true;
        penalts4.disabled = true;
        document.querySelector("#gol5").disabled = false;
        document.querySelector("#gol6").disabled = false;
        timeFinal2 = terceiroTime;
        corFinal2 = terceiraCor;

    } else {
        document.querySelector("#labelGolFinal2").innerHTML = quartoTime;
        document.querySelector("#cor4").value;
        document.querySelector("#labelGolFinal2").style.color = quartaCor;
        jogoPenalts2.disabled = true;
        penalts3.disabled = true;
        penalts4.disabled = true;
        document.querySelector("#gol5").disabled = false;
        document.querySelector("#gol6").disabled = false;
        timeFinal2 = quartoTime;
        corFinal2 = quartaCor;

    }

}

//Terceira partida

document.querySelector("#gol5").addEventListener("change", () => {
    validarGols3();
});

document.querySelector("#gol6").addEventListener("change", () => {
    validarGols3();
});

function validarGols3() {
    let golTime5 = document.querySelector("#gol5").value;
    let golTime6 = document.querySelector("#gol6").value;
    let botaoResultado5 = document.querySelector("#jogoFinal");

    if (golTime5 !== "" && golTime6 !== "") {
        botaoResultado5.hidden = false;
    }
}


document.querySelector("#jogoFinal").addEventListener("click", enviarPenalts3);
function enviarPenalts3() {
    golTime5 = document.querySelector("#gol5").value;
    golTime6 = document.querySelector("#gol6").value;
    botaoResultado5 = document.querySelector("#jogoFinal");

    if (golTime5 == golTime6) {
        Swal.fire({
            title: "Pênaltis",
            iconHtml: '<img src="./img/penalty1.png" alt="Ícone de pênalti">',
            confirmButtonColor: 'transparent',
            confirmButtonText: '<img src="./img/bola1.png" alt="Ícone de bola">',
            background: 'transparent',
            customClass: {
                title: 'custom-swal-title'
            }
        });
        penaltsFinal.hidden = false;
        penalts5.hidden = false;
        penalts6.hidden = false;
        vsFinal.hidden = false;
        gol5.disabled = true;
        gol6.disabled = true;
        botaoResultado5.hidden = true;
        document.querySelector("#labelPenalts5").innerHTML = timeFinal1;
        document.querySelector("#cor3").value;
        document.querySelector("#labelPenalts5").style.color = corFinal1;
        document.querySelector("#labelPenalts6").innerHTML = timeFinal2;
        document.querySelector("#cor4").value;
        document.querySelector("#labelPenalts6").style.color = corFinal2;
    } else if (golTime5 > golTime6) {

        gol3.disabled = true;
        gol4.disabled = true;
        botaoResultado5.hidden = true;
        Swal.fire({
            iconHtml: '<img src="../img/bandeiraTRP.gif" alt="Ícone de bandeira">',
            title: 'Campeão',
            text: 'O campeão é ' + timeFinal1,
            confirmButtonColor: corFinal2,
            confirmButtonText: 'OK',
            background: corFinal1
        });


    } else {

        gol3.disabled = true;
        gol4.disabled = true;
        botaoResultado3.hidden = true;
        document.querySelector("#gol5").disabled = false;
        document.querySelector("#gol6").disabled = false;
        Swal.fire({
            iconHtml: '<img src="../img/bandeiraTRP.gif" alt="Ícone de bandeira">',
            title: 'Campeão',
            text: 'O campeão é ' + timeFinal2,
            confirmButtonColor: corFinal1,
            confirmButtonText: 'OK',
            background: corFinal2
        });

    }


}

// Penaltis terceira partida

document.querySelector("#penaltsFinal").addEventListener("click", enviarPenaltsFinal3);
function enviarPenaltsFinal3() {
    golTime5 = document.querySelector("#penalts5").value;
    golTime6 = document.querySelector("#penalts6").value;
    botaoResultado6 = document.querySelector("#penaltsFinal");
    if (golTime5 == golTime6) {

        Swal.fire({
            iconHtml: '<img src="./img/apito.png" alt="Ícone de apito">',
            title: 'Atenção',
            text: 'Pênaltis não podem empatar.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
        });

    } else if (golTime5 > golTime6) {
        penaltsFinal.disabled = true;
        penalts5.disabled = true;
        penalts6.disabled = true;

        Swal.fire({
            iconHtml: '<img src="./img/bandeiraTRP.gif" alt="Ícone de bandeira">',
            title: 'Campeão',
            text: 'O campeão é ' + timeFinal1,
            confirmButtonColor: corFinal2,
            confirmButtonText: 'OK',
            background: corFinal1
        }); 1

    } else {

        jogoPenalts2.disabled = true;
        penalts5.disabled = true;
        penalts6.disabled = true;

        Swal.fire({
            iconHtml: '<img src="./img/bandeiraTRP.gif" alt="Ícone de bandeira">',
            title: 'Campeão',
            text: 'O campeão é ' + timeFinal2,
            confirmButtonColor: corFinal1,
            confirmButtonText: 'OK',
            background: corFinal2
        });

    }

}