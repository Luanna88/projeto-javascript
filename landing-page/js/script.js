document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const form = document.getElementById("form-contato");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    alert("Mensagem enviada com sucesso!");
    form.reset();
  });

  const imagensProjeto = document.querySelectorAll(".imagens-projeto img");

  imagensProjeto.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("lightbox-overlay");

      const imagemCompleta = document.createElement("img");
      imagemCompleta.src = img.src;
      imagemCompleta.alt = img.alt;
      imagemCompleta.classList.add("lightbox-img");

      overlay.appendChild(imagemCompleta);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    });
  });
});
