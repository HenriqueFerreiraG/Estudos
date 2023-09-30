document.getElementById('btnProximo3').addEventListener('click', function () {

    const formData = {
        braco: document.getElementById('braco').value,
        antebraco: document.getElementById('antebraco').value,
        quadril: document.getElementById('quadril').value,
        cintura: document.getElementById('cintura').value,
        panturrilha: document.getElementById('panturrilha').value,
        torax: document.getElementById('torax').value,
        coxa: document.getElementById('coxa').value,
        abdomen: document.getElementById('abdomen').value,
    };

    const camposObrigatorios = ['braco', 'antebraco', 'quadril', 'cintura', 'coxa', 'abdomen', 'torax', 'panturrilha'];
    const todosCamposPreenchidos = camposObrigatorios.every(field => formData[field]);

    if (todosCamposPreenchidos) {
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();

        for (const field in formData) {
            document.cookie = `${field}=${formData[field]};${expires};path=/`;
        }

        window.location.href = 'resultado.html';
    }
});