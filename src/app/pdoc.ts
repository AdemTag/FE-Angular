export class Pdoc {
  id : number;
  nom : string;
  session : number;
  date : number;
  semaine : number;
  image : string;

  constructor(
    id: number =100,
    nom: string = '',
    session: number = 100,
    date: number = 100,
    semaine: number = 10,
    image: string = '/assets/xxx.xxx',
  ) {
    this.id = id;
    this.nom = nom;
    this.session = session;
    this.date = date;
    this.semaine = semaine;
    this.image =image;
  }
}
