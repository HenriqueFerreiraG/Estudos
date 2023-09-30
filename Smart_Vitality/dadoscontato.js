document.getElementById('btnProximo').addEventListener('click', function () {
    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone1: document.getElementById('telefone1').value,
        telefone2: document.getElementById('telefone2').value,
        endereco: document.getElementById('endereco').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
    };

    const camposObrigatorios = ['nome', 'email', 'telefone1', 'endereco', 'cidade', 'estado'];
    const todosCamposPreenchidos = camposObrigatorios.every(field => formData[field]);

    if (todosCamposPreenchidos) {
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();

        for (const field in formData) {
            document.cookie = `${field}=${formData[field]};${expires};path=/`;
        }

        window.location.href = 'dadosclinicos.html';
    }
});
