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
        "Recommencer.",
        "reset"
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
        "bijouterie"
      ],
      [
        "A007",
        "Vous préférez lire Dragon Ball Z",
        "moi"
      ]
    ]
  },
  "A005": {
    "title": "Une voyante lucide",
    "description": "Arrivé au commissariat, vous apercevez la roulotte d’Irma vide. Cependant vous pouvez la distinguer, menottes aux bras, dans le commissariat tout proche. Avide de réponses, vous allez la voir. Vous vous entretenez avec elle pendant un cours instant avant que la police ne la déplace. Tout ce que vous avez retenu est le mot “bijouterie”.",
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
    "description": "Vous croisez votre patron dans la rue avant d’atteindre la bijouterie. Celui-ci, surpris de vous voir, se dirige vers vous pour vous rappeler toutes les tâches qu’il reste à faire avant lundi. Il vous demande donc de vous rendre à la mairie pour régler des problèmes administratifs...",
    "conseq_ref": [
      [
        "A008",
        "Vous refusez et tentez tout de même de fuir vers la bijouterie",
        "bijouterie"
      ],
      [
        "A009",
        "N’ayant pas trop envie de encore vous retrouvez sous le bureau de votre patron, vous vous résignez a passer à la mairie",
        "mairie"
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
        "moi"
      ]
    ]
  },
  "A008": {
    "title": "Juste une !",
    "description": "Alors que vous vous dirigez vers la bijouterie, vous croisez vos amis, qui se dirigent vers un bar. Ils vous proposent de les accompagner.\n",
    "conseq_ref": [
      [
        "A010",
        "Bien qu’une bière vous fasse envie, des souvenirs de soirées récentes passées avec vos amis refont surface ; vous ne vous souvenez d’ailleurs plus grand chose après avoir pris ce verre qui contenait une pillule, une aspirine d’après vos amis. Seul un certain mal au fessier persite de cette soirée étrange. Votre intuition vous pousse à passer votre chemin, et continuer en direction de la bijouterie.",
        "bijouterie"
      ],
      [
        "A011",
        "Vos pieds et votre estomac ayant apparemment déjà prit la décision pour vous par pur réflexe en réponse à l’appel de la bière, vous vous dirigez vers un bar avec votre bande de potes.",
        "bar"
      ]
    ]
  },
  "A009": {
    "title": "Théorie de l'évolution",
    "description": "Une fois à la mairie, vous croisez votre collègue Jean-Patrick. Celui ci est encore en train de travailler un dimanche...",
    "conseq_ref": [
      [
        "A012",
        "Votre raison et votre coeur vous empêchent de reléguer votre tâche, et vous préférez donc vous y atteler. Une fois finie, vous retournez voir votre patron",
        "moi"
      ],
      [
        "A008",
        "Vous lui remettez la mission que votre patron vous a confié, et vous pouvez donc vous rediriger vers la bijouterie pour finir votre mission.",
        "bijouterie"
      ]
    ]
  },
  "A010": {
    "title": "Fuyez pauvre fou",
    "description": "Le fait que vos “amis” vous menacent à présent avec des couteaux, des tessons de bouteilles, et un sex toy vous indique qu’ils n’ont pas prévu de vous laisser partir avant de s’amuser un peu avec vous.",
    "conseq_ref": [
      [
        "A999",
        "Vous leur faites face. Fuir, c’est pour les boys band et les eunuques.",
        "moi"
      ],
      [
        "A014",
        "Vous n’avez jamais vraiment été pour la violence depuis que le gros rémi vous avait volé votre croissant en 5e à grands coups de classeur Pokémon. La fuite vous semble donc être une bonne option, et le plus vite sera le mieux. Le musée tout proche semble donc une bonne option.",
        "musee"
      ]
    ]
  },
  "A012": {
    "title": "Et là, c'est le drame...",
    "description": "Tout le monde sait que demander à quelqu’un d’effectuer une tâche un dimanche relève de la pure folie ; vous tombez donc sous le coup d’une flemmite aigüe, ce qui entraîne une rupture de la motivation et vous trouvez dans l’incapacité la plus totale d’être productif.",
    "conseq_ref": [
      [
        "A999",
        "Vous vous rendez à l'hôpital pour vous faire soigner.",
        "hopital"
      ],
      [
        "A011",
        "Vous tentez de ramper jusqu'au bar le plus proche; juste histoire de faire le plein.",
        "bar"
      ]
    ]
  },
  "A017": {
    "title": "La déception",
    "description": "Vos pouvoirs psychiques n’ont malheureusement pas eu d’emprise sur l’horloge, ni même sur le cours du temps.",
    "conseq_ref": [
      [
        "A018",
        "Vous vous résignez à retourner accomplir votre tâche, et vous vous dirigez vers un supermarché, histoire de trainer dans les rayons et essayer de trouver un paquet de gâteaux.",
        "supermarche"
      ],
      [
        "A200",
        "Vous ne vous dégonflez pas, et décidez de lui montrer, à cette horloge, l’étendue réelle de vos pouvoirs déchainés !",
        "moi"
      ]
    ]
  },
  "A200": {
    "title": "Mal de crâne",
    "description": "Pendant votre concentration, il vous a semblé voir l’horloge réagir a votre pouvoir impressionnant. Vous devez vous assurer que vos pouvoirs sont responsables de cela...",
    "conseq_ref": [
      [
        "A201",
        "Continuer",
        "moi"
      ]
    ]
  },
  "A201": {
    "title": "Mal de crâne 2",
    "description": "Cette fois c’est sur ! Vous l’avez VU ! Vous l’avez senti ! Elle a bougé, elle a ressenti votre immense et redoutable pouvoir ! Il vous FAUT continuer, pour votre vengeance envers cette horloge !\n",
    "conseq_ref": [
      [
        "A202",
        "Continuer",
        "moi"
      ]
    ]
  },
  "A202": {
    "title": "Mal de crâne 3",
    "description": "OUI !!! Vous y êtes presque ! Il est trop tard pour faire marche arrière, et les cris de cette horloge ne lui éviteront pas une mort certaine !",
    "conseq_ref": [
      [
        "A203",
        "Continuer",
        "moi"
      ]
    ]
  },
  "A203": {
    "title": "Mal de crâne 4",
    "description": " CA Y EST !!! CA Y EST !!! ELLE BOUGE ! UN DERNIER COUP ET ELLE VA EXPLOSER !!!!",
    "conseq_ref": [
      [
        "A016",
        "Un certain mal de tête se fait ressentir, et l'once de conscience qu'il vous reste vous fait réaliser qu'il serait temps de penser à respirer. Vous considérez malin de vous diriger vers un hôpital au plus vite.",
        "hopital"
      ],
      [
        "A999",
        "Continuer",
        "moi"
      ]
    ]
  },
  "A999": {
    "title": "MEURS",
    "description": "Vous êtes mort.",
    "conseq_ref": [
      [
        "A001",
        "Recommencer",
        "moi"
      ]
    ]
  }
}



;