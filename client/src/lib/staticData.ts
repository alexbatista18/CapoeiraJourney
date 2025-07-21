// Dados estáticos completos para GitHub Pages - sem servidor
export interface Class {
  id: number;
  date: string;
  title: string;
  content: string;
  location: string | null;
  tags: string[] | null;
  type: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  date: string | null;
  imageUrl: string | null;
  category: string;
}

export interface Seminar {
  id: number;
  groupNumber: number;
  topic: string;
  members: string[] | null;
  description: string | null;
}

export interface Reflection {
  id: number;
  title: string;
  content: string;
  createdAt?: Date;
}

export const allClasses: Class[] = [
  {
    id: 1,
    date: "31/03/2025",
    title: "Modo Quilombola e Fundamentos da Ginga",
    content: "No dia 31/03 vimos sobre o modo quilombola de viver e sua profunda influência sobre a capoeiragem. Os quilombos eram comunidades de resistência onde ex-escravizados desenvolveram formas únicas de organização social, cultural e de defesa. Aprendemos como essa vivência comunitária influenciou diretamente os movimentos, a musicalidade e a filosofia da Capoeira. Na prática, reforçamos a ginga - movimento base fundamental que representa a fluidez e malícia da Capoeira - e acrescentamos as esquivas básicas como cocorinha, negativa e rolê. A metodologia TGfU (Teaching Games for Understanding) foi aplicada para entender os fundamentos da movimentação através de jogos e situações práticas, onde primeiro vivenciamos os movimentos em contexto lúdico antes de sistematizar tecnicamente.",
    location: "Sala 3 DEF + Ginásio I COESPE",
    tags: ["História", "Prática", "Quilombos", "TGfU"],
    type: "mixed"
  },
  {
    id: 2,
    date: "02/04/2025",
    title: "Estudo Dirigido - Guerras pela Independência",
    content: "No dia 02/04 tivemos uma atividade não presencial devido à infecção respiratória do professor. Realizamos um estudo dirigido focado nas guerras pela independência do Brasil, explorando especificamente a participação dos povos indígenas, escravizados e capoeiristas nesse processo histórico. Descobrimos como a Capoeira serviu como ferramenta de resistência e organização durante os conflitos, sendo praticada por soldados e quilombolas. Estudamos casos documentados de capoeiristas que participaram das lutas pela independência, desmistificando a ideia de que apenas as elites participaram desse processo. A atividade culminou com a preparação para uma Roda de Capoeira que fecharia o ciclo da metodologia TGfU, integrando todo o conhecimento histórico vivenciado na prática corporal.",
    location: "Atividade não presencial",
    tags: ["História", "Estudo Dirigido", "TGfU"],
    type: "theory"
  },
  {
    id: 3,
    date: "07/04/2025",
    title: "Adaptação - Guerras pela Independência e TGfU",
    content: "No dia 07/04 adaptamos nosso cronograma para recuperar a aula anterior. Aprofundamos o tema das guerras pela independência do Brasil, distinguindo mitos de fatos históricos sobre a participação de indígenas, escravizados e ex-escravizados. Vimos como a historiografia tradicional omitiu ou minimizou essas participações, enquanto pesquisas recentes revelam protagonismo desses grupos. Na parte prática, aplicamos a metodologia TGfU aos fundamentos básicos da movimentação da Capoeira. O TGfU consiste em uma abordagem pedagógica que parte do jogo/situação-problema para depois sistematizar a técnica, desenvolvendo primeiro a consciência tática. Praticamos movimentos como ginga, esquivas e deslocamentos em situações de jogo antes de decompor tecnicamente cada movimento.",
    location: "Sala 3 + Ginásio I COESPE",
    tags: ["História", "Prática", "Independência", "TGfU"],
    type: "mixed"
  },
  {
    id: 4,
    date: "09/04/2025",
    title: "Guerra do Paraguai, Lei Áurea e República",
    content: "No dia 09/04 estudamos a Guerra do Paraguai (1864-1870) e sua relação com a Capoeira. Vimos como muitos capoeiristas foram recrutados forçosamente ou se alistaram voluntariamente, levando suas habilidades de luta para o campo de batalha. Analisamos o período da Lei Áurea (1888) e da Proclamação da República (1889), momentos cruciais quando a Capoeira transitou de prática de resistência escrava para arte criminalizada no código penal republicano. Realizamos uma Roda de Capoeira fechando nosso primeiro ciclo de aplicação da metodologia TGfU, integrando todos os movimentos e conhecimentos históricos vivenciados. Também organizamos o evento 'Roda de Capoeira do Dia dos Povos Originários' como atividade de reposição, conectando a ancestralidade indígena com a capoeiragem.",
    location: "Sala 3 + Ginásio COESPE",
    tags: ["História", "República", "TGfU", "Roda"],
    type: "mixed"
  },
  {
    id: 5,
    date: "14/04/2025",
    title: "Movimentos de Ataque via TGfU e Kalixto",
    content: "No dia 14/04 focamos na prática de movimentos de ataque na Capoeira utilizando a metodologia TGfU. Aprendemos golpes como martelo, queixada, armada e meia-lua de compasso através de situações de jogo, onde primeiro experimentamos os movimentos em contexto de aplicação para depois refinar a técnica. Analisamos as ilustrações históricas de Angelo Agostini (Kalixto), caricaturista carioca que documentou as famosas maltas de Capoeira na transição do império para a república no Rio de Janeiro. Suas obras retratam os capoeiras cariocas em ação, mostrando a elegância e eficiência dos movimentos, além do contexto urbano da época. Essas imagens nos ajudaram a compreender como a Capoeira era praticada no século XIX e sua importância social nas ruas do Rio.",
    location: "Ginásio COESPE",
    tags: ["Prática", "Arte", "História", "TGfU", "Kalixto"],
    type: "practice"
  },
  {
    id: 6,
    date: "16/04/2025",
    title: "Primeiras Escolas e Descriminalização",
    content: "No dia 16/04 estudamos as primeiras escolas formais de Capoeira e o processo de descriminalização. Vimos como Mestre Bimba criou a Luta Regional Baiana (1932) e Mestre Pastinha sistematizou a Capoeira Angola, transformando uma prática marginalizada em arte reconhecida. Analisamos como a Capoeira foi incorporada ao projeto nacionalista de Getúlio Vargas como símbolo da brasilidade, deixando de ser crime para tornar-se patrimônio cultural. Participamos de uma Roda de Capoeira onde aplicamos os conhecimentos teóricos na prática. Organizamos a turma em 3 grupos para preparar o evento 'Roda de Capoeira do Dia dos Povos Originários', integrando a ancestralidade indígena com a tradição afro-brasileira da Capoeira, demonstrando como diferentes culturas se entrelaçam na formação da identidade brasileira.",
    location: "Sala 3 DEF + Ginásio I COESPE",
    tags: ["História", "Política", "Evento", "Descriminalização"],
    type: "mixed"
  },
  {
    id: 7,
    date: "28/04/2025",
    title: "Fechamento de Notas e Seminário",
    content: "No dia 28/04 realizamos o fechamento das notas de participação e encaminhamento da avaliação do minievento que organizamos. Foi um momento importante para refletir sobre nosso engajamento durante as aulas e atividades práticas. Preparamos o Seminário de Atualização Científica em Capoeira do dia 5 de maio, definindo os critérios avaliativos que contemplariam três dimensões: conceitual (1,0 ponto) - demonstrando domínio teórico do tema; procedimental (1,0 ponto) - apresentação clara e didática; e atitudinal (0,5 pontos) - postura colaborativa e respeitosa. Essa estrutura avaliativa reflete a filosofia da Capoeira, que integra conhecimento, habilidade e caráter. Cada grupo ficou responsável por apresentar pesquisas científicas recentes (2023 em diante) relacionando diferentes áreas do conhecimento com a Capoeira.",
    location: "Sala 3 DEF",
    tags: ["Avaliação", "Seminário", "Notas"],
    type: "theory"
  },
  {
    id: 8,
    date: "30/04/2025",
    title: "Artesanato na Capoeira - Confecção do Berimbau",
    content: "No dia 30/04 mergulhamos no artesanato da Capoeira com foco na confecção do Berimbau, instrumento principal da orquestra capoeirística. Aprendemos sobre a escolha da madeira (tradicionalmente biriba), a preparação do arame, da cabaça e do dobrão (moeda antiga ou pedra lisa). Compreendemos a importância desse conhecimento artesanal que conecta o capoeirista com suas raízes culturais e desenvolve uma relação íntima com o instrumento. Fechamos com uma Roda de Capoeira aplicando toda a metodologia TGfU vivenciada até então, integrando movimentos, ritmos e conhecimentos culturais. Foi um momento especial onde pudemos experimentar os toques básicos no berimbau confeccionado e sentir como o instrumento comanda o jogo na roda.",
    location: "Ginásio COESPE",
    tags: ["Artesanato", "Berimbau", "TGfU", "Roda"],
    type: "practice"
  }
];

