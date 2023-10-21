const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener('click', function() {
        const currentItem = document.querySelector(".sidebar ul li.active");
        if (currentItem) {
            currentItem.classList.remove('active');
        }
        this.classList.add('active');
    });
});

const sidebar = document.querySelector(".sidebar");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener('click', function() {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('active');
});

document.getElementById('cadEquipBtn').addEventListener('click', function() {
    // Aqui você pode adicionar lógica para validar e enviar os dados do formulário.
    
    // Após o cadastro bem-sucedido, feche o modal.
    var modal = new bootstrap.Modal(document.getElementById('cadEquipModal'));
    modal.hide();
  });