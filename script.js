//Comandos Troca de Tema//
const btnTema = document.querySelector("#btn-tema");
const body = document.body;

// Quando a página carregar, verifica se já existe tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
    body.classList.add("dark-theme");
    btnTema.textContent = "☀️ Tema Claro";
} else {
    btnTema.textContent = "🌙 Tema Escuro";
}

// Evento de clique no botão
btnTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        btnTema.textContent = "☀️ Tema Claro";
        localStorage.setItem("tema", "dark");
    } else {
        btnTema.textContent = "🌙 Tema Escuro";
        localStorage.setItem("tema", "light");
    }
});



// ARRAY
let projetos = [
{
    titulo: "Agente de Combate às Endemias",
    descricao: "Atuação no ensino de Física com foco em aprendizagem prática, resolução de problemas e desenvolvimento do pensamento crítico dos estudantes.",
    imagem: "fotoagente.jpeg",
    link: "https://github.com/antonyomarques2012-ops"
},
{
    titulo: "Professor de Física",
    descricao: "Atuação direta no controle e prevenção de doenças endêmicas, visitas domiciliares, orientações à população e suporte em campanhas de saúde pública.",
    imagem: "professoraula.png",
    link: "https://github.com/antonyomarques2012-ops"
},

];

// FUNÇÃO
function renderizarProjetos() {
    const container = document.querySelector(".projetos-container");

    container.innerHTML = "";

    projetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projetos">
                <h3>${projeto.titulo}</h3>
                <img src="${projeto.imagem}" alt="${projeto.titulo}">
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
            </article>
        `;

        container.innerHTML += cardHTML;
    });
}

// EXECUTA
renderizarProjetos();

