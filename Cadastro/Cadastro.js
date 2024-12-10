const form = document.querySelector('#Form-Login');
const backButton = document.querySelector('#Back-Button')
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = new FormData(form);
  const Name = formData.get('Nome-Input');
  const Email = formData.get('Email-Input');
  const Senha = formData.get('Senha-Input');
  const ConfirmSenha = formData.get('Confirm-Senha-Input');

  if (Senha == ConfirmSenha) {
    if (Name != null) {
        const filteredData = {
            Name: Name,
            Email: Email,
            Senha: Senha 
          };
    } else {
        const filteredData = {
            Email: Email,
            Senha: Senha 
          };
    }

      async function Cadastro(filteredData) {
        try {
            const response = await fetch('/register', {
                method: "POST",
                body: JSON.stringify(filteredData)
            });
    
            if (!response.ok) {
                throw new Error('Erro na rede');
            }
    
            const result = await response.JSON();
            alert(result.Description);
            
        } catch (error) {
            throw new Error('Error:',error);
        }
}
  } else {
    alert('As Senhas não se coincidem');
  }

});

backButton.addEventListener('click', (event) =>{
    window.location.href = 'http://127.0.0.1:5500/Login/Login.html'
});