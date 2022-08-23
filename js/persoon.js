"use strict";

export class Persoon {
  #naam;
  #tag;
  #geboortedatum;

  constructor(naam, tag, geboortedatum) {
    this.#naam = naam;
    this.#tag = tag;
    this.#geboortedatum = geboortedatum;
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
}
