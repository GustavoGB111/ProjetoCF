const form = document.querySelector('#Form-Login');
const registerButton = document.querySelector('#Button-Cadastro')

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    const formDataLogin = new FormData(form);
    const EmailLogin = formDataLogin.get('Email-Input');
    const SenhaLogin = formDataLogin.get('Senha-Input');
    const filteredDataLogin = {
        Email: EmailLogin,
        Senha: SenhaLogin
    };
    console.log(filteredDataLogin)
});

async function Logar(filteredDataLogin) {
    try {
        const response = await fetch('/auth/login', {
            method:'POST',
            body: JSON.stringify(filteredDataLogin)
        })

        if (!response.ok) {
            throw new Error('Erro na rede');
        } else {
            form.addEventListener('click', (event) =>{
                window.location.href = 'http:http://127.0.0.1:5500/PagPrincipal/pagTodos.html'
            });
        }

        const resultProtected = await response.json();
        const token = resultProtected.token;
        console.log("token:", token);
        localStorage.setItem('Token',token);

    } catch (Error) {
        throw new Error('Error:',Error);
    }
}

registerButton.addEventListener('click', (event) =>{
    window.location.href = 'http://127.0.0.1:5500/Cadastro/Cadastro.html'
});