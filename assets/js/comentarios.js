document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.getElementById("commentForm");
    const nameInput = document.getElementById("nameInput");
    const commentInput = document.getElementById("commentInput");
    const errorMessage = document.getElementById("error-message");

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();
        
        // Resetear los estilos de los campos y el mensaje de error
        errorMessage.style.display = "none";
        errorMessage.textContent = "";
        nameInput.classList.remove("error");
        commentInput.classList.remove("error");

        // Validaciones
        if (name.length < 4 || name[0] !== name[0].toUpperCase() || /[^a-zA-Z\s]/.test(name)) {
            errorMessage.textContent = "El nombre debe tener al menos 4 letras, comenzar con mayúscula y no contener números ni caracteres especiales.";
            errorMessage.style.display = "block";
            nameInput.classList.add("error");
            return;
        }

        if (comment.length < 20) {
            errorMessage.textContent = "El comentario debe tener al menos 20 caracteres.";
            errorMessage.style.display = "block";
            commentInput.classList.add("error");
            return;
        }

        // Si todo está bien, agregar el comentario
        const commentData = {
            name: name,
            comment: comment,
        };

        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(commentData);
        localStorage.setItem("comments", JSON.stringify(comments));

        displayComments();
        commentForm.reset();
    });

    const toggleCommentsBtn = document.getElementById("toggleCommentsBtn");
    toggleCommentsBtn.addEventListener("click", () => {
        const commentsDisplay = document.getElementById("commentsDisplay");
        if (commentsDisplay.style.display === "none") {
            commentsDisplay.style.display = "block";
            toggleCommentsBtn.textContent = "Ocultar Comentarios";
        } else {
            commentsDisplay.style.display = "none";
            toggleCommentsBtn.textContent = "Mostrar Comentarios";
        }
    });

    function displayComments() {
        const commentsDisplay = document.getElementById("commentsDisplay");
        commentsDisplay.innerHTML = "";
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.forEach((commentData) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `<strong>${commentData.name}:</strong> ${commentData.comment}`;
            commentsDisplay.appendChild(commentElement);
        });
    }

    displayComments();
});
