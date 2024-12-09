const form = document.querySelector('#Form-Login');

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
        }

        const result = await response.JSON()

    } catch (Error) {
        throw new Error('Error:',Error);
    }
}