export const allActivities: Activity[] = [
  {
    id: 1,
    title: "Entrega das Sementes de Cabaça",
    description: "Primeira imagem do projeto: entrega das sementes de cabaça aos alunos, marcando o início do processo de cultivo que conecta teoria e prática. Cada estudante recebeu sementes para germinar em casa, compreendendo o ciclo completo desde o plantio até a confecção do berimbau.",
    date: "Início do semestre",
    imageUrl: "/CapoeiraJourney/image5.jpeg",
    category: "practice"
  },
  {
    id: 2,
    title: "Roda de Capoeira na Aula - 21/05",
    description: "Segunda imagem registrada: roda de capoeira realizada em aula no dia 21/05, fechamento do ciclo TGfU com Capoeira Angola. Momento de aplicação prática dos fundamentos aprendidos, com participação ativa de todos os estudantes na roda tradicional.",
    date: "21/05/2025",
    imageUrl: "/CapoeiraJourney/image6.jpeg",
    category: "practice"
  },
  {
    id: 3,
    title: "Cartaz - Roda em Homenagem aos Povos Originários",
    description: "Terceira imagem: divulgação do cartaz para a roda em homenagem ao Dia dos Povos Originários. Evento organizado pelos alunos divididos em 3 grupos como atividade de reposição, reconhecendo a contribuição indígena fundamental na formação da capoeira.",
    date: "19/04/2025",
    imageUrl: "/CapoeiraJourney/image7.jpeg",
    category: "event"
  },
  {
    id: 4,
    title: "Encontro com Mestre Junior Orca - 12/06",
    description: "Quarta imagem registrada: encontro e homenagem ao Mestre Junior Orca no dia 12/06. Momento especial de conexão com a tradição, fortalecendo os laços com mestres tradicionais e compreendendo a linhagem histórica da capoeira no Rio Grande do Norte.",
    date: "12/06/2025",
    imageUrl: "/CapoeiraJourney/image8.jpeg",
    category: "event"
  }
];

