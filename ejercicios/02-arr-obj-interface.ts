let habilidades: string[] = ['nombre', 'bash', 'counter', '100'];

console.log(habilidades);

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: 'strider',
  hp: 100,
  habilidades: ['Bash', 'Counter', 'Healing'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);
