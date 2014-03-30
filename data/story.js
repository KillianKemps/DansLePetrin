var story = {
  "A001": {
    "title": "Échappez-vous ! ",
    "description": "Vous avez moins de 24 heures pour trouver un cadeau pour votre petite amie ! Il vous que vous réussissiez à vous échapper !",
    "conseq_ref": [
      ["A002","Vous tentez de distraire votre petite amie en lui faisant croire qu’un OVNI vole derrière elle. *tenter de fuir vers un fleuriste*", "fleuriste"],
      ["A003","“Oh regarde ! James Blunt !“ *tenter de fuir vers un bar*", "bar"]
    ]
  },
  "A002": {
    "title": "Bien tenté...",
    "description": "Malheureusement votre technique subtile n’a pas eu d’emprise sur votre dulcinée...",
    "conseq_ref": [
      ["A001","Réessayer", ""]
    ]
  },
  "A003": {
    "title": "Prenez vos repères !",
    "description": "Votre audacieux stratagème a fonctionné. Cependant, il vous faut une idée de cadeau pour votre petite amie. Vous décider de chercher de l’aide, en vous inspirant d’entités supérieures possédant ces connaissances perdues.",
    "conseq_ref": [
      ["A004","Vous décidez de consulter un magazine féminin, et vous dirigez donc vers un kiosque à journaux.", "kiosque"],
      ["A005","Seule une voyante peut vous renseigner sur des sujets si obscurs, et vous décidez de retrouver Irma, au commissariat.", "commissariat"]
    ]
  }
};