export const allSeminars: Seminar[] = [
  {
    id: 1,
    groupNumber: 1,
    topic: "Filosofia e Capoeira",
    members: ["Normann", "Mariana", "Paulo Victor"],
    description: "Análise filosófica dos aspectos da capoeira"
  },
  {
    id: 2,
    groupNumber: 2,
    topic: "História e Capoeira",
    members: ["André", "Jonatan", "Francisco"],
    description: "Estudo histórico da capoeira no Brasil"
  },
  {
    id: 3,
    groupNumber: 3,
    topic: "Antropologia e Capoeira",
    members: ["Joel", "Elbert"],
    description: "Aspectos antropológicos da manifestação cultural"
  },
  {
    id: 4,
    groupNumber: 4,
    topic: "Arte e Capoeira",
    members: ["Alex", "Lucicledson"],
    description: "Expressões artísticas na capoeira"
  },
  {
    id: 5,
    groupNumber: 5,
    topic: "Pedagogia do Esporte e Capoeira",
    members: ["Josean", "André Lucas", "Roberto"],
    description: "Métodos pedagógicos aplicados à capoeira"
  },
  {
    id: 6,
    groupNumber: 6,
    topic: "Fisiologia do Exercício e Capoeira",
    members: ["Brendha", "Laysia"],
    description: "Aspectos fisiológicos da prática da capoeira"
  },
  {
    id: 7,
    groupNumber: 7,
    topic: "Biomecânica e Capoeira",
    members: ["Victor Hugo", "Gustavo"],
    description: "Análise biomecânica dos movimentos"
  },
  {
    id: 8,
    groupNumber: 8,
    topic: "Anatomia do Movimento e Capoeira",
    members: ["Carlos Vitor", "Pablo", "José"],
    description: "Estudo anatômico dos movimentos da capoeira"
  }
];

