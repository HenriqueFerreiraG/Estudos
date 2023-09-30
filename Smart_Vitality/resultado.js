document.addEventListener('DOMContentLoaded', function () {
    // Função para recuperar o valor de um cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.trim().split('=');
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null; // Retorna null se o cookie não for encontrado
    }

    // Recupera os valores dos cookies
    const nomeCookie = getCookie('nome');
    const emailCookie = getCookie('email');
    const telefone1Cookie = getCookie('telefone1');
    const telefone2Cookie = getCookie('telefone2');
    const enderecoCookie = getCookie('endereco');
    const cidadeCookie = getCookie('cidade');
    const estadoCookie = getCookie('estado');
    const idadeCookie = getCookie('idade');
    const sexoCookie = getCookie('sexo');
    const alturaCookie = getCookie('altura');
    const pesoCookie = getCookie('peso');
    const imcCookie = getCookie('imc');
    const quadrilCookie = getCookie('quadril');
    const cinturaCookie = getCookie('cintura');
    const bracoCookie = getCookie('braco');
    const antebracoCookie = getCookie('antebraco');
    const toraxCookie = getCookie('torax');
    const abdomenCookie = getCookie('abdomen');
    const panturrilhaCookie = getCookie('panturrilha');
    const coxaCookie = getCookie('coxa');
    const p1Cookie = getCookie('p1');
    const p2nCookie = getCookie('p2n');
    const p2sCookie  = getCookie('p2s');
    const p2s1Cookie = getCookie('p2s1');
    const p3Cookie = getCookie('p3');
    const p4nCookie = getCookie('p4n');
    const p4sCookie = getCookie('p4s');
    const p4s1Cookie = getCookie('p4s1');
    const p5Cookie = getCookie('p5');
    const p6nCookie = getCookie('p6n');
    const p6sCookie = getCookie('p6s');
    const p6s1Cookie = getCookie('p6s1');
    const p7nCookie = getCookie('p7n');
    const p7sCookie = getCookie('p7s');
    const p7s1Cookie = getCookie('p7s1');
    const p8nCookie = getCookie('p8n');
    const p8sCookie = getCookie('p8s');
    const p8s1Cookie = getCookie('p8s1');
    const p9Cookie = getCookie('p9');
    const p10nCookie = getCookie('p10n');
    const p10sCookie = getCookie('p10s');
    const p10s1Cookie = getCookie('p10s1');

    // Exibe os valores dos cookies na página
    document.getElementById('nome').textContent = nomeCookie || '';
    document.getElementById('email').textContent = emailCookie || '';
    document.getElementById('telefone1').textContent = telefone1Cookie || '';
    document.getElementById('telefone2').textContent = telefone2Cookie || '';
    document.getElementById('endereco').textContent = enderecoCookie || '';
    document.getElementById('cidade').textContent = cidadeCookie || '';
    document.getElementById('estado').textContent = estadoCookie || '';
    document.getElementById('idade').textContent = idadeCookie || '';
    document.getElementById('sexo').textContent = sexoCookie || '';
    document.getElementById('altura').textContent = alturaCookie || '';
    document.getElementById('peso').textContent = pesoCookie || '';
    document.getElementById('imc').textContent = imcCookie || '';
    document.getElementById('quadril').textContent = quadrilCookie || '';
    document.getElementById('cintura').textContent = cinturaCookie || '';
    document.getElementById('panturrilha').textContent = panturrilhaCookie || '';
    document.getElementById('braco').textContent = bracoCookie || '';
    document.getElementById('antebraco').textContent = antebracoCookie || '';
    document.getElementById('torax').textContent = toraxCookie || '';
    document.getElementById('coxa').textContent = coxaCookie || '';
    document.getElementById('abdomen').textContent = abdomenCookie || '';
    document.getElementById('p1').textContent = p1Cookie || '';
    document.getElementById('p2n').textContent = p2nCookie || '';
    document.getElementById('p2s').textContent = p2sCookie || '';
    document.getElementById('p2s1').textContent = p2s1Cookie || '';
    document.getElementById('p3').textContent = p3Cookie || '';
    document.getElementById('p4n').textContent = p4nCookie || '';
    document.getElementById('p4s').textContent = p4sCookie || '';
    document.getElementById('p4s1').textContent = p4s1Cookie || '';
    document.getElementById('p5').textContent = p5m1lCookie || '';
    document.getElementById('p6n').textContent = p6nCookie || '';
    document.getElementById('p6s').textContent = p6sCookie || '';
    document.getElementById('p6s1').textContent = p6s1Cookie || '';
    document.getElementById('p7n').textContent = p7nCookie || '';
    document.getElementById('p7s').textContent = p7sCookie || '';
    document.getElementById('p7s1').textContent = p7s1Cookie || '';
    document.getElementById('p8n').textContent = p8nCookie || '';
    document.getElementById('p8s').textContent = p8sCookie || '';
    document.getElementById('p8s1').textContent = p8s1Cookie || '';
    document.getElementById('p9').textContent = p9m5Cookie || '';
    document.getElementById('p10n').textContent = p10nCookie || '';
    document.getElementById('p10s').textContent = p10sCookie || '';
    document.getElementById('p10s1').textContent = p10s1Cookie || '';
});