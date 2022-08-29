"use strict";

import { Persoon } from "./persoon.js";

export class PersoonRepository {
  #personen = [];

  constructor() {
    this.#init();
  }

  addPersoon(persoon) {
    this.#personen.push(persoon);
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

  getPersonen(tag) {
    if (tag) {
      return this.#personen.filter((p) => p.tag === tag);
    }

    return this.#personen;
  }

  #init() {
    this.addPersoon(new Persoon("Seppe", "friend", "07/22/2001"));
    this.addPersoon(new Persoon("Audrey", "lover", "07/10/1999"));
    this.addPersoon(new Persoon("Rachel", "family", "01/07/1981"));
    this.addPersoon(new Persoon("Moé", "friend", "09/06/2001"));
    this.addPersoon(new Persoon("Lena", "friend", "05/07/2002"));
    this.addPersoon(new Persoon("Charlotte", "friend", "09/20/2005"));
    this.addPersoon(new Persoon("Robin", "family", "02/5/1975"));
    this.addPersoon(new Persoon("Mambi", "family", "09/3/1998"));
    this.addPersoon(new Persoon("Laïs", "friend", "09/01/2002"));
    this.addPersoon(new Persoon("Bindo", "", "07/10/2001"));
    this.addPersoon(new Persoon("Jo", "friend", "11/21/1973"));
  }
}
