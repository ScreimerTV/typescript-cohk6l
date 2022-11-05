function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    reportingURL = 'http://www...';
  };
}

@reportableClassDecorator
class MiSuperClase {
  public miPropiedad: string = 'asasdas';
  imprimir() {
    console.log('Hola Mundo');
  }
}

console.log(MiSuperClase);
