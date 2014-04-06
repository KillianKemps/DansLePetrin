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
        "N’ayant pas trop envie de encore vous retrouvez sous le bureau de votre patron pour garder votre emploi, vous vous résignez a passer à la mairie.",
        "mairie"
      ]
    ]
  },
  "A007": {
    "title": "It’s over 9000 !",
    "description": "Après avoir lu l’intégralité des dragon ball Z, vous reprenez conscience de votre environnement, et croisez avec stupeur le regard de votre petite amie, qui vous attend devant le kiosque. Elle vous fait comprendre qu’il est temps de retourner aller faire du shopping….",
    "conseq_ref": [
      [
        "A001",
        "Vous posez gentillement votre manga, et suivez votre petite amie…",
        "reset"
      ]
    ]
  },
  "A008": {
    "title": "F.R.I.E.N.D.S",
    "description": "Alors que vous vous dirigez vers la bijouterie, vous croisez vos amis, qui se dirigent vers un bar. Ils vous proposent de les accompagner.",
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
    "description": "Une fois à la mairie, vous croisez votre collègue Jean-Patrick. Celui ci est encore en train de travailler un dimanche. Une idée vous croise la tête…",
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
  "A011": {
    "title": "Juste une !",
    "description": "Après quelques (dizaines) de verres, votre regard s’arrête sur l’horloge. Celle-ci semble vouloir vous rappeler que l’heure tourne, et qu’il ne reste plus beaucoup de temps avant le moment fatidique.",
    "conseq_ref": [
      [
        "A017",
        " Vous tentez d’utiliser vos hypothétiques pouvoirs psychiques pour faire exploser l’horloge, pour lui régler son compte. Elle l’a cherché.",
        "moi"
      ],
      [
        "A005",
        "Vous êtes alcoolisé et votre esprit est embrouillé. Votre regard tombe à présent sur une pub pour une voyante, Irma, qui se trouverait près du commissariat. Vu votre état, une voyante serait sûrement plus lucide que vous sur la situation. Vous vous rendez au commissariat chercher son aide.",
        "commissariat"
      ]
    ]
  },
  "A012": {
    "title": "Et là, c'est le drame...",
    "description": "Tout le monde sait que demander à quelqu’un d’effectuer une tâche un dimanche relève de la pure folie ; vous tombez donc sous le coup d’une flemmite aigüe, ce qui entraîne une rupture de la motivation et vous trouvez dans l’incapacité la plus totale d’être productif.",
    "conseq_ref": [
      [
        "A999",
        "Votre cerveau commençant a vous lâcher, vous vous demandez si vous arracher un bras serait une bonne idée pour arrêter de travailler, et essayez donc ce stratagème.",
        "moi"
      ],
      [
        "A011",
        "Vous tentez de ramper jusqu'au bar le plus proche; juste histoire de faire le plein.",
        "bar"
      ]
    ]
  },
  "A014": {
    "title": "Au musée",
    "description": "Vous voila à présent au musée. En entrant, la porte derrière vous semble se fermer à clef. Étrange… Vous ne voyez personne dans les alentours, aucune sortie… Vous êtes enfermé.\nAu vu des évènements récents, vous vous dites que rester un peu de temps ici au calme pourrait s’avérer sage. Il s’avère justement qu’une conférence sur la langouste va bientôt démarrer. ",
    "conseq_ref": [
      [
        "A030",
        "Vous prenez sur vous, et faites ce pas décisif vers la salle. Tel un héros, vous vous dirigez vers cette conférence, où vous risquerez fortement de perdre la vie, ou au moins beaucoup de temps. Mais il faut le faire. Pour votre petite amie. Pour vous. Pour tout ce que vous avez enduré jusque là.\n",
        "moi"
      ],
      [
        "A999",
        "Après tout ce que vous avez enduré, votre esprit affaibli ne supporte pas une telle nouvelle ; vous vous mettez a errer dans les couloirs en criant sur des statues et en insultant des momies. Vous décidez alors de devenir un indien, enlevez vos vêtements, enfilez un pagne et rentrez dans un tipi. Un policier vous ordonne de sortir, mais vous préférez tout de même le charger avec votre cheval en bois, et tenter de l’assomer avec un gourdin. \nLe policier sort alors son arme, mais vous comptez sur la force de vos super pouvoirs, des grands dieux indoux et surtout beaucoup de chance pour que la balle ne vous atteigne pas.\n",
        "reset"
      ]
    ]
  },
  "A017": {
    "title": "La déception",
    "description": "Vos pouvoirs psychiques n’ont malheureusement pas eu d’emprise sur l’horloge, ni même sur le cours du temps.",
    "conseq_ref": [
      [
        "A014",
        "Abattu par le non-fonctionnement de vos super pouvoirs, vous décidez de vous rendre dans un musee pour trainer, hagard et plongé dans la désillusion.",
        "musee"
      ],
      [
        "A200",
        "Vous ne vous dégonflez pas, et décidez de lui montrer, à cette horloge, l’étendue réelle de vos pouvoirs déchainés !",
        "moi"
      ]
    ]
  },
  "A030": {
    "title": "La langouste.",
    "description": "\"Mais vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise langouste. Moi si je devais résumer ma vie, aujourd’hui avec vous, je dirais que c’est d´abord des langoustes, des langoustes qui m’ont tendu la main peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi. Et c’est assez curieux de se dire que les langoustes, les langoustes forgent une destinée. Parce que quand on a le goût de la langouste, quand on a le goût de la langouste bien faite, la belle langouste, parfois on ne trouve pas la langouste en face, je dirais la langouste qui vous aide à avancer. Alors ce n’est pas mon cas, comme je disais là, puique moi au contraire j’ai pu, et je dis merci à la langouste, je lui dis merci, je chante la langouste, je danse la langouste, je ne suis que langouste. Et finalement quand beaucoup de langoustes me disent aujourd’hui \"Mais comment fais-tu pour avoir cette langouste ? \" et bien je leur réponds très simplement, je leur dit : \"C’est ce goût de la langouste\", ce goût donc, qui m’a poussé aujourd’hui à entreprendre une construction de langouste, mais demain qui sait ? Peut-être simplement à me mettre au service de la langouste, à faire le don, le don de la langouste.\"\n\n",
    "conseq_ref": [
      [
        "A031",
        "D'accord, très bien.",
        "moi"
      ]
    ]
  },
  "A031": {
    "title": "Libération.",
    "description": "C'est avec un cerveau détruit, un esprit en miette et une conscience souillée que vous sortez du musée. Vous êtes pourtant sur la dèrnière ligne droite. Vous le savez. Il vous faut faire un dernier effort.",
    "conseq_ref": [
      [
        "A032",
        "Vous vous rendez à la bijouterie.",
        "moi"
      ]
    ]
  },
  "A032": {
    "title": "Révélations.",
    "description": "Vous posez enfin, ému, un pas dans la bijouterie. La femme derrière la caisse vous interpelle alors ; il s'agit d'une de vos camarade de classe du lycée. Bien que content de la voir, vous souhaitez surtout acheter une f**** bague et partir.\nCelle-ci vous fait d'ailleurs remarquer qu'acheter un bijou pour votre petite amie une veille de votre propre anniversaire est trop mignon. \nLe mot \"propre\" employé dans ce contexte vous marque. Vous demandez alors à votre amie caissière de s'expliquer. \n\"Mais oui enfin ! C'est ton anniversaire demain ! Ne me dis pas que tu avais oublié ?!\"",
    "conseq_ref": [
      [
        "A033",
        "Prendre conscience que vous êtes très, très bête.",
        "moi"
      ]
    ]
  },
  "A033": {
    "title": "Dans le pétrin.",
    "description": "C'est au final votre propre anniversaire demain. Une journée calme et paisible, synonyme de détente et relaxation. Vous avez cependant passé la journée la plus longue de votre vie, la plus pénible.\n A l'annonce de cette nouvelle, les derniers neuronnes présents dans votre tête disparaissent dans un néan infini.",
    "conseq_ref": [
      [
        "A999",
        "Vous pendre.",
        "reset"
      ],
      [
        "A034",
        "Rester planté la, jusqu'a ce que le sable, la poussière et le temps emporte votre misérable dépouille",
        "moi"
      ]
    ]
  },
  "A034": {
    "title": "Fin ! ",
    "description": "Merci d'avoir joué à Dans le pétrin ! ",
    "conseq_ref": [
      [
        "A001",
        "N'hésitez pas à réessayer avec de nouveaux scénarios !",
        "reset"
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
    "description": "Cette fois c’est sur ! Vous l’avez VU ! Vous l’avez senti ! Elle a bougé, elle a ressenti votre immense et redoutable pouvoir ! Il vous FAUT continuer, pour votre vengeance envers cette horloge !",
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
    "description": " CA Y EST !!! CA Y EST !!! ELLE BOUGE !!! ELLE SOUFFRE !!! ENFIN ! UN DERNIER COUP ET ELLE VA EXPLOSER !!!!",
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
        "reset"
      ]
    ]
  }
};