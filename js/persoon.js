"use strict";

export class Persoon {
  #naam;
  #tag;
  #geboortedatum;

  constructor(naam, tag, geboortedatum) {
    this.#naam = naam;
    this.#tag = tag;
    if (geboortedatum.includes("-")) {
      this.#geboortedatum = geboortedatum.split("-").reverse().join("/");
    } else {
      this.#geboortedatum = geboortedatum;
    }
  }

  get naam() {
    return this.#naam;
  }
  get tag() {
    return this.#tag;
  }
  get geboortedatum() {
    return this.#geboortedatum;
  }

  getDaysUntillBirthday() {
    const date_1 = new Date(this.#geboortedatum);
    const date_2 = new Date();

    let difference = date_1.getTime() - date_2.getTime();

    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));

    while (totalDays < 0) {
      date_1.setFullYear(date_1.getFullYear() + 1);

      difference = date_1.getTime() - date_2.getTime();
      totalDays = Math.ceil(difference / (1000 * 3600 * 24));
    }
    return totalDays;
  }

  getAge() {
    const date_1 = new Date(this.#geboortedatum);
    const date_2 = new Date();

    return date_2.getFullYear() - date_1.getFullYear();
  }

  getHtmlString() {
    if (
      this.#tag.toLowerCase() === "family" ||
      this.#tag.toLowerCase() === "lover" ||
      this.#tag.toLowerCase() === "friend"
    ) {
      return `<div class="card" id="${this.#naam.toLowerCase()}">
      <div class="card-title">
        <div class="card-title-wrapper">
          <span class="person-name">${this.#naam.toUpperCase()}</span>
               <span class="tag" data-tag="${this.#tag}">${this.getTageDisplay(
        this.#tag
      )}</span>
              
        </div>
        <span class="birthdate">${this.#geboortedatum}</span>
      </div>
      <div class="card-body">${this.getAge()}th birthday in ${this.getDaysUntillBirthday()} days!</div>
    </div>`;
    } else {
      return `<div class="card" id="${this.#naam.toLowerCase()}">
      <div class="card-title">
        <div class="card-title-wrapper">
          <span class="person-name">${this.#naam.toUpperCase()}</span>
               
        </div>
        <span class="birthdate">${this.#geboortedatum}</span>
      </div>
      <div class="card-body">${this.getAge()}th birthday in ${this.getDaysUntillBirthday()} days!</div>
    </div>`;
    }
  }

  getTageDisplay(string) {
    let s = string.toLowerCase();
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
