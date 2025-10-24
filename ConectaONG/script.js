// data
const ongsData = [ 
    {
        nome: "Associação de Asistencia a Criança Deficiente", 
        causas: ["Social", "Infantil", "Acessibilidade"], 
        image: "Imagens/AACD_capa.jpg",
        detailsLink: "#",
        keywords: ["inclusão", "deficiente", "criança"],
        descricao: "A AACD é uma instituição de referência no tratamento e reabilitação de pessoas com deficiência física, focando na inclusão social e qualidade de vida.", 
        site: "https://www.aacd.org.br"
    },
    {
        nome: "Greenpeace",
        causas: ["Meio-Ambiente"],
        image: "Imagens/GRP_capa.avif",
        detailsLink: "#",
        keywords: ["natureza", "sustentabilidade", "clima"],
        descricao: "Organização global que luta pela proteção do meio ambiente, combatendo as mudanças climáticas e defendendo a biodiversidade.",
        site: "https://www.greenpeace.org/brasil/"
    },
    {
        nome: "Medicos Sem Fronteiras",
        causas: ["Saude"],
        image: "Imagens/MSF_capa.jpg",
        detailsLink: "#",
        keywords: ["cura", "saude", "global"],
        descricao: "MSF oferece assistência médica e humanitária a vítimas de conflitos, epidemias, desastres ou exclusão em mais de 70 países.",
        site: "https://www.msf.org.br/"
    },
    {
        nome: "Instituto Socioambiental",
        causas: ["Acessibilidade", "Inclusão", "Social"],
        image: "Imagens/ISA_capa.png",
        detailsLink: "#",
        keywords: ["educação", "integração"],
        descricao: "O ISA defende bens e direitos de povos indígenas, quilombolas e comunidades tradicionais, promovendo a sustentabilidade ambiental e social.",
        site: "https://isa.org.br/"
    },
    {
        nome: "Centro de Inclusão Digital",
        causas: ["Informativo", "Social", "Inclusão", "Acessibilidade"],
        image: "Imagens/CID_capa.png",
        detailsLink: "#",
        keywords: ["escola", "aprendizagem", "dados", "tecnologia"],
        descricao: "Focado em promover a inclusão social e digital, oferecendo cursos e acesso à tecnologia para comunidades carentes e pessoas com deficiência.",
        site: "#"
    },
    {
        nome: "SOS Mata Atlantica",
        causas: ["Meio-Ambiente"],
        image: "Imagens/sos_atlantica_capa.png",
        detailsLink: "#",
        keywords: ["natureza", "preservação"],
        descricao: "ONG brasileira dedicada à conservação e recuperação da Mata Atlântica, um dos biomas mais ameaçados do mundo.",
        site: "https://www.sosma.org.br/"
    },
    {
        nome: "Room to Read",
        causas: ["Inclusão", "Acessibilidade"],
        image: "Imagens/RTR_capa.png",
        detailsLink: "#",
        keywords: ["livros", "leitura", "educação"],
        descricao: "Uma organização que busca transformar vidas de milhões de crianças em países em desenvolvimento através de educação e igualdade de gênero.",
        site: "https://www.roomtoread.org/"
    },
    {
        nome: "Associação Saude Criança",
        causas: ["Saude", "Infantil"],
        image: "Imagens/ASC_capa.png",
        detailsLink: "#",
        keywords: ["Saude", "criança", "cura"],
        descricao: "Oferece suporte a famílias de crianças gravemente doentes, promovendo a alta hospitalar e garantindo a continuidade do tratamento em casa.",
        site: "https://www.saudecrianca.org.br/"
    },
    {
        nome: "Viva Rio",
        causas: ["Inclusão", "Social", "Informativo", "Acessibilidade"],
        image: "Imagens/VR_capa.png",
        detailsLink: "#",
        keywords: ["Educação", "inclusão", "Acessibilidade"],
        descricao: "Atua na promoção da cultura de paz e inclusão social no Rio de Janeiro e em outras regiões do Brasil, através de projetos de educação e saúde.",
        site: "https://vivario.org.br/"
    },
    {
        nome: "Tech Girls",
        causas: ["Inclusão", "Social", "Informativo", "Acessibilidade"],
        image: "Imagens/TG_capa.png",
        detailsLink: "#",
        keywords: ["Tecnologia", "mulheres", "educação"],
        descricao: "Iniciativa focada em inspirar e capacitar meninas e mulheres a ingressarem e se destacarem nas áreas de Ciência, Tecnologia, Engenharia e Matemática (STEM).",
        site: "https://www.techgirls.com.br/"
    },

];

