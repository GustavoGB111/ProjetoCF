const form = document.querySelector('#Form-Login');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const formData = new FormData(form);
  const Name = formData.get('Nome-Input');
  const Email = formData.get('Email-Input');
  const Senha = formData.get('Senha-Input');
  const ConfirmSenha = formData.get('Confirm-Senha-Input');

  if (Senha == ConfirmSenha) {
    const filteredData = {
        Name: Name,
        Email: Email,
        Senha: Senha, 
        ConfirmSenha: ConfirmSenha
      };
      async function Cadastro(filteredData) {
        try {
            const response = await fetch('/register', {
                method: "POST",
                body: JSON.stringify(filteredData)
            });
    
            if (!response.ok) {
                throw new Error('Erro na rede');
            }
    
            const result = await response.JSON()
    
        } catch (error) {
            throw new Error('Error:',error);
        }
}
  } else {
    alert('As Senhas não se coincidem');
  }

});