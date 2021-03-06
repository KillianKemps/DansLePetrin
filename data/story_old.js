var story = {
  "A001": {
    "title": "Échappez-vous ! ",
    "description": "Vous avez moins de 24 heures pour trouver un cadeau pour votre petite amie ! Il faut que vous réussissiez à vous échapper !",
    "conseq_ref": [
      [
        "A002",
        "Vous tentez de distraire votre petite amie en lui faisant croire qu’un OVNI vole derrière elle, tentez de fuir vers un fleuriste",
        "fleuriste"
      ],
      [
        "A003",
        "“Oh regarde ! James Blunt !“ *tenter de fuir vers un bar*",
        "bar"
      ]
    ]
  },
  "A002": {
    "title": "Bien tenté...",
    "description": "Malheureusement votre technique subtile n’a pas eu d’emprise sur votre dulcinée...",
    "conseq_ref": [
      [
        "A001",
        "Réessayer",
        ""
      ]
    ]
  },
  "A003": {
    "title": "Prenez vos repères !",
    "description": "Votre audacieux stratagème a fonctionné. Cependant, il vous faut une idée de cadeau pour votre petite amie. Vous décider de chercher de l’aide, en vous inspirant d’entités supérieures possédant ces connaissances perdues.",
    "conseq_ref": [
      [
        "A004",
        "Vous décidez de consulter un magazine féminin, et vous dirigez donc vers un kiosque à journaux.",
        "kiosque"
      ],
      [
        "A005",
        "Seule une voyante peut vous renseigner sur des sujets si obscurs, et vous décidez de retrouver Irma, au commissariat.",
        "commissariat"
      ]
    ]
  },
  "A004": {
    "title": "Une lecture instructive",
    "description": "Vous devez choisir quel magazine vous choisissez pour vous aider",
    "conseq_ref": [
      [
        "A006",
        "Vous choisissez d’acheter fémina, qui vous conseille de vous rendre à une bijouterie.",
        "kiosque"
      ],
      [
        "A007",
        "Vous préférez lire Dragon Ball Z",
        "kiosque"
      ]
    ]
  },
  "A005": {
    "title": "Une voyante lucide",
    "description": "Après\n avoir retrouvé Madame Irma au commisariat, celle ci vous prédit votre \navenir et vous envoie directement vers une bijouterie qu’elle a vue dans\n une de ses visions.",
    "conseq_ref": [
      [
        "A006",
        "Vous vous rendez directement à la bijouterie. Les voyantes ont toujours raison.",
        "bijouterie"
      ]
    ]
  },
  "A006": {
    "title": "Tomber à pic",
    "description": "Vous\n croisez votre patron dans la rue avant d’atteindre la bijouterie. \nCelui-ci, surpris de vous voir, vous annonce qu’il tente à tous prix \nd’échapper à sa femme. Il vous demande de l’aider.",
    "conseq_ref": [
      [
        "A008",
        "Vous refusez et tentez tout de même de fuir vers la bijouterie",
        "bijouterie"
      ],
      [
        "A009",
        "Vous\n acceptez de l’aider. Par réflexe, votre patron vous demande un café, \npuis de finir 3 dossiers en retard et aussi d’aller faire ses courses.",
        "café"
      ]
    ]
  },
  "A007": {
    "title": "It’s over 9000 !",
    "description": "Après\n avoir lu l’intégralité des dragon ball Z, vous reprenez conscience de \nvotre environnement, et croisez avec stupeur le regard de votre petite \namie, qui vous attend devant le kiosque. Elle vous fait comprendre qu’il\n est temps de retourner aller faire du shopping….",
    "conseq_ref": [
      [
        "A001",
        "Vous posez gentillement votre manga, et suivez votre petite amie…",
        "kiosque"
      ]
    ]
  },
  "A008": {
    "title": "Juste une !",
    "description": "Pendant votre fuite, vous croisez vos amis, qui se dirigent vers un bar. Ils vous proposent de les accompagner.",
    "conseq_ref": [
      [
        "A010",
        "Vous préférez tout de même accomplir votre quête en priorité, et vous continuez votre route pour la bijouterie",
        "bijouterie"
      ],
      [
        "A011",
        "Après tout, une petite bière pour la route, ca ne fait pas de mal ! Vous vous dirigez vers le bar le plus proche avec vos amis.",
        "bar"
      ]
    ]
  }
};