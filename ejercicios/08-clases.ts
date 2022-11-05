class PersonalNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonalNormal {
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, 'New York');
    this.alterEgo = alterEgo;
  }
}

const iroman = new Heroe('asdasd', 40, 'Toni Stark');
console.log(iroman);
