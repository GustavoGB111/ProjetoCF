    //Função Active para a permanencia de estado de um botão ativo//desativo
    const buttons = document.querySelectorAll('.Main-Div-Button');
    const modalButtons = document.querySelectorAll('Modal-Button-Types');
    const typeBox = document.querySelectorAll('Main-Div-Tipo-Valor');
    const BoxesInput = document.querySelectorAll('Main-Div-Valor-Box');

    buttons.forEach(button => {
         button.addEventListener('click', () => {
             buttons.forEach(btn => {
                 if (btn !== button && btn.classList.contains('active')) {
                     btn.classList.remove('active'); }
                     });
                      button.classList.toggle('active'); 
                    }); });

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalButtons.forEach(btn => {
                if (btn !== button && btn.classList.contains('active')) {
                    btn.classList.remove('active'); }
                        });
                    button.classList.toggle('active'); 
                }); });

    //Função para modal
    const buttonOpenModal = document.querySelector("#Header-Title-Form-New_Value_Button")
    const modal = document.querySelector("#Pag-Modal")
    const buttonCloseModal = document.querySelector("#Close-Modal")

    buttonOpenModal.onclick = function () { //função abrir modal
        modal.showModal()
    }
    buttonCloseModal.onclick = function () { //função fechar modal
        modal.close()
    }

    // Pegar Elementos do formulario (Teste)
    document.getElementById('Modal-Div-Form').addEventListener('submit', function(event) {
        event.preventDefault();
      
        const valor = document.getElementById('Modal-Div-Form-Input').value;
        const tipoEntrada = document.getElementById('Modal-Button-Entrada').value;
        const tipoSaída = document.getElementById('Modal-Button-Saída').value;
        const Transaction = {
          Value: valor,
          Type: tipoEntrada,
          Type_2: tipoSaída
        };
      window.alert(Transaction);
      });
      