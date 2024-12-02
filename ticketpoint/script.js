function Topmenu() {
    const menu = document.getElementById('Topmenu');
    menu.classList.toggle('responsive');
}

document.getElementById('searchButton').addEventListener('click', () => {
    const date = document.getElementById('date').value;
    const movie = document.getElementById('movie').value;
    const city = document.getElementById('city').value;

    if (date && movie !== "Selecionar..." && city !== "Selecionar...") {
        alert(`Buscando sessões para o dia ${date}, filme "${movie}" em ${city}`);
    } else {
        alert("Por favor, preencha todos os campos!");
    }
});

// Abre o modal de cadastro
document.getElementById("registerButton").addEventListener("click", function () {
    document.getElementById("registerModal").style.display = "block";
});

// Fecha o modal de cadastro
function closeModal() {
    document.getElementById("registerModal").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.addEventListener("click", function (event) {
    const modal = document.getElementById("registerModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Envia o formulário de cadastro (aqui você pode integrar com um backend)
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    alert("Cadastro realizado com sucesso!");
    closeModal(); // Fecha o modal após o envio
});

