// Task 7 & 9: Add recommendation dynamically with confirmation pop-ups
    function addRecommendation() {
      const textEl = document.getElementById("recText");
      const authorEl = document.getElementById("recAuthor");
      const listEl = document.getElementById("recommendations-list");

      const text = textEl.value.trim();
      const author = authorEl.value.trim();

      if (!text || !author) {
        alert("Please enter both recommendation text and author details.");
        return;
      }

      const confirmAdd = confirm("Do you want to submit this recommendation?");
      if (!confirmAdd) return;

      const card = document.createElement("div");
      card.className = "recommendation-card";

      const p = document.createElement("p");
      p.textContent = `"${text}"`;

      const h4 = document.createElement("h4");
      h4.textContent = `- ${author}`;

      card.appendChild(p);
      card.appendChild(h4);
      listEl.appendChild(card);

      textEl.value = "";
      authorEl.value = "";

      alert("Thank you! Your recommendation has been submitted successfully.");
    }

    document.getElementById("submitRec").addEventListener("click", addRecommendation);