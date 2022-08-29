"use strict";

import { Persoon } from "./persoon.js";
import { PersoonRepository } from "./persoonRepository.js";

class Application {
  #persoonRepo = new PersoonRepository();

  addPerson(naam, tag, date) {
    this.#persoonRepo.addPersoon(new Persoon(naam, tag, date));
    this.personenToHTML();
  }

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

function addPersonToHTML() {
  document.getElementById("cards").insertAdjacentHTML(
    "beforeend",
    `<div class="menu-card">
  <div class="menu-title"><h2>Voeg persoon toe</h2></div>
  <div class="menu-body">
    <table>
      <tr>
        <td><label for="name">Naam:</label></td>
        <td><input type="text" name="name" id="name"/></td>
      </tr>
      <tr>
        <td><label for="tag">Tag:</label></td>
        <td>
          <select name="tag" id="tag_select">
            <option value="">---</option>
            <option value="family">Family</option>
            <option value="friend">Friend</option>
            <option value="lover">Lover</option>
          </select>
        </td>
      </tr>
      <tr>
        <td><label for="date">Geboortedag:</label></td>
        <td><input type="date" name="date" id="date_select" /></td>
      </tr>
    </table>
    <div class="just">
      <input
        type="button"
        class="btn btn-yellow"
        id="add_person_btn"
        value="VOEG TOE"
      />
      <input
        type="button"
        class="btn btn-grey"
        id="cancel_btn"
        value="ANNULEER"
      />
    </div>
  </div>
</div>`
  );
}

function hide(element) {
  element.classList.add("hide-add-menu");
}

function show(element) {
  element.classList.remove("hide-add-menu");
}

function init() {
  const app = new Application();
  app.personenToHTML();

  const dropdown = document.getElementById("tagSelect");
  dropdown.onchange = () => {
    app.personenToHTML(dropdown.value);
  };

  const add_btn = document.getElementById("add_btn");
  const cards = document.getElementById("cards");
  add_btn.addEventListener("click", (e) => {
    hide(add_btn);
    hide(dropdown);
    cards.innerHTML = "";
    addPersonToHTML();
    const name = document.getElementById("name");
    const tag = document.getElementById("tag_select");
    const date = document.getElementById("date_select");

    const add_persoon_btn = document.getElementById("add_person_btn");
    const cancel_btn = document.getElementById("cancel_btn");

    add_persoon_btn.onclick = () => {
      if (name.value && date.value) {
        app.addPerson(name.value, tag.value, date.value);
        show(add_btn);
        show(dropdown);
        app.personenToHTML();
      }
    };

    cancel_btn.onclick = () => {
      show(add_btn);
      show(dropdown);
      app.personenToHTML();
    };
  });
}

window.onload = init();
