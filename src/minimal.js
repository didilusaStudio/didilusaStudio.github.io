//LA NAVIGATION DU SITE
const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
});

//CAROUSSEL ARROWS 
const track = document.querySelector('.portfolio-content');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (track && nextBtn && prevBtn) {
  nextBtn.onclick = () => track.scrollBy({ left: 350, behavior: 'smooth' });
  prevBtn.onclick = () => track.scrollBy({ left: -350, behavior: 'smooth' });
}



//La Machine graphique

const form = document.getElementById("creativeForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const pseudo = document.querySelector("[name='pseudo']").value;
        const q1 = parseInt(document.querySelector("[name='Q1']").value);
        const q2 = parseInt(document.querySelector("[name='Q2']").value);
        const q3 = parseInt(document.querySelector("[name='Q3']").value);
        const q4 = parseInt(document.querySelector("[name='Q4']").value);
        const q5 = parseInt(document.querySelector("[name='Q5']").value);

        const score = q1 + q2 + q3 + q4 + q5;

        let profil_creatif = "";
        let description_profil = "";
        let explication = "";
        let classeProfil = "";

        if(score <= 25){
            profil_creatif = "Créatif Minimaliste";
            description_profil = "Tu vas droit à l’essentiel. Tu privilégies la cohérence visuelle et l’élégance discrète.";
            explication = "Tu privilégies la clarté, la structure et l’essentiel.<br>Tu vas droit au but, sans superflu.<br>Ton univers est épuré, calme, précis.";
            classeProfil = "profil-minimaliste";
        }
        else if(score <= 50){
            profil_creatif = "Créatif Harmonieux";
            description_profil = "Tu cherches l’harmonie avant l’impact. Tu combines structure et sensibilité.";
            explication = "Tu recherches l’équilibre avant tout.<br>Tu aimes les compositions douces, les couleurs apaisantes, les formes fluides.<br>Ton style est sensible, naturel, cohérent.";
            classeProfil = "profil-harmonieux";
        }
        else if(score <= 75){
            profil_creatif = "Créatif Expressif";
            description_profil = "Tu explores, tu joues, tu exprimes. Tu veux transmettre une énergie visuelle.";
            explication = "Tu crées avec énergie et émotion.<br>Tu aimes les contrastes, les textures visibles, les compositions dynamiques.<br>Ton univers est vivant, vibrant, spontané.";
            classeProfil = "profil-expressif";
        }
        else{
            profil_creatif = "Créatif Audacieux";
            description_profil = "Tu crées des univers puissants, assumés, singuliers. Tu n’as pas peur d’expérimenter.";
            explication = "Tu explores, tu expérimentes, tu bouscules les codes.<br>Tu n’as pas peur des couleurs intenses, des formes abstraites ou des choix marqués.<br>Ton style est puissant, singulier, assumé.";
            classeProfil = "profil-audacieux";
        }

        // Injection du résultat + bouton
        document.getElementById("result").innerHTML = `
            <section class="section-projet ${classeProfil} result-appear">
            <h2>Résultat de la Machine Graphique</h2>
            <p><strong>Pseudo :</strong> ${pseudo}</p>
            <p><strong>Score :</strong> ${score} / 100</p>
            <h3>${profil_creatif}</h3>
            <p class="bold">${description_profil}</p>
            <p>${explication}</p>
            <br><br><br>
            <button id="restartTest" class="btn-primary">Recommencer le test</button>
        </section>
        `;

        // Ici seulement : le bouton existe enfin dans le DOM
        const restartBtn = document.getElementById("restartTest");
        if (restartBtn) {
            restartBtn.onclick = () => {
                form.reset();
                document.getElementById("result").innerHTML = "";
                window.scrollTo({ top: 0, behavior: "smooth" });
            };
        }
    });
}



