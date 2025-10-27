const receitas = [
  {
    id: 1,
    titulo: "Ovo Cozido",
    descricao: "Clássico e nutritivo, o ovo cozido é prático e ideal para qualquer refeição do dia. Gema cremosa ou firme, você escolhe o ponto.",
    imagem: "https://blog.gsuplementos.com.br/wp-content/uploads/2022/12/ovo.jpg",
    trailer: "https://www.youtube.com/embed/pl_WLJrWtY8",
    tempoPreparo: "10 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 1, unidade: "unidade" },
      { nome: "água", quantidade: 500, unidade: "ml" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Preparar água", instrucoes: "Coloque a água em uma panela e adicione sal.", tempo: "1 min" },
      { etapa: "Cozinhar ovo", instrucoes: "Coloque o ovo na água fria, leve ao fogo médio e, após começar a ferver, cozinhe por 8 minutos para gema firme.", tempo: "8 min" },
      { etapa: "Resfriar", instrucoes: "Retire o ovo e mergulhe em água fria por 1 minuto antes de descascar.", tempo: "1 min" }
    ],
    observacoes: "Para gema mole, reduza o tempo de cozimento para 5-6 minutos.",
    tags: ["cozido"]
  },
  {
    id: 2,
    titulo: "Ovo Frito Clássico",
    descricao: "Simples, dourado nas bordas e com gema cremosa no centro. Ideal para café da manhã ou lanche rápido.",
    imagem: "https://static.itdg.com.br/images/640-auto/fda2c171c66378ef84edf0d74b816376/o-ingrediente-secreto-para-deixar-o-ovo-frito-mais-saboroso.jpg",
    trailer: "https://www.youtube.com/embed/FtvzrRgDG1E",
    tempoPreparo: "5 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 1, unidade: "unidade" },
      { nome: "óleo ou manteiga", quantidade: 1, unidade: "colher (chá)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Aquecer frigideira", instrucoes: "Aqueça o óleo ou manteiga em fogo médio.", tempo: "1 min" },
      { etapa: "Fritar ovo", instrucoes: "Quebre o ovo cuidadosamente na frigideira e frite até a clara firmar e a gema atingir o ponto desejado.", tempo: "3-4 min" },
      { etapa: "Finalizar", instrucoes: "Tempere com sal a gosto e sirva imediatamente.", tempo: "1 min" }
    ],
    observacoes: "Para gema mais dura, vire o ovo após 2 minutos e frite do outro lado por mais 1-2 minutos.",
    tags: ["frito"]
  },
  {
    id: 3,
    titulo: "Ovos Mexidos Cremosos",
    descricao: "Textura macia e sabor amanteigado — o segredo está em mexer devagar, garantindo cremosidade.",
    imagem: "https://guiadacozinha.com.br/wp-content/uploads/2024/07/Ovo-mexido-cremoso.jpg",
    trailer: "https://www.youtube.com/embed/DNVeRo34Efg",
    tempoPreparo: "7 min",
    porcao: "2 porções",
    ingredientes: [
      { nome: "ovo", quantidade: 3, unidade: "unidades" },
      { nome: "manteiga", quantidade: 1, unidade: "colher (sopa)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "pimenta-do-reino", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Bater ovos", instrucoes: "Bata os ovos com sal e pimenta até ficarem homogêneos.", tempo: "1 min" },
      { etapa: "Derreter manteiga", instrucoes: "Derreta a manteiga em fogo baixo.", tempo: "1 min" },
      { etapa: "Cozinhar ovos", instrucoes: "Adicione os ovos à manteiga e mexa lentamente até obter uma consistência cremosa e uniforme.", tempo: "5 min" }
    ],
    observacoes: "Não cozinhe em fogo alto, isso deixa os ovos secos.",
    tags: ["mexido"]
  },
  {
    id: 4,
    titulo: "Omelete Simples",
    descricao: "Rápida, leve e perfeita para qualquer refeição do dia.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cVukO5lQYRUca3rGGTyXR7li4Bo7k5GluQ&s",
    trailer: "",
    tempoPreparo: "8 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "pimenta-do-reino", quantidade: 1, unidade: "pitada" },
      { nome: "azeite", quantidade: 1, unidade: "colher (chá)" }
    ],
    modoPreparo: [
      { etapa: "Bater ovos", instrucoes: "Bata os ovos com sal e pimenta.", tempo: "1 min" },
      { etapa: "Aquecer frigideira", instrucoes: "Aqueça o azeite em fogo médio.", tempo: "1 min" },
      { etapa: "Cozinhar omelete", instrucoes: "Despeje a mistura na frigideira e cozinhe até dourar dos dois lados.", tempo: "6 min" }
    ],
    observacoes: "",
    tags: ["omelete"]
  },
  {
    id: 5,
    titulo: "Ovo Pochê Tradicional",
    descricao: "Delicado e saudável, ideal para acompanhar torradas, saladas e massas.",
    imagem: "https://blog.mantiqueirabrasil.com.br/wp-content/uploads/2016/05/ovo-poche-scaled-1.jpeg",
    trailer: "https://www.youtube.com/embed/IBm7Sya5YRU",
    tempoPreparo: "6 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo fresco", quantidade: 1, unidade: "unidade" },
      { nome: "água", quantidade: 300, unidade: "ml" },
      { nome: "vinagre branco", quantidade: 1, unidade: "colher (sopa)" }
    ],
    modoPreparo: [
      { etapa: "Aquecer água", instrucoes: "Aqueça a água com vinagre até formar pequenas bolhas (sem ferver).", tempo: "2 min" },
      { etapa: "Cozinhar ovo", instrucoes: "Quebre o ovo em uma tigela e despeje delicadamente na água.", tempo: "3 min" },
      { etapa: "Finalizar", instrucoes: "Retire o ovo com escumadeira e sirva imediatamente.", tempo: "1 min" }
    ],
    observacoes: "Para gema mais mole, cozinhe por 2-3 minutos.",
    tags: ["pochê"]
  },
  {
    id: 7,
    titulo: "Omelete de Queijo",
    descricao: "Cremosa, com o interior derretido e sabor irresistível.",
    imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2022/06/prato-de-omelete-perfeitamente-cozido-com-ervas-frescas-e-queijo-criado-com-ai-generativo8-780x520.jpg",
    trailer: "",
    tempoPreparo: "8 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "queijo ralado", quantidade: 2, unidade: "colheres (sopa)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "orégano", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Preparar ovos", instrucoes: "Bata os ovos com sal, orégano e queijo ralado.", tempo: "2 min" },
      { etapa: "Cozinhar", instrucoes: "Despeje a mistura em frigideira untada e cozinhe em fogo baixo até dourar.", tempo: "6 min" }
    ],
    observacoes: "Para omelete mais cremosa, não cozinhe por muito tempo.",
    tags: ["omelete"]
  },
  {
    id: 8,
    titulo: "Ovo Recheado com Atum",
    descricao: "Petisco proteico e refrescante, ótimo para servir gelado.",
    imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2008/08/Ovos-recheados-com-creme-de-atum.jpg",
    trailer: "",
    tempoPreparo: "15 min",
    porcao: "4 porções",
    ingredientes: [
      { nome: "ovo cozido", quantidade: 4, unidade: "unidades" },
      { nome: "atum", quantidade: 1, unidade: "lata" },
      { nome: "maionese", quantidade: 2, unidade: "colheres (sopa)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Preparar ovos", instrucoes: "Corte os ovos ao meio e retire as gemas.", tempo: "5 min" },
      { etapa: "Preparar recheio", instrucoes: "Misture as gemas com atum e maionese até formar um creme homogêneo.", tempo: "5 min" },
      { etapa: "Rechear e servir", instrucoes: "Recheie as claras com o creme e sirva gelado.", tempo: "5 min" }
    ],
    observacoes: "Pode adicionar salsinha picada para decorar.",
    tags: ["cozido"]
  },
    {
    id: 9,
    titulo: "Ovo de Forno com Legumes",
    descricao: "Colorido, nutritivo e leve — perfeito para almoço ou jantar rápido.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJNBTmu0tuTEs8khdmRy30-nW0oYWg1REJA&s",
    trailer: "",
    tempoPreparo: "20 min",
    porcao: "2 porções",
    ingredientes: [
      { nome: "ovo", quantidade: 3, unidade: "unidades" },
      { nome: "cenoura ralada", quantidade: 1/2, unidade: "xícara" },
      { nome: "tomate picado", quantidade: 1, unidade: "unidade" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "azeite", quantidade: 1, unidade: "colher (chá)" }
    ],
    modoPreparo: [
      { etapa: "Misturar ingredientes", instrucoes: "Em um refratário, misture ovos, cenoura, tomate, sal e azeite.", tempo: "5 min" },
      { etapa: "Assar", instrucoes: "Leve ao forno pré-aquecido a 180°C por 15 minutos até firmar.", tempo: "15 min" }
    ],
    observacoes: "Pode adicionar queijo ralado ou ervas finas para mais sabor.",
    tags: ["assado"]
  },
  {
    id: 11,
    titulo: "Omelete de Espinafre",
    descricao: "Rica em ferro, leve e saborosa, ótima para começar o dia com energia.",
    imagem: "https://www.receiteria.com.br/wp-content/uploads/omelete-de-frango-com-espinafre.jpg",
    trailer: "",
    tempoPreparo: "10 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "espinafre refogado", quantidade: 1/2, unidade: "xícara" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "pimenta-do-reino", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Preparar mistura", instrucoes: "Bata os ovos e misture o espinafre refogado com sal e pimenta.", tempo: "3 min" },
      { etapa: "Cozinhar omelete", instrucoes: "Despeje em frigideira antiaderente untada e cozinhe em fogo baixo até dourar.", tempo: "7 min" }
    ],
    observacoes: "Pode adicionar queijo ralado ou cogumelos para variar.",
    tags: ["omelete"]
  },
  {
    id: 12,
    titulo: "Ovo ao Molho de Tomate",
    descricao: "Simples e reconfortante, com sabor marcante do molho caseiro.",
    imagem: "https://saboresdeisrael.com.br/wp-content/uploads/2018/06/IMG_2367-2.jpg.webp",
    trailer: "",
    tempoPreparo: "15 min",
    porcao: "2 porções",
    ingredientes: [
      { nome: "ovo", quantidade: 4, unidade: "unidades" },
      { nome: "molho de tomate", quantidade: 1, unidade: "xícara" },
      { nome: "azeite", quantidade: 1, unidade: "colher (chá)" },
      { nome: "manjericão", quantidade: 1, unidade: "pitada" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Aquecer molho", instrucoes: "Aqueça o molho de tomate em frigideira com azeite.", tempo: "5 min" },
      { etapa: "Adicionar ovos", instrucoes: "Quebre os ovos sobre o molho, tampe e cozinhe até as claras firmarem.", tempo: "8 min" },
      { etapa: "Finalizar", instrucoes: "Polvilhe manjericão e sirva.", tempo: "2 min" }
    ],
    observacoes: "Gemas podem ficar mais moles ou firmes conforme preferência.",
    tags: ["cozido"]
  },
  {
    id: 13,
    titulo: "Ovo Mexido com Queijo e Presunto",
    descricao: "Cremoso e saboroso, ideal para um café reforçado.",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5D1YuqNZq9S2bAeBHtS1J9tQ9waUC30FHWA&s",
    trailer: "",
    tempoPreparo: "6 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "presunto picado", quantidade: 50, unidade: "g" },
      { nome: "queijo picado", quantidade: 50, unidade: "g" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Bater ovos", instrucoes: "Bata os ovos com sal.", tempo: "1 min" },
      { etapa: "Adicionar recheio", instrucoes: "Acrescente presunto e queijo aos ovos batidos.", tempo: "1 min" },
      { etapa: "Cozinhar", instrucoes: "Cozinhe em fogo baixo mexendo até ficar cremoso e levemente dourado.", tempo: "4 min" }
    ],
    observacoes: "Sirva imediatamente para manter cremosidade.",
    tags: ["mexido"]
  },
  {
    id: 15,
    titulo: "Ovo Mexido com Legumes",
    descricao: "Leve e colorido, combina bem com arroz, torradas ou saladas.",
    imagem: "https://radio93fm.com.br/wp-content/uploads/2021/06/ovos-mexidos-com-legumes-1.jpg",
    trailer: "",
    tempoPreparo: "10 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "cenoura picada", quantidade: 50, unidade: "g" },
      { nome: "abobrinha picada", quantidade: 50, unidade: "g" },
      { nome: "azeite", quantidade: 1, unidade: "colher (chá)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Refogar legumes", instrucoes: "Refogue cenoura e abobrinha em azeite até ficarem macios.", tempo: "5 min" },
      { etapa: "Adicionar ovos", instrucoes: "Acrescente os ovos batidos e cozinhe mexendo até firmar.", tempo: "5 min" }
    ],
    observacoes: "Pode adicionar ervas finas ou queijo ralado para variar.",
    tags: ["mexido"]
  },
  {
    id: 16,
    titulo: "Omelete de Forno com Frango",
    descricao: "Prática, nutritiva e excelente para aproveitar sobras de frango.",
    imagem: "https://i.ytimg.com/vi/02XsY4CgOKs/maxresdefault.jpg",
    trailer: "https://www.youtube.com/embed/02XsY4CgOKs",
    tempoPreparo: "25 min",
    porcao: "3 porções",
    ingredientes: [
      { nome: "ovo", quantidade: 3, unidade: "unidades" },
      { nome: "frango desfiado", quantidade: 1, unidade: "xícara" },
      { nome: "queijo ralado", quantidade: 2, unidade: "colheres (sopa)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Misturar ingredientes", instrucoes: "Misture ovos, frango, queijo e sal em recipiente.", tempo: "5 min" },
      { etapa: "Assar", instrucoes: "Despeje em forma untada e leve ao forno a 180°C por 20 minutos ou até dourar.", tempo: "20 min" }
    ],
    observacoes: "Pode adicionar legumes picados para mais sabor e textura.",
    tags: ["omelete", "assado"]
  },
  {
    id: 17,
    titulo: "Ovo com Bacon",
    descricao: "Clássico irresistível: o sabor defumado do bacon com a cremosidade do ovo.",
    imagem: "https://www.receitasja.com.br/wp-content/uploads/2025/04/ovo-mexido-com-Bacon-e-Tomate-1140x597.jpg",
    trailer: "",
    tempoPreparo: "8 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 1, unidade: "unidade" },
      { nome: "bacon", quantidade: 2, unidade: "fatias" }
    ],
    modoPreparo: [
      { etapa: "Fritar bacon", instrucoes: "Frite o bacon até ficar crocante e solte parte da gordura.", tempo: "5 min" },
      { etapa: "Fritar ovo", instrucoes: "Na mesma frigideira, frite o ovo e sirva com o bacon.", tempo: "3 min" }
    ],
    observacoes: "Para uma versão mais saudável, retire excesso de gordura antes de adicionar o ovo.",
    tags: ["frito"]
  },
  {
    id: 18,
    titulo: "Ovo Gratinado com Queijo",
    descricao: "Ovos cobertos por um creme leve e queijo gratinado, com toque sofisticado.",
    imagem: "https://static.tvgazeta.com.br/uploads/2022/11/gratinda-com-ovos-cozidos-receitas-faceis-baratas.jpg",
    trailer: "",
    tempoPreparo: "15 min",
    porcao: "2 porções",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "creme de leite", quantidade: 2, unidade: "colheres (sopa)" },
      { nome: "queijo ralado", quantidade: 2, unidade: "colheres (sopa)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "noz-moscada", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Preparar ovos", instrucoes: "Coloque os ovos em ramequins e cubra com creme de leite e queijo.", tempo: "5 min" },
      { etapa: "Assar", instrucoes: "Leve ao forno a 180°C até dourar a superfície.", tempo: "10 min" }
    ],
    observacoes: "Sirva imediatamente para manter cremosidade do ovo.",
    tags: ["assado"]
  },
  {
    id: 19,
    titulo: "Omelete de Cogumelos",
    descricao: "Sabor delicado e textura leve, ideal para refeições leves e elegantes.",
    imagem: "https://cdn1.cuizeat.com/2575/conversions/5f197406a351f5167568c145c4c97ae7-default-default-default_responsive.jpg",
    trailer: "",
    tempoPreparo: "10 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "ovo", quantidade: 2, unidade: "unidades" },
      { nome: "cogumelos fatiados", quantidade: 1/2, unidade: "xícara" },
      { nome: "azeite", quantidade: 1, unidade: "colher (chá)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" }
    ],
    modoPreparo: [
      { etapa: "Refogar cogumelos", instrucoes: "Refogue os cogumelos em azeite até dourarem.", tempo: "4 min" },
      { etapa: "Adicionar ovos", instrucoes: "Bata os ovos com sal, despeje sobre os cogumelos e cozinhe até firmar.", tempo: "6 min" }
    ],
    observacoes: "Pode adicionar queijo ou ervas para mais sabor.",
    tags: ["omelete"]
  },
  {
    id: 20,
    titulo: "Salsicha ao molho sei lá",
    descricao: "",
    imagem: "https://images.mrcook.app/recipe-image/0192d3c5-bf44-7f6c-afeb-fda73cd2e26e?cacheKey=U3VuLCAxMiBKYW4gMjAyNSAwMzozODoyNCBHTVQ=",
    trailer: "",
    tempoPreparo: "20 min",
    porcao: "1 porção",
    ingredientes: [
      { nome: "Salsichas", quantidade: 6, unidade: "unidades" },
      { nome: "Tomate, cebola, pimentão e coentro", quantidade: "Quanto quiser", unidade: "" },
      { nome: "óleo", quantidade: 1, unidade: "colher (chá)" },
      { nome: "sal", quantidade: 1, unidade: "pitada" },
      { nome: "alho", quantidade: 1, unidade: "unidade" },
      { nome: "extrato de tomate", quantidade: 70, unidade: "ml" },
      { nome: "creme de leite", quantidade: 100, unidade: "ml" },
      { nome: "extrato de tomate", quantidade: 1, unidade: "unidade" },
      { nome: "Coloral", quantidade: 1, unidade: "colher de chá" },
      { nome: "Tempero especial do maracanã", quantidade: 10, unidade: "g" },
    ],
    modoPreparo: [
      { etapa: "Refogar alho + salsichas", instrucoes: "Refoga o alho + salsicha (picada) no oléo até dourarem.", tempo: "uns 3 min" },
      { etapa: "Adicionar tempero especial do maracanã + extrato de tomate + coloral", instrucoes: "Deixa um tempinho pra pegar sabor na salsicha (lá ele)", tempo: "uns 2 min" },
      { etapa: "Adicionar água", instrucoes: "Adiciona uma quantidade de água que cubra toda a salsicha e deixa essa bagaça cozinhar por uns 10 min ou até secar", tempo: "uns 10 min" },
      { etapa: "Adicionar o creme de leite e deixa por 5 min", instrucoes: "precisa de instrução pra isso? égua burro man", tempo: "uns 5 min" },
      { etapa: "Corre pro abraço filhão", instrucoes: "", tempo: "combina com pão, cuscuz, aquele arroz refogado, um macarrão. só vai!" },
    ],
    observacoes: "Pode adicionar presunto e um pouco de queijo.",
    tags: ["especial"]
  }
];
