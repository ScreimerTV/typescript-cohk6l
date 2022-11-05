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

const detalles: Detalles = {
  autor: 'Ed Sheeran',
  anio: 2015,
};

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mes',
  detalles: detalles,
};

for()

console.log(reproductor);
