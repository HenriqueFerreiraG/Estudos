function calculos(){
/*=========================== cmc IMC =================================*/
var genero = prompt('seu sexo é masculino ou feminino?')

var idade = parseFloat(prompt('Digite sua idade'))

var peso =parseFloat(prompt('Digite o seu peso(kg)'))

var altura = parseFloat(prompt('Digite sua altura(m)'))

var quadril = parseFloat(prompt('Digite a sua circuferencia de quadril(cm)'))

var cintura = parseFloat(prompt('Digite a sua circuferencia de cintura(cm)'))

var coxa = parseFloat(prompt('Gordura Subcutânea na região da Coxa'))

var supralica = parseFloat(prompt('Gordura Subcutânea na região Supralica'))

var subescapular = parseFloat(prompt('Gordura Subcutânea na região Subescapular'))

var triceps = parseFloat(prompt('Gordura Subcutânea na região do Triceps'))

var abdomen = parseFloat(prompt('Gordura Subcutânea na região do Abdomen'))

var rcq = cintura/quadril

var imc = peso/(altura*altura)

var rce = cintura/(altura*100)

var iac = quadril/(altura*Math.sqrt(altura))-18

/*============CMC ANTI ERROS=============*/

if(genero !="masculino" && genero !="feminino"){
alert('escreva o sexo tudo em minusculo')
var genero = prompt('seu sexo e masculino ou feminino')
}
/*============FIM ANTI ERROS============*/

/*======================== Jovem adultos=================================*/

if(imc <= 18.5 && idade >=16 && idade <=64){
     alert('seu imc é '+imc+' é classificado como Baixo Peso')

 }
  else if(imc >= 18.6 && imc <=24.9 && idade >=16 && idade <=64){
   alert('seu imc é '+imc+' é classificado como Ideal')
}
else if(imc >= 25 && imc <=29.9 && idade >=16 && idade <=64){
     alert('seu imc é '+imc+' é classificado como Sobrepeso')
}
else if(imc >= 30 && imc <=34.9 && idade >=16 && idade <=64){
     alert('seu imc é '+imc+' é classificado como Obesidade classe 1')
}
else if(imc >= 35 && imc <=39.9 && idade >=16 && idade <=64){
     alert('seu imc é '+imc+' é classificado como Obesidade classe 2')
} 
else if(imc >= 40 && idade >=16 && idade <=64){
     alert('seu imc é '+imc+' é classificado como Obesidade classe 3')
}

/*===========================FIM JOVEM ADULTO==============================*/


/*=========================== CRIANCAS  Masculino ====================================*/

/* cmc 6 anos masculino*/

else if(imc <= 14.4 && idade == 6 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 14.5 && imc<= 16.5 && idade == 6 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 16.6 && imc <=17.9 && idade == 6 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 18 && idade == 6 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 6 anos masculino*/

/* cmc 7 anos masculino*/


else if(imc <= 14.9 && idade == 7 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 15 && imc <=17.2 && idade == 7 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 17.3 && imc <=19 && idade == 7 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 19.1 && idade == 7 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 7 anos masculino*/

/* cmc 8 anos masculino*/


else if(imc <= 15.5 && idade == 8 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 15.6 && imc <=16.6 && idade == 8 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 16.7 && imc <=20.2 && idade == 8 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

if(imc >= 20.3 && idade == 8 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 8 anos masculino*/

/* cmc 9 anos masculino*/


else if(imc <= 16 && idade == 9 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 16.1 && imc <=18.7 && idade == 9 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 18.8 && imc <=21.3 && idade == 9 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 21.4 && idade == 9 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 9 anos masculino*/

/* cmc 10 anos masculino*/


else if(imc <= 16.6 && idade == 10 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 16.7 && imc <=19.5 && idade == 10 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 19.6 && imc <=22.4 && idade == 10 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 22.5 && idade == 10 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 10 anos masculino*/

/* cmc 11 anos masculino*/


else if(imc <= 17.1 && idade == 11 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 17.2 && imc <=20.2 && idade == 11 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 20.3 && imc <=23.6 && idade == 11 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 23.7 && idade == 11 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 11 anos masculino*/

/* cmc 12 anos masculino*/


else if(imc <= 17.7 && idade == 12 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 17.8 && imc <=21.0 && idade == 12 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 21.1 && imc <=24.7 && idade == 12 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 24.8 && idade == 12 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 12 anos masculino*/


/* cmc 13 anos masculino*/


else if(imc <= 18.4 && idade == 13 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 18.5 && imc <=21.8 && idade == 13 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 21.9 && imc <=25.8 && idade == 13 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 25.9 && idade == 13 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 13 anos masculino*/

/* cmc 14 anos masculino*/


else if(imc <= 19.1 && idade == 14 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 19.2 && imc <=22.6 && idade == 14 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 22.7 && imc <=26.8 && idade == 14 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 26.9 && idade == 14 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 14 anos masculino*/

/* cmc 15 anos masculino*/


else if(imc <= 19.8 && idade == 15 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 19.9 && imc <=23.5 && idade == 15 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 23.6 && imc <=27.6 && idade == 15 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 27.7 && idade == 15 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 15 anos masculino*/

/*=========================== FIM CRIANCAS  Masculino ====================================*/



/*=========================== CRIANCAS  Feminino ====================================*/



/* cmc 6 anos Feminino*/

else if(imc <= 14.2 && idade == 6 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 14.3 && imc <=16.0 && idade == 6 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 16.1 && imc <=17.3 && idade == 6 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 17.4 && idade == 6 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 6 anos feminino*/


/* cmc 7 anos Feminino*/

else if(imc <= 14.8 && idade == 7 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 14.9 && imc <=17.0 && idade == 7 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 17.1 && imc <=18.8 && idade == 7 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 18.9 && idade == 7 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 7 anos feminino*/

/* cmc 8 anos Feminino*/

else if(imc <= 15.5 && idade == 8 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 15.6 && imc <=18.0 && idade == 8 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 18.1 && imc <=20.2 && idade == 8 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 20.3 && idade == 8 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 8 anos feminino*/

/* cmc 9 anos Feminino*/

else if(imc <= 16.2 && idade == 9 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 16.3 && imc <=19.0 && idade == 9 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 19.1 && imc <=21.6 && idade == 9 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 21.7 && idade == 9 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 9 anos feminino*/

/* cmc 10 anos Feminino*/

else if(imc <= 16.9 && idade == 10 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 17.0 && imc <=20.0 && idade == 10 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 20.1 && imc <=23.1 && idade == 10 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 23.2 && idade == 10 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 10 anos feminino*/

/* cmc 11 anos Feminino*/

else if(imc <= 17.5 && idade == 11 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 17.6 && imc <=21.0 && idade == 11 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 21.1 && imc <=24.4 && idade == 11 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 24.5 && idade == 11 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 11 anos feminino*/

/* cmc 12 anos Feminino*/

else if(imc <= 18.2 && idade == 12 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 18.3 && imc <=22.0 && idade == 12 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 22.1 && imc <=25.8 && idade == 12 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 25.9 && idade == 12 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 12 anos feminino*/


/* cmc 13 anos Feminino*/

else if(imc <= 18.8 && idade == 13 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 18.9 && imc <=22.9 && idade == 13 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 23.0 && imc <=27.6 && idade == 13 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 27.7 && idade == 13 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 13 anos feminino*/

/* cmc 14 anos Feminino*/

else if(imc <= 19.2 && idade == 14 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 19.3 && imc <=23.7 && idade == 14 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 23.8 && imc <=27.8 && idade == 14 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 27.9 && idade == 14 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 14 anos feminino*/

/* cmc 15 anos Feminino*/

else if(imc <= 19.5 && idade == 15 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Baixo Peso')}

else if(imc >= 19.6 && imc <=24.1 && idade == 15 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Ideal')}

else if(imc >= 24.2 && imc <=28.7 && idade == 15 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Sobrepeso')}

else if(imc >= 28.8 && idade == 15 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Obesidade')}

/* fim 15 anos feminino*/



/*=========================== FIM CRIANCAS  Feminino ====================================*/



/*=========================== CMC IDOSOS =================================*/



/* cmc 65 anos Masculino*/



else if(imc <= 21.9 && idade >= 65 && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Abaixo do Peso')}

else if(imc >= 22.0 && imc <=27.0 && idade >= 65  && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Peso Ideal')}

else if(imc >= 27.1 && imc <=30.0 && idade >= 65  && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como Levemente acima do Peso')}

else if(imc >= 30.1 && imc <=35.0 && idade >= 65  && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como 1° grau de Obesidade')}

else if(imc >= 35.1 && imc <=39.9 && idade >= 65  && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como 2° grau de Obesidade')}

else if(imc >= 40 && idade >= 65  && genero=='masculino')
{alert('seu imc é '+imc+' é classificado como 3° grau de Obesidade')}



/* fim 65 anos Masculino*/



/* cmc 65 anos Feminino*/



else if(imc <= 21.9 && idade >= 65 && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Abaixo do Peso')}

else if(imc >= 22.0 && imc <=27.0 && idade >= 65  && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Peso Ideal')}

else if(imc >= 27.1 && imc <=32.0 && idade >= 65  && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como Levemente acima do Peso')}

else if(imc >= 32.1 && imc <=37.0 && idade >= 65  && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como 1° grau de Obesidade')}

else if(imc >= 37.1 && imc <=41.9 && idade >= 65  && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como 2° grau de Obesidade')}

else if(imc >= 42 && idade >= 65  && genero=='feminino')
{alert('seu imc é '+imc+' é classificado como 3° grau de Obesidade')}



/* fim 65 anos Feminino*/



/*=========================== FIM IDOSOS =================================*/



/*=========================== FIM IMC =================================








/*=========================== Razao Cintura-Estatura (RCE) ===========================*/


if(rce == 0.52 && genero == "masculino"){
 alert('Seu RCE é '+rce+' esta no ponto de corte')}
else if(rce >= 0.53 && genero == "masculino"){
 alert('Seu RCE é '+rce+' esta acima do ponto de corte')}
else if(rce <= 0.51 && genero == "masculino"){
 alert('Seu RCE é '+rce+' esta abaixo do ponto de corte')}


 if(rce == 0.53 && genero == "feminino"){
 alert('Seu RCE é '+rce+' esta no ponto de corte')}
else if(rce >= 0.54 && genero == "feminino"){
 alert('Seu RCE é '+rce+' esta acima do ponto de corte')}
else if(rce <= 0.52 && genero == "feminino"){
 alert('Seu RCE é '+rce+' esta abaixo do ponto de corte')}

/*=========================== Fim Razao Cintura-Estatura (RCE) =======================*/



/*=========================== Circuferencia de cintura (CCin) ===========================*/

if(cintura >= 80 && cintura <= 87.9 && genero == 'feminino')
{alert('Seu CCin é '+cintura+' é classificado como Risco Elevado')}


if(cintura >= 88 && genero == 'feminino')
{alert('Seu CCin é '+cintura+' é classificado como muito Risco Elevado')}


if(cintura >= 94 && cintura <= 101.9 && genero == 'masculino')
{alert('Seu CCin é '+cintura+' é classificado como Risco Elevado')}


if(cintura >= 102 && genero == 'masculino')
{alert('Seu CCin é '+cintura+' é classificado como muito Risco Elevado')}

/*=========================== Fim Circuferencia de cintura (CCin) =======================*/



/*=========================== Razao Cintura-Quadril (RCQ) ===========================*/


/*=========================== CMC RCQ MASCULINO ===========================*/



/*CMC RCQ MENOR QUE 29 ANOS MASCULINO*/  




if(rcq <= 0.83 && idade <= 29 && genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')
}

else if(rcq >= 0.84 && rcq <=0.88 && idade <= 29 && genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')
}

else if(rcq >= 0.89 && rcq <=0.94 && idade <= 29 && genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco alto')
}

else if(rcq >=0.95 && idade <= 29 && genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+' , é classificado como risco muito alto')
}


/*FIM RCQ MENOR QUE 29 ANOS MASCULINO*/ 


/*CMC RCQ ENTRE 30 ANOS E 39 ANOS MASCULINO*/ 

if(rcq <= 0.83 && idade <= 39 && idade >= 30 &&genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(rcq >= 0.84 && rcq<=0.91 && idade <= 39 && idade >= 30 &&genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(rcq >= 0.92 && rcq <= 0.95 && idade <= 39 && idade >= 30 &&genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}

else if(rcq >= 0.97 && idade <= 39 && idade >= 30 &&genero == 'masculino'){
 alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto') }


/*FIM RCQ ENTRE 30 ANOS E 39 ANOS MASCULINO*/ 



/*CMC RCQ ENTRE 40 ANOS E 49 ANOS MASCULINO*/ 


if(genero == 'masculino' && idade >= 40 && idade <= 49 && rcq <=0.88){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(genero == 'masculino' && idade >= 40 && idade <= 49 && rcq >=0.89 && rcq <= 0.95){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(genero == 'masculino' && idade >= 40 && idade <= 49 && rcq >=0.96 && rcq <= 1.00){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}
else if(genero == 'masculino' && idade >= 40 && idade <= 49 && rcq >=1.01){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')}



/*FIM RCQ ENTRE 40 ANOS E 49 ANOS MASCULINO*/ 



/*CMC RCQ ENTRE 50 ANOS E 59 ANOS MASCULINO*/


if(genero == 'masculino' && idade >= 50 && idade <= 59 && rcq <=0.90){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(genero == 'masculino' && idade >= 50 && idade <= 59 && rcq >=0.91 && rcq <= 0.96){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(genero == 'masculino' && idade >= 50 && idade <= 59 && rcq >=0.97 && rcq <= 1.02){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}
else if(genero == 'masculino' && idade >= 50 && idade <= 59 && rcq >=1.03){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')}


/*FIM RCQ ENTRE 50 ANOS E 59 ANOS MASCULINO*/



/*CMC RCQ MAIOR QUE 59 ANOS MASCULINO*/


if(genero == 'masculino' && idade >= 60 && rcq <=0.91){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(genero == 'masculino' && idade >= 60 && rcq >=0.92 && rcq <= 0.98){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(genero == 'masculino' && idade >= 60 && rcq >=0.99 && rcq <= 1.03){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}
else if(genero == 'masculino' && idade >= 60 && rcq >=1.04){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')}


/*FIM RCQ MAIOR QUE 59 ANOS MASCULINO*/


/*=========================== FIM RCQ MASCULINO ===========================*/



/*=========================== CMC RCQ FEMININO ===========================*/



/*CMC RCQ MENOR QUE 29 ANOS FEMININO*/  


if(rcq <= 0.71 && idade <= 29 && genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')
}

else if(rcq >= 0.72 && rcq <=0.77 && idade <= 29 && genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')
}

else if(rcq >= 0.78 && rcq <=0.82 && idade <= 29 && genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')
}

else if(rcq >=0.83 && idade <= 29 && genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')
}


/*FIM RCQ MENOR QUE 29 ANOS FEMININO*/ 


/*CMC RCQ ENTRE 30 ANOS E 39 ANOS FEMININO*/ 

if(rcq <= 0.72 && idade <= 39 && idade >= 30 &&genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(rcq >= 0.73 && rcq<=0.78 && idade <= 39 && idade >= 30 &&genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(rcq >= 0.79 && rcq <= 0.84 && idade <= 39 && idade >= 30 &&genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}

else if(rcq >= 0.85 && idade <= 39 && idade >= 30 &&genero == 'feminino'){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto') }


/*FIM RCQ ENTRE 30 ANOS E 39 ANOS FEMININO*/ 



/*CMC RCQ ENTRE 40 ANOS E 49 ANOS FEMININO*/ 


if(genero == 'feminino' && idade >= 40 && idade <= 49 && rcq <=0.73){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(genero == 'feminino' && idade >= 40 && idade <= 49 && rcq >=0.74 && rcq <= 0.79){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(genero == 'feminino' && idade >= 40 && idade <= 49 && rcq >=0.80 && rcq <= 0.87){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}
else if(genero == 'feminino' && idade >= 40 && idade <= 49 && rcq >=0.88){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')}



/*FIM RCQ ENTRE 40 ANOS E 49 ANOS FEMININO*/ 



/*CMC RCQ ENTRE 50 ANOS E 59 ANOS FEMININO*/


if(genero == 'feminino' && idade >= 50 && idade <= 59 && rcq <=0.74){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(genero == 'feminino' && idade >= 50 && idade <= 59 && rcq >=0.75 && rcq <= 0.80){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(genero == 'feminino' && idade >= 50 && idade <= 59 && rcq >=0.81 && rcq <= 0.88){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}
else if(genero == 'feminino' && idade >= 50 && idade <= 59 && rcq >=0.89){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')}


/*FIM RCQ ENTRE 50 ANOS E 59 ANOS FEMININO*/



/*CMC RCQ MAIOR QUE 59 ANOS FEMININO*/


if(genero == 'feminino' && idade >= 60 && rcq <=0.76){
alert('Seu RCQ é '+ rcq+', é classificado como risco baixo')}

else if(genero == 'feminino' && idade >= 60 && rcq >=0.77 && rcq <= 0.82){
alert('Seu RCQ é '+ rcq+', é classificado como risco moderado')}

else if(genero == 'feminino' && idade >= 60 && rcq >=0.83 && rcq <= 0.90){
alert('Seu RCQ é '+ rcq+', é classificado como risco alto')}
else if(genero == 'feminino' && idade >= 60 && rcq >=0.91){
alert('Seu RCQ é '+ rcq+', é classificado como risco muito alto')}


/*FIM RCQ MAIOR QUE 59 ANOS FEMININO*/



/*=========================== FIM RCQ FEMININO ===========================*/



/*=========================== Fim Razao Cintura-Quadril (RCQ) =======================*/




/*=========================== Índice de Adiposidade Corporal (IAC) ==================*/

alert('Seu IAC é '+ iac)

/*=========================== FIM Índice de Adiposidade Corporal (IAC) ==============*/ 


/*=========================== CMC Densidade Corporal ==============*/ 


/*
if(genero == masculino)
{
    var dc = 1.17136 - 0.06706.log(triceps+supralica+abdomen);
}
if(genero == feminino)
{
    var dc = 1.16650 - 0.07063.log(coxa+supralica+subescapular);
}
*/


/*=========================== FIM Densidade Corporal ==============*/ 


/*=========================== CMC Formula de Siri ==============*/ 

/*
var gordura = ((4.95/dc) - 4.5) * 100
alert("sua % de gordura é "+gordura)
*/

/*=========================== FIM Formula de Siri ==============*/ 

}//fim funcao calculos