//variaveis da página principal
const ongListContainer = document.getElementById('ong-list');
const searchInput = document.getElementById('search-input');
const forumPostsContainer = document.getElementById('forum-posts');
const btnNewPost = document.querySelector('.btn-new-post');

//variaveis modal ONG
const ongDetailsModal = document.getElementById('ong-details-modal');
const closeModalBtn = document.querySelector('.close-btn');
const modalOngName = document.getElementById('modal-ong-name');
const modalOngCausas = document.getElementById('modal-ong-causas');
const modalOngImage = document.getElementById('modal-ong-image');
const modalOngDescription = document.getElementById('modal-ong-description');
const modalOngSiteLink = document.getElementById('modal-ong-site-link');

// VARIÁVEIS DE AUTENTICAÇÃO
const loginModal = document.getElementById('login-modal'); // Existe em index.html
const registerForm = document.getElementById('register-form'); // Existe em cadastro.html
const loginForm = document.getElementById('login-form'); // Existe em index.html
const registerMessage = document.getElementById('register-message'); // Existe em cadastro.html
const loginMessage = document.getElementById('login-message'); // Existe em index.html
const loggedUserName = document.getElementById('logged-user-name');

const authLinks = document.getElementById('auth-links');
const userInfo = document.getElementById('user-info');
const showLoginBtn = document.getElementById('show-login-btn');
const logoutBtn = document.getElementById('logout-btn');


function getStoredUsers() {
    const users = localStorage.getItem('conectanong_users');
    return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
    localStorage.setItem('conectanong_users', JSON.stringify(users));
}

function updateAuthUI(username = null) {
    if (authLinks && userInfo) {
        if (username) {
            authLinks.style.display = 'none';
            userInfo.style.display = 'flex';
            loggedUserName.textContent = `Olá, ${username}!`;
        } else {
            authLinks.style.display = 'flex';
            userInfo.style.display = 'none';
        }
    }
}

function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('conectanong_logged_in_user');
    updateAuthUI(loggedInUser);
}


function handleRegister(e) {
    if (!registerForm) return;

    e.preventDefault();
    
    const fullname = document.getElementById('register-fullname').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const numero = document.getElementById('register-numero').value.trim();
    
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();
    
    let users = getStoredUsers();

    if (users[username]) {
        registerMessage.textContent = 'Este nome de usuário já está em uso!';
        registerMessage.style.color = 'red';
        return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
         registerMessage.textContent = 'Por favor, insira um e-mail válido.';
         registerMessage.style.color = 'orange';
         return;
    }

    if (username.length < 3 || password.length < 6) {
        registerMessage.textContent = 'Usuário deve ter 3+ caracteres e senha 6+.';
        registerMessage.style.color = 'orange';
        return;
    }

    users[username] = {
        password: password, 
        fullname: fullname, 
        email: email,       
        numero: numero,     
    };
    
    saveUsers(users);

    registerMessage.textContent = 'Cadastro realizado com sucesso! Redirecionando para o Login...';
    registerMessage.style.color = 'green';
    registerForm.reset();

    setTimeout(() => {
        window.location.href = 'index.html'; 
    }, 2000);
}


function closeLoginModal() {
    if (loginModal) {
        loginModal.style.display = 'none';
        loginMessage.textContent = '';
        if (loginForm) loginForm.reset();
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const users = getStoredUsers();
    
    const userData = users[username];

    if (userData && userData.password === password) { 
        localStorage.setItem('conectanong_logged_in_user', username);
        updateAuthUI(username);
        loginMessage.textContent = 'Login bem-sucedido!';
        loginMessage.style.color = 'green';
        
        setTimeout(() => {
            closeLoginModal();
        }, 1000);
    } else {
        loginMessage.textContent = 'Nome de usuário ou senha incorretos.';
        loginMessage.style.color = 'red';
    }
}

function handleLogout() {
    localStorage.removeItem('conectanong_logged_in_user');
    updateAuthUI(null);
}

function createOngCardHTML(ong, index) { 
    const causasDisplay = ong.causas.join(', ');

    return `
        <article class="ong-card" data-id="${index}">
            <img src="${ong.image}" alt="Logo da ONG ${ong.nome}">
            <h3>${ong.nome}</h3>
            <p class="ong-genre">${causasDisplay}</p> 
            <a href="#" class="btn-details">Ver Detalhes e Contribuir</a>
        </article>
    `;
}

function renderOngList(ongsToRender) {
    if (!ongListContainer) return; 

    ongListContainer.innerHTML = ''; 

    if (ongsToRender.length === 0) {
        ongListContainer.innerHTML = '<p style="text-align: center; grid-column: 1 / -1;">Nenhuma ONG encontrada com os critérios de busca.</p>';
        return;
    }

    const cardsHTML = ongsToRender.map((ong, i) => createOngCardHTML(ong, i)).join('');
    ongListContainer.innerHTML = cardsHTML;
}

// Pesquisa e filtro
let currentFilterGenre = 'all'; 

function filterOngs() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const filteredOngs = ongsData.filter(ong => {

        const fullSearchString = `${ong.nome.toLowerCase()} ${ong.keywords.join(' ')}`;
        const textMatch = fullSearchString.includes(searchTerm);

        const genreFilterMatch = currentFilterGenre === 'all' || 
                                 ong.causas.map(c => normalize(c)).includes(normalize(currentFilterGenre)); 
                                 
        return textMatch && genreFilterMatch;
    });

    renderOngList(filteredOngs);
}

function setupGenreFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilterGenre = button.dataset.genre.toLowerCase();

            filterOngs();
        });
    });
}

// Funcionalidade modal ONG
function showOngDetails(ong) {
    if (!ongDetailsModal) return; 

    modalOngName.textContent = ong.nome;
    modalOngCausas.textContent = ong.causas.join(', ');
    modalOngImage.src = ong.image;
    modalOngImage.alt = `Logo da ONG ${ong.nome}`;
    
    modalOngDescription.textContent = ong.descricao || "Descrição detalhada indisponível.";
    
    
    modalOngSiteLink.href = ong.site || "#";
    modalOngSiteLink.textContent = ong.site && ong.site !== "#" ? "Visitar Site Oficial" : "Link do Site Indisponível";

    ongDetailsModal.style.display = "block"; 
}

function closeOngDetails() {
    if (ongDetailsModal) {
        ongDetailsModal.style.display = "none";
    }
}


function setupListeners() {
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeOngDetails);
    }
    
    window.addEventListener('click', (event) => {
        if (event.target === ongDetailsModal) {
            closeOngDetails();
        }
    });
    
    if (ongListContainer) {
        ongListContainer.addEventListener('click', (event) => {
            const targetCard = event.target.closest('.ong-card');
            
            if (targetCard && targetCard.dataset.id) {
                event.preventDefault(); 
                const ongIndex = targetCard.dataset.id;
                
                if (ongIndex !== undefined) {
                    const ong = ongsData[parseInt(ongIndex)];
                    if (ong) {
                        showOngDetails(ong);
                    }
                }
            }
        });
    }

    if (document.getElementById('principais-ONGs')) { 
        
  
        if (showLoginBtn) {
            showLoginBtn.addEventListener('click', () => {
                closeLoginModal();
                loginModal.style.display = 'block';
            });
        }
        
        document.querySelectorAll('.login-close-btn').forEach(btn => {
            btn.addEventListener('click', closeLoginModal);
        });

        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }
        
        if (logoutBtn) {
            logoutBtn.addEventListener('click', handleLogout);
        }
        
        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                closeLoginModal();
            }
        });

    }


    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
}


//Forum

function createNewPost() {
    const loggedInUser = localStorage.getItem('conectanong_logged_in_user');

    if (!loggedInUser) {
        alert("Você precisa estar logado para criar um novo post no fórum!");
        
        // Se estiver na index.html, abre o modal de login
        if (loginModal) {
            loginModal.style.display = 'block';
        }
        return;
    }

    const title = prompt("Digite o Título da sua Opinião/Recomendação:"); 
    if (!title) return;

    const content = prompt("Digite seu comentário ou recomendação sobre as ONGs:"); 
    if (!content) return;

    const date = new Date().toLocaleDateString('pt-BR');
    const user = loggedInUser; 

    const newPostHTML = `
        <div class="forum-post new-post">
            <h4>${title}</h4>
            <p>${content}</p>
            <span class="post-meta">Postado por ${user} em ${date}</span>
        </div>
    `;

    forumPostsContainer.insertAdjacentHTML('afterbegin', newPostHTML);
}


//Inicialização

document.addEventListener('DOMContentLoaded', () => {
    if (ongListContainer) {
        const staticCard = ongListContainer.querySelector('.ong-card');
        if (staticCard) {
            staticCard.remove();
        }
    }
    
    checkLoginStatus();

    if (ongListContainer) {
        renderOngList(ongsData); 
    }
    

    if (searchInput) {
        searchInput.addEventListener('input', filterOngs);
    }
    
    setupGenreFilters();

    if (btnNewPost) {
        btnNewPost.addEventListener('click', createNewPost);
    }

    setupListeners();
});