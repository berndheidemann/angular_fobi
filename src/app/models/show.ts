export class Show {


  // Fragezeichen bedeutet, dass der Parameter optional ist
  // gültige Aufrufe des Konstruktors wären:
  //   -- new Show();
  //   -- new Show(1);
  //   -- new Show(1, 'Breaking Bad')
  //   -- new Show(1, 'Breaking Bad', 'tolle Serie')
  //   -- new Show(1, 'Breaking Bad', 'tolle Serie', 'Bild.jpg')

  // Die Instanzvariablen werden in jedem Fall dennoch angelegt
  constructor(
    public id?: number,
    public title?: string,
    public summary?: string,
    public image?: string) {
  }

}



