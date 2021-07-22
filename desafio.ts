// crear las clases Edificio, Piso y Departamento aquí
class Departamento{
    nombreDepto: string
    constructor(nombreDepto: string){
        this.nombreDepto = nombreDepto
    }
    getName(){
        return this.nombreDepto
    }
}
class Piso{
    nombrePiso: string
    departa: Departamento[] // = [] 
    constructor(nombrePiso: string){
        this.nombrePiso = nombrePiso
        this.departa = []
    }
    pushDepartamento(depart : Departamento){
        this.departa.push(depart);
    }
    getDepartamentos(): Departamento[]{
        return this.departa;
    }

}
class Edificio{
    pisos: Piso[]
    constructor(pisos: Piso[]){
        this.pisos = pisos
    }
    getDepartamentosByPiso(nombreDePiso:string){
        const pisoEncontrado = this.pisos.find(p=>p.nombrePiso == nombreDePiso);
        return pisoEncontrado.getDepartamentos();
    }
    addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
        const pisoEncontrado = this.pisos.find(p=>p.nombrePiso == nombreDePiso);
        return pisoEncontrado.pushDepartamento(departamento);
    }
    

}


// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main2() {
    testClaseEdificio();
  }
  main2();

