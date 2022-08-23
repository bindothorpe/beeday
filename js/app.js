"use strict";

import { PersoonRepository } from "./persoonRepository.js";

class Application {
  #persoonRepo = new PersoonRepository();

  personenToHTML(tag) {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    this.#persoonRepo
      .getPersonen(tag)
      .sort((a, b) => b.getDaysUntillBirthday() - a.getDaysUntillBirthday())
      .reverse()
      .forEach((p) => {
        cards.insertAdjacentHTML("beforeend", p.getHtmlString());
      });
  }
}

function init() {
  const app = new Application();
  app.personenToHTML();

  const dropdown = document.getElementById("tagSelect");
  dropdown.onchange = () => {
    app.personenToHTML(dropdown.value);
  };
}

window.onload = init();
