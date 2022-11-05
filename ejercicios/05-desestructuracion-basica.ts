interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const detallesObject: Detalles = {
  autor: 'Ed Sheeran',
  anio: 2015,
};

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mes',
  detalles: detallesObject,
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { anio, autor } = detalles;

/* console.log('El valor del volumen es : ' + volumen);
console.log('El valor del segundo es :' + segundo);
console.log('El valor del cancion es :' + cancion);
console.log('El valor del año es :' + anio);
console.log('El valor del autor es :' + autor); */

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;

/* console.log('Personaje 1:', p1);
console.log('Personaje 2:', p2); */
console.log('Personaje 3:', p3);
