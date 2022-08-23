"use strict";

import { PersoonRepository } from "./persoonRepository.js";

class Application {
  #persoonRepo = new PersoonRepository();

  personenToHTML() {
    const cards = document.getElementById("cards");
    this.#persoonRepo.personen.forEach((p) => {
      cards.insertAdjacentHTML(
        "beforeend",
        `<div class="card" id="${p.naam.toLowerCase()}">
      <div class="card-title">
        <div class="card-title-wrapper">
          <span class="person-name">${p.naam.toUpperCase()}</span>
          <span class="tag" data-tag="${p.tag}">${this.getTageDisplay(
          p.tag
        )}</span>
        </div>
        <span class="birthdate">${p.geboortedatum}</span>
      </div>
      <div class="card-body">Birthday in ${p.getDaysUntillBirthday()} days!</div>
    </div>`
      );
    });
  }

  getTageDisplay(string) {
    let s = string.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}

function init() {
  const app = new Application();
  app.personenToHTML();
}

window.onload = init();
