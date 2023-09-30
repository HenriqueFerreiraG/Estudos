document.getElementById('btnProximo2').addEventListener('click', function () {

    const formData = {
        idade: document.getElementById('idade').value,
        sexo: document.getElementById('sexo').value,
        altura: document.getElementById('altura').value,
        peso: document.getElementById('peso').value,
    };

    const camposObrigatorios = ['idade', 'sexo', 'altura', 'peso'];
    const todosCamposPreenchidos = camposObrigatorios.every(field => formData[field]);

    if (todosCamposPreenchidos) {
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();

        for (const field in formData) {
            document.cookie = `${field}=${formData[field]};${expires};path=/`;
        }

        window.location.href = 'antropometria.html';
    }
});