export const allReflections: Reflection[] = [
  {
    id: 1,
    title: "A Dinâmica da Capoeira Viva",
    content: "Durante o semestre, compreendi que a metodologia do professor em nos levar constantemente para outros espaços - diferentes salas, ginásios, ambientes externos - reflete uma verdade fundamental sobre a capoeira: ela só se mantém viva quando sai dos espaços tradicionais. A capoeira exige que tomemos a iniciativa de levá-la para onde as pessoas estão. Não basta conhecer os movimentos; é preciso compartilhar, ensinar, praticar em comunidade. Essa dinâmica espacial conecta-se diretamente com a resistência histórica dos quilombos e a necessidade de mobilidade para a sobrevivência cultural."
  },
  {
    id: 2,
    title: "Metodologia TGfU e Aprendizado Significativo",
    content: "O Teaching Games for Understanding (TGfU) foi a metodologia central do curso, sempre fechando ciclos com rodas práticas. Diferente do ensino técnico tradicional, o TGfU nos permitiu compreender a capoeira como jogo antes de decompor seus elementos. Primeiro vivenciamos a roda, depois entendemos os movimentos, depois contextualizamos historicamente. Esta sequência invertida fez todo sentido: a capoeira é jogo, é cultura, é resistência - não apenas uma sequência de golpes."
  },
  {
    id: 3,
    title: "Cultivo da Cabaça como Metáfora Pedagógica",
    content: "A experiência de cultivar as sementes da cabaça simbolizou perfeitamente a metodologia do curso: começamos com algo pequeno, cuidamos com dedicação, e eventualmente colhemos os frutos que se tornarão instrumentos. O processo avaliativo paralelo - visitação ao IPHAN, registro de grupos - nos ensinou que a capoeira é patrimônio vivo que precisa ser documentado e preservado. Assim como a cabaça cresce lentamente, nossa compreensão da capoeira se desenvolveu ao longo do semestre através da prática constante."
  },
  {
    id: 4,
    title: "Três Momentos Avaliativos: Uma Pedagogia Participativa",
    content: "Os três momentos avaliativos refletiram a própria essência da capoeira: 1) Participação (maior peso) - porque na capoeira, estar presente e engajado é fundamental; 2) Seminários científicos - conectando tradição com conhecimento acadêmico contemporâneo; 3) Projetos externos - levando a capoeira para a comunidade. Não foram apenas formas de avaliar, mas de vivenciar integralmente o que significa ser capoeirista na universidade."
  },
  {
    id: 5,
    title: "Integração entre Angola e Regional",
    content: "Vivenciar tanto a Capoeira Angola quanto a Regional, com suas metodologias específicas (chamadas de pé do berimbau versus sequências de Mestre Bimba), mostrou que ambas são caminhos válidos de preservação cultural. A Angola nos conectou com a ancestralidade e o ritual; a Regional nos ensinou sistematização e pedagogia. Ambas fecharam seus ciclos com rodas, sempre retornando ao jogo como elemento central."
  },
  {
    id: 6,
    title: "História, Quilombos e Legado da Capoeira",
    content: "Durante o semestre, aprofundei meus conhecimentos sobre a história do Brasil, especialmente sobre os quilombos e a capoeira. Compreendi a importância de conhecer esse passado, de enxergar os traços e o legado deixado por essas comunidades de resistência, e como tudo isso se reflete na cultura e na sociedade atual. Esse aprendizado me fez valorizar ainda mais a capoeira como expressão viva de luta, identidade e transformação social."
  }
];
