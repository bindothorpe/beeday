"use strict";

import { Persoon } from "./persoon.js";

export class PersoonRepository {
  #personen = [];

  constructor() {
    this.#init();
  }

  addPersoon(persoon) {
    this.#personen.push(persoon);
    console.log("Persoon added");
  }

  removePersoon(persoon) {
    if (this.#personen.includes(persoon))
      this.#personen = this.#personen.splice(
        this.#personen.indexOf(persoon),
        1
      );
  }

  get personen() {
    return this.#personen;
  }

  #init() {
    this.addPersoon(new Persoon("Seppe", "friend", "07/22/2001"));
    this.addPersoon(new Persoon("Audrey", "lover", "07/10/1999"));
    this.addPersoon(new Persoon("Rachel", "family", "01/07/1981"));
    this.addPersoon(new Persoon("Moé", "friend", "09/06/2001"));
  }
}
