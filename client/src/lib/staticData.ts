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
    content:
      "No dia 31/03 vimos sobre o modo quilombola de viver e sua profunda influência sobre a capoeiragem. Os quilombos eram comunidades de resistência onde ex-escravizados desenvolveram formas únicas de organização social, cultural e de defesa. Aprendemos como essa vivência comunitária influenciou diretamente os movimentos, a musicalidade e a filosofia da Capoeira. Na prática, reforçamos a ginga - movimento base fundamental que representa a fluidez e malícia da Capoeira - e acrescentamos as esquivas básicas como cocorinha, negativa e rolê. A metodologia TGfU (Teaching Games for Understanding) foi aplicada para entender os fundamentos da movimentação através de jogos e situações práticas, onde primeiro vivenciamos os movimentos em contexto lúdico antes de sistematizar tecnicamente.",
    location: "Sala 3 DEF + Ginásio I COESPE",
    tags: ["História", "Prática", "Quilombos", "TGfU"],
    type: "mista",
  },
  {
    id: 2,
    date: "02/04/2025",
    title: "Estudo Dirigido - Guerras pela Independência",
    content:
      "No dia 02/04 tivemos uma atividade não presencial devido à infecção respiratória do professor. Realizamos um estudo dirigido focado nas guerras pela independência do Brasil, explorando especificamente a participação dos povos indígenas, escravizados e capoeiristas nesse processo histórico. Descobrimos como a Capoeira serviu como ferramenta de resistência e organização durante os conflitos, sendo praticada por soldados e quilombolas. Estudamos casos documentados de capoeiristas que participaram das lutas pela independência, desmistificando a ideia de que apenas as elites participaram desse processo. A atividade culminou com a preparação para uma Roda de Capoeira que fecharia o ciclo da metodologia TGfU, integrando todo o conhecimento histórico vivenciado na prática corporal.",
    location: "Atividade não presencial",
    tags: ["História", "Estudo Dirigido", "TGfU"],
    type: "teoria",
  },
  {
    id: 3,
    date: "07/04/2025",
    title: "Adaptação - Guerras pela Independência e TGfU",
    content:
      "No dia 07/04 adaptamos nosso cronograma para recuperar a aula anterior. Aprofundamos o tema das guerras pela independência do Brasil, distinguindo mitos de fatos históricos sobre a participação de indígenas, escravizados e ex-escravizados. Vimos como a historiografia tradicional omitiu ou minimizou essas participações, enquanto pesquisas recentes revelam protagonismo desses grupos. Na parte prática, aplicamos a metodologia TGfU aos fundamentos básicos da movimentação da Capoeira. O TGfU consiste em uma abordagem pedagógica que parte do jogo/situação-problema para depois sistematizar a técnica, desenvolvendo primeiro a consciência tática. Praticamos movimentos como ginga, esquivas e deslocamentos em situações de jogo antes de decompor tecnicamente cada movimento.",
    location: "Sala 3 + Ginásio I COESPE",
    tags: ["História", "Prática", "Independência", "TGfU"],
    type: "mista",
  },
  {
    id: 4,
    date: "09/04/2025",
    title: "Guerra do Paraguai, Lei Áurea e República",
    content:
      "No dia 09/04 estudamos a Guerra do Paraguai (1864-1870) e sua relação com a Capoeira. Vimos como muitos capoeiristas foram recrutados forçosamente ou se alistaram voluntariamente, levando suas habilidades de luta para o campo de batalha. Analisamos o período da Lei Áurea (1888) e da Proclamação da República (1889), momentos cruciais quando a Capoeira transitou de prática de resistência escrava para arte criminalizada no código penal republicano. Realizamos uma Roda de Capoeira fechando nosso primeiro ciclo de aplicação da metodologia TGfU, integrando todos os movimentos e conhecimentos históricos vivenciados. Também organizamos o evento 'Roda de Capoeira do Dia dos Povos Originários' como atividade de reposição, conectando a ancestralidade indígena com a capoeiragem.",
    location: "Sala 3 + Ginásio COESPE",
    tags: ["História", "República", "TGfU", "Roda"],
    type: "mista",
  },
  {
    id: 5,
    date: "14/04/2025",
    title: "Movimentos de Ataque via TGfU e Kalixto",
    content:
      "No dia 14/04 focamos na prática de movimentos de ataque na Capoeira utilizando a metodologia TGfU. Aprendemos golpes como martelo, queixada, armada e meia-lua de compasso através de situações de jogo, onde primeiro experimentamos os movimentos em contexto de aplicação para depois refinar a técnica. Analisamos as ilustrações históricas de Angelo Agostini (Kalixto), caricaturista carioca que documentou as famosas maltas de Capoeira na transição do império para a república no Rio de Janeiro. Suas obras retratam os capoeiras cariocas em ação, mostrando a elegância e eficiência dos movimentos, além do contexto urbano da época. Essas imagens nos ajudaram a compreender como a Capoeira era praticada no século XIX e sua importância social nas ruas do Rio.",
    location: "Ginásio COESPE",
    tags: ["Prática", "Arte", "História", "TGfU", "Kalixto"],
    type: "prática",
  },
  {
    id: 6,
    date: "16/04/2025",
    title: "Primeiras Escolas e Descriminalização",
    content:
      "No dia 16/04 estudamos as primeiras escolas formais de Capoeira e o processo de descriminalização. Vimos como Mestre Bimba criou a Luta Regional Baiana (1932) e Mestre Pastinha sistematizou a Capoeira Angola, transformando uma prática marginalizada em arte reconhecida. Analisamos como a Capoeira foi incorporada ao projeto nacionalista de Getúlio Vargas como símbolo da brasilidade, deixando de ser crime para tornar-se patrimônio cultural. Participamos de uma Roda de Capoeira onde aplicamos os conhecimentos teóricos na prática. Organizamos a turma em 3 grupos para preparar o evento 'Roda de Capoeira do Dia dos Povos Originários', integrando a ancestralidade indígena com a tradição afro-brasileira da Capoeira, demonstrando como diferentes culturas se entrelaçam na formação da identidade brasileira.",
    location: "Sala 3 DEF + Ginásio I COESPE",
    tags: ["História", "Política", "Evento", "Descriminalização"],
    type: "mista",
  },
  {
    id: 7,
    date: "28/04/2025",
    title: "Fechamento de Notas e Seminário",
    content:
      "No dia 28/04 realizamos o fechamento das notas de participação e encaminhamento da avaliação do minievento que organizamos. Foi um momento importante para refletir sobre nosso engajamento durante as aulas e atividades práticas. Preparamos o Seminário de Atualização Científica em Capoeira do dia 5 de maio, definindo os critérios avaliativos que contemplariam três dimensões: conceitual (1,0 ponto) - demonstrando domínio teórico do tema; procedimental (1,0 ponto) - apresentação clara e didática; e atitudinal (0,5 pontos) - postura colaborativa e respeitosa. Essa estrutura avaliativa reflete a filosofia da Capoeira, que integra conhecimento, habilidade e caráter. Cada grupo ficou responsável por apresentar pesquisas científicas recentes (2023 em diante) relacionando diferentes áreas do conhecimento com a Capoeira.",
    location: "Sala 3 DEF",
    tags: ["Avaliação", "Seminário", "Notas"],
    type: "teoria",
  },
  {
    id: 8,
    date: "30/04/2025",
    title: "Artesanato na Capoeira - Confecção do Berimbau",
    content:
      "No dia 30/04 mergulhamos no artesanato da Capoeira com foco na confecção do Berimbau, instrumento principal da orquestra capoeirística. Aprendemos sobre a escolha da madeira (tradicionalmente biriba), a preparação do arame, da cabaça e do dobrão (moeda antiga ou pedra lisa). Compreendemos a importância desse conhecimento artesanal que conecta o capoeirista com suas raízes culturais e desenvolve uma relação íntima com o instrumento. Fechamos com uma Roda de Capoeira aplicando toda a metodologia TGfU vivenciada até então, integrando movimentos, ritmos e conhecimentos culturais. Foi um momento especial onde pudemos experimentar os toques básicos no berimbau confeccionado e sentir como o instrumento comanda o jogo na roda.",
    location: "Ginásio COESPE",
    tags: ["Artesanato", "Berimbau", "TGfU", "Roda"],
    type: "prática",
  },
  {
    id: 9,
    date: "05/05/2025",
    title: "Seminário de Atualização Científica",
    content:
      "No dia 05/05 realizamos nosso Seminário de Atualização Científica, um marco importante da disciplina. Os 8 grupos apresentaram pesquisas atualizadas (artigos de 2023 em diante) conectando diferentes áreas do conhecimento com a Capoeira: Filosofia e Capoeira - explorando a dimensão existencial e ética; História - contextualizando períodos específicos; Antropologia - analisando rituais e simbolismos; Arte - manifestações estéticas e criativas; Pedagogia do Esporte - metodologias de ensino; Fisiologia do Exercício - aspectos metabólicos e adaptativos; Biomecânica - análise dos movimentos; e Anatomia do Movimento - estruturas corporais envolvidas. Foi enriquecedor ver como a Capoeira dialoga com tantas disciplinas acadêmicas, confirmando sua complexidade e riqueza como objeto de estudo multidisciplinar.",
    location: "Sala 3 DEF",
    tags: ["Seminário", "Ciência", "Apresentação"],
    type: "teoria",
  },
  {
    id: 10,
    date: "07/05/2025",
    title: "Grupos Restantes e Projeto IPHAN",
    content:
      "No dia 07/05 assistimos às apresentações dos grupos restantes do seminário: 'Capoeira e lesões' - abordando prevenção e reabilitação de lesões comuns na prática; e 'Capoeira e dança' - explorando as fronteiras entre luta e arte performática. Conhecemos o Projeto 'Mestres e Grupos de Capoeira do RN', uma iniciativa de mapeamento e registro dos grupos ativos no estado. Exploramos o sítio eletrônico da Capoeira no IPHAN, compreendendo como nossa arte foi reconhecida como Patrimônio Cultural Imaterial do Brasil e da Humanidade pela UNESCO. Organizamos grupos para prestação de serviço de utilidade pública, contribuindo para o registro oficial dos Grupos de Capoeira do RN no portal do IPHAN, conectando nossa experiência acadêmica com a preservação cultural.",
    location: "Sala 3 DEF",
    tags: ["Seminário", "IPHAN", "Projeto", "Registro"],
    type: "teoria",
  },
  {
    id: 11,
    date: "12/05/2025",
    title: "Plantas na Capoeira e Preparação Física",
    content:
      "No dia 12/05 estudamos as plantas na Capoeira e seu papel fundamental na tradição capoeirística. Aprendemos sobre a cabaça (Lagenaria siceraria), planta essencial para confecção do berimbau, acompanhando todo o processo desde o plantio até a secagem e preparação do instrumento. Vimos também outras plantas usadas na Capoeira como ervas medicinais e ritualisticas. Iniciamos nossa atividade de visitação ao IPHAN para compreender o processo de registro patrimonial. Na preparação física, focamos nos aspectos específicos para a Capoeira: flexibilidade, força funcional, equilíbrio e coordenação. Cada estudante relatou o desenvolvimento de sua muda de cabaça, conectando teoria botânica com prática cultural.",
    location: "Sala 3 + possível prática",
    tags: ["Botânica", "Preparação", "IPHAN", "Cabaça"],
    type: "mista",
  },
  {
    id: 12,
    date: "14/05/2025",
    title: "Fundamentos da Capoeira Angola - Início",
    content:
      "No dia 14/05 iniciamos os ensinamentos sobre os fundamentos da Capoeira Angola, o estilo mais tradicional e ancestral da arte. Aprendemos sobre a filosofia angoleira: jogo baixo, próximo ao chão, movimentos lentos e estratégicos que privilegiam a malícia e a mandinga sobre a acrobacia. Praticamos a ginga angoleira, mais cadenciada que a regional, e movimentos básicos como cocorinha, negativa e rasteira. Vivenciamos uma Roda de Angola autêntica com o toque característico do berimbau Angola. Organizamos nossa visita ao espaço do Mestre Igor da Capoeira Nacional (grupo de Angola), onde pudemos observar a tradição sendo preservada e transmitida na prática cotidiana de um grupo tradicional.",
    location: "Sala 3 + Ginásio",
    tags: ["Angola", "Prática", "Fundamentos", "Mestre Igor"],
    type: "mista",
  },
  {
    id: 13,
    date: "19/05/2025",
    title: "Movimentos da Capoeira Angola - Aprofundamento",
    content:
      "No dia 19/05 aprofundamos nossa prática nos movimentos característicos da Capoeira Angola. Trabalhamos a movimentação baixa e maliciosa, diferente da Regional: esquivas mais demoradas, transições fluidas entre os movimentos, e o jogo de corpo que valoriza a estratégia. Aprendemos as formas tradicionais de chamada: 'pé do berimbau' (forma respeitosa de entrar na roda) e 'passo a dois' (quando dois capoeiras iniciam juntos). Exploramos diferentes estilos de jogos angoleiros: o jogo de dentro (mais próximo), o jogo de fora (com mais distância) e o jogo de amarrar (onde se 'prende' o oponente). Continuamos compreendendo como a Angola preserva a essência ancestral da Capoeira, priorizando a sabedoria e experiência sobre a força bruta.",
    location: "Ginásio COESPE",
    tags: ["Angola", "Prática", "Movimentos", "Chamada"],
    type: "prática",
  },
  {
    id: 14,
    date: "21/05/2025",
    title: "Roda de Capoeira Angola - Fechamento do Ciclo",
    content:
      "No dia 21/05 fechamos nosso ciclo de TGfU com uma Roda de Capoeira Angola completa e autêntica. Foi o momento de integrar todo o aprendizado teórico e prático sobre esta modalidade ancestral. Aplicamos os movimentos aprendidos, respeitamos o ritual da ladainha, participamos do coro das chulas e vivenciamos o jogo lento e estratégico característico da Angola. Detalhamos nossa visita ao espaço do Mestre Igor, onde discutimos sobre o formulário do IPHAN para registro no Portal da Capoeira, conectando nossa experiência acadêmica com o trabalho de preservação cultural que os Mestres realizam. Foi emocionante sentir a continuidade dessa tradição que atravessa séculos e se mantém viva através da transmissão oral e corporal.",
    location: "Ginásio COESPE",
    tags: ["Angola", "Roda", "TGfU", "IPHAN"],
    type: "prática",
  },
  {
    id: 15,
    date: "26/05/2025",
    title: "Capoeira Regional - Método de Mestre Bimba",
    content:
      "No dia 26/05 mergulhamos completamente na Capoeira Regional Baiana de Mestre Bimba (Sr. Manuel dos Reis Machado), o criador desta modalidade revolucionária. Praticamos o método sistemático das 8 sequências de Mestre Bimba, movimentos encadeados que desenvolvem coordenação, técnica e fluidez. Aprendemos sobre os 'balões cinturados', sistema de graduação por cordas coloridas que Bimba criou. Experimentamos os três toques principais da Regional: Banguela (toque lento para iniciantes), São Bento Grande de Regional (toque médio da regional) e Iúna (toque rápido e desafiador). Foi fascinante compreender como Bimba modernizou a Capoeira, criando uma metodologia de ensino que a tirou da marginalidade e a levou às universidades, sem perder sua essência combativa.",
    location: "Ginásio COESPE",
    tags: ["Regional", "Bimba", "Sequência", "Toques", "Banguela"],
    type: "prática",
  },
  {
    id: 17,
    date: "04/06/2025",
    title: "Escolas de Capoeira Angola e Regional Baiana",
    content:
      "No dia 04/06 realizamos uma aula teórica na sala 3 para tratar das escolas de Capoeira Angola e Capoeira Regional Baiana de forma comparativa e aprofundada. Analisamos as diferenças filosóficas, metodológicas e culturais entre as duas principais vertentes da Capoeira moderna. Estudamos como Mestre Pastinha sistematizou a Capoeira Angola preservando as tradições ancestrais, enquanto Mestre Bimba criou a Regional Baiana como uma modernização estratégica. Compreendemos como ambas as escolas são complementares na preservação da Capoeira, cada uma com sua contribuição específica para a perpetuação da arte. Discutimos a importância das visitas aos grupos locais como forma de vivenciar na prática essas diferentes abordagens, lembrando que 'excesso de educação nunca é demais' ao adentrar esses espaços tradicionais.",
    location: "Sala 3 DEF",
    tags: ["Angola", "Regional", "Escolas", "Teoria"],
    type: "teoria",
  },
  {
    id: 19,
    date: "11/06/2025",
    title: "Mandinga e Malandragem na Capoeira",
    content:
      "No dia 11/06 continuamos na sala de ginástica explorando os conceitos de mandinga e malandragem, elementos fundamentais da filosofia capoeirística. A mandinga foi compreendida como a dimensão mística e ancestral da Capoeira, conectada às tradições afro-brasileiras e ao axé que flui durante o jogo. Já a malandragem revelou-se como a capacidade de adaptação urbana, a esperteza de rua que os capoeiristas desenvolveram para navegar nos contextos sociais adversos. Praticamos situações de jogo onde aplicamos esses conceitos: movimentos que confundem o oponente, fingimentos, uso do ritual e da energia da roda para influenciar o jogo. Compreendemos que malícia, mandinga e malandragem formam uma tríade indissociável que define a essência da capoeiragem tradicional.",
    location: "Sala de Ginástica - Ginásio I",
    tags: ["Mandinga", "Malandragem", "Filosofia", "Ancestralidade"],
    type: "prática",
  },
  {
    id: 20,
    date: "16/06/2025",
    title: "Aspectos Folclóricos da Capoeiragem - Ijexá e Congado",
    content:
      "No dia 16/06 exploramos os aspectos folclóricos associados à cultura da capoeiragem, iniciando com o Ijexá e o Congado. O Ijexá, ritmo de origem iorubá dedicado a Oxum, mostrou sua conexão com a Capoeira através da musicalidade e da espiritualidade afro-brasileira. Praticamos o toque do Ijexá nos atabaques e compreendemos sua importância nas festividades do candomblé que influenciaram a Capoeira. O Congado revelou-se como uma manifestação cultural independente mas complementar, onde a dança, os tambores e a religiosidade se entrelaçam de forma similar à Capoeira. Vimos como essas manifestações compartilham raízes africanas comuns e como se influenciam mutuamente, mantendo viva a herança cultural dos povos africanos no Brasil.",
    location: "Sala de Ginástica",
    tags: ["Folclore", "Ijexá", "Congado", "Cultura"],
    type: "mista",
  },
  {
    id: 21,
    date: "18/06/2025",
    title: "Maculelê, Samba de Roda e Cultivo da Cabaça",
    content:
      "No dia 18/06 completamos o estudo dos aspectos folclóricos com o Maculelê e o Samba de Roda, além da roda de conversa sobre o cultivo da cabaça. O Maculelê, dança-luta com bastões, mostrou suas origens no recôncavo baiano e sua proximidade com a Capoeira no uso do corpo, do ritmo e da roda. O Samba de Roda revelou-se como matriz do samba moderno, compartilhando com a Capoeira a circularidade, a improvisação e a interação musical. Na roda de conversa, cada estudante compartilhou sua experiência com o cultivo da cabaça - sucessos, fracassos, aprendizados e descobertas. Independentemente do resultado da germinação, o importante foi o processo de conexão com a natureza e compreensão do ciclo completo da confecção do berimbau. Transplantamos as mudas para a horta do Departamento de Nutrição, simbolizando a continuidade do projeto.",
    location: "Sala de Ginástica + Horta",
    tags: ["Maculelê", "Samba de Roda", "Cabaça", "Cultivo"],
    type: "mista",
  },
  {
    id: 22,
    date: "23/06/2025",
    title: "Floreios na Capoeira e Estética",
    content:
      "No dia 23/06 exploramos os floreios na Capoeira e suas relações com o campo da estética. Os floreios - movimentos acrobáticos e ornamentais - foram compreendidos não apenas como demonstrações de habilidade física, mas como expressões artísticas que elevam a Capoeira ao patamar de arte performática. Praticamos diferentes tipos de floreios: au sem mão, parafuso, salto mortal, bico de papagaio, e outros movimentos que exigem técnica refinada e criatividade. Discutimos como os floreios modernos dialogam com a tradição, às vezes gerando tensões entre puristas e inovadores. Finalizamos o processo do cultivo da cabaça com o replantio na horta da Escola de Saúde Coletiva, dando novo propósito aos saquinhos com terra e conectando nosso aprendizado com a sustentabilidade ambiental.",
    location: "Sala de Ginástica + Horta ESC",
    tags: ["Floreios", "Estética", "Arte", "Sustentabilidade"],
    type: "prática",
  },
  {
    id: 23,
    date: "30/06/2025",
    title: "Preparação Física e Semana de Musicalidade",
    content:
      "No dia 30/06 demos continuidade ao estudo dos floreios integrando-os com a preparação física específica para a Capoeira. Trabalhamos exercícios de fortalecimento, flexibilidade e coordenação necessários para executar movimentos acrobáticos com segurança e elegância. Iniciamos os preparativos para a Semana de Musicalidade na Capoeira (07 a 11 de julho), organizando grupos para criação de cartazes e divulgação do evento. Compreendemos que a musicalidade é um pilar fundamental da Capoeira, tão importante quanto a movimentação física. O professor apresentou o modelo de portfólio que documenta todo nosso processo de aprendizagem ao longo do semestre. Foi uma aula intensamente prática onde consolidamos conhecimentos sobre condicionamento físico específico para capoeiristas.",
    location: "Sala de Ginástica",
    tags: ["Preparação", "Musicalidade", "Portfólio", "Condicionamento"],
    type: "prática",
  },
  {
    id: 24,
    date: "02/07/2025",
    title: "Floreios Avançados e Organização da Semana de Musicalidade",
    content:
      "No dia 02/07 aprofundamos a prática de floreios avançados e finalizamos a organização da Semana de Musicalidade na Capoeira. Trabalhamos sequências complexas de movimentos acrobáticos, conectando floreios com movimentos tradicionais para criar transições fluidas e espetaculares. Enfatizamos a importância da segurança na execução, respeitando os limites individuais e progredindo gradualmente. Definimos os últimos detalhes da Semana de Musicalidade: cartazes finalizados, cronograma de atividades e distribuição de responsabilidades entre os grupos. Compreendemos que este evento representa uma oportunidade de compartilhar nosso aprendizado com a comunidade universitária, levando a Capoeira para além da sala de aula. A preparação do evento também serviu como exercício prático de organização cultural e trabalho em equipe.",
    location: "Sala de Ginástica",
    tags: ["Floreios", "Musicalidade", "Evento", "Organização"],
    type: "prática",
  },
];

export const allActivities: Activity[] = [
  {
    id: 1,
    title: "Entrega das Sementes de Cabaça",
    description:
      "Primeira imagem do projeto: entrega das sementes de cabaça aos alunos, marcando o início do processo de cultivo que conecta teoria e prática. Cada estudante recebeu sementes para germinar em casa, compreendendo o ciclo completo desde o plantio até a confecção do berimbau.",
    date: "Início do semestre",
    imageUrl: "/CapoeiraJourney/image5.jpeg",
    category: "practice",
  },
  {
    id: 2,
    title: "Roda de Capoeira na Aula - 21/05",
    description:
      "Segunda imagem registrada: roda de capoeira realizada em aula no dia 21/05, fechamento do ciclo TGfU com Capoeira Angola. Momento de aplicação prática dos fundamentos aprendidos, com participação ativa de todos os estudantes na roda tradicional.",
    date: "21/05/2025",
    imageUrl: "/CapoeiraJourney/image6.jpeg",
    category: "practice",
  },
  {
    id: 3,
    title: "Cartaz - Roda em Homenagem aos Povos Originários",
    description:
      "Terceira imagem: divulgação do cartaz para a roda em homenagem ao Dia dos Povos Originários. Evento organizado pelos alunos divididos em 3 grupos como atividade de reposição, reconhecendo a contribuição indígena fundamental na formação da capoeira.",
    date: "19/04/2025",
    imageUrl: "/CapoeiraJourney/image7.jpeg",
    category: "event",
  },
  {
    id: 4,
    title: "Encontro com Mestre Junior Orca - 12/06",
    description:
      "Quarta imagem registrada: encontro e homenagem ao Mestre Junior Orca no dia 12/06. Momento especial de conexão com a tradição, fortalecendo os laços com mestres tradicionais e compreendendo a linhagem histórica da capoeira no Rio Grande do Norte.",
    date: "12/06/2025",
    imageUrl: "/CapoeiraJourney/image8.jpeg",
    category: "event",
  },
];

export const allSeminars: Seminar[] = [
  {
    id: 1,
    groupNumber: 1,
    topic: "Filosofia e Capoeira",
    members: ["Normann", "Mariana", "Paulo Victor"],
    description: "Análise filosófica dos aspectos da capoeira",
  },
  {
    id: 2,
    groupNumber: 2,
    topic: "História e Capoeira",
    members: ["André", "Jonatan", "Francisco"],
    description: "Estudo histórico da capoeira no Brasil",
  },
  {
    id: 3,
    groupNumber: 3,
    topic: "Antropologia e Capoeira",
    members: ["Joel", "Elbert"],
    description: "Aspectos antropológicos da manifestação cultural",
  },
  {
    id: 4,
    groupNumber: 4,
    topic: "Arte e Capoeira",
    members: ["Alex", "Lucicledson"],
    description: "Expressões artísticas na capoeira",
  },
  {
    id: 5,
    groupNumber: 5,
    topic: "Pedagogia do Esporte e Capoeira",
    members: ["Josean", "André Lucas", "Roberto"],
    description: "Métodos pedagógicos aplicados à capoeira",
  },
  {
    id: 6,
    groupNumber: 6,
    topic: "Fisiologia do Exercício e Capoeira",
    members: ["Brendha", "Laysia"],
    description: "Aspectos fisiológicos da prática da capoeira",
  },
  {
    id: 7,
    groupNumber: 7,
    topic: "Biomecânica e Capoeira",
    members: ["Victor Hugo", "Gustavo"],
    description: "Análise biomecânica dos movimentos",
  },
  {
    id: 8,
    groupNumber: 8,
    topic: "Anatomia do Movimento e Capoeira",
    members: ["Carlos Vitor", "Pablo", "José"],
    description: "Estudo anatômico dos movimentos da capoeira",
  },
];

export const allReflections: Reflection[] = [
  {
    id: 1,
    title: "A Dinâmica da Capoeira Viva",
    content:
      "Durante o semestre, compreendi que a metodologia do professor em nos levar constantemente para outros espaços - diferentes salas, ginásios, ambientes externos - reflete uma verdade fundamental sobre a capoeira: ela só se mantém viva quando sai dos espaços tradicionais. A capoeira exige que tomemos a iniciativa de levá-la para onde as pessoas estão. Não basta conhecer os movimentos; é preciso compartilhar, ensinar, praticar em comunidade. Essa dinâmica espacial conecta-se diretamente com a resistência histórica dos quilombos e a necessidade de mobilidade para a sobrevivência cultural.",
  },
  {
    id: 2,
    title: "Metodologia TGfU e Aprendizado Significativo",
    content:
      "O Teaching Games for Understanding (TGfU) foi a metodologia central do curso, sempre fechando ciclos com rodas práticas. Diferente do ensino técnico tradicional, o TGfU nos permitiu compreender a capoeira como jogo antes de decompor seus elementos. Primeiro vivenciamos a roda, depois entendemos os movimentos, depois contextualizamos historicamente. Esta sequência invertida fez todo sentido: a capoeira é jogo, é cultura, é resistência - não apenas uma sequência de golpes.",
  },
  {
    id: 3,
    title: "Cultivo da Cabaça como Metáfora Pedagógica",
    content:
      "A experiência de cultivar as sementes da cabaça simbolizou perfeitamente a metodologia do curso: começamos com algo pequeno, cuidamos com dedicação, e eventualmente colhemos os frutos que se tornarão instrumentos. O processo avaliativo paralelo - visitação ao IPHAN, registro de grupos - nos ensinou que a capoeira é patrimônio vivo que precisa ser documentado e preservado. Assim como a cabaça cresce lentamente, nossa compreensão da capoeira se desenvolveu ao longo do semestre através da prática constante.",
  },
  {
    id: 4,
    title: "Três Momentos Avaliativos: Uma Pedagogia Participativa",
    content:
      "Os três momentos avaliativos refletiram a própria essência da capoeira: 1) Participação (maior peso) - porque na capoeira, estar presente e engajado é fundamental; 2) Seminários científicos - conectando tradição com conhecimento acadêmico contemporâneo; 3) Projetos externos - levando a capoeira para a comunidade. Não foram apenas formas de avaliar, mas de vivenciar integralmente o que significa ser capoeirista na universidade.",
  },
  {
    id: 5,
    title: "Integração entre Angola e Regional",
    content:
      "Vivenciar tanto a Capoeira Angola quanto a Regional, com suas metodologias específicas (chamadas de pé do berimbau versus sequências de Mestre Bimba), mostrou que ambas são caminhos válidos de preservação cultural. A Angola nos conectou com a ancestralidade e o ritual; a Regional nos ensinou sistematização e pedagogia. Ambas fecharam seus ciclos com rodas, sempre retornando ao jogo como elemento central.",
  },
  {
    id: 6,
    title: "História, Quilombos e Legado da Capoeira",
    content:
      "Durante o semestre, aprofundei meus conhecimentos sobre a história do Brasil, especialmente sobre os quilombos e a capoeira. Compreendi a importância de conhecer esse passado, de enxergar os traços e o legado deixado por essas comunidades de resistência, e como tudo isso se reflete na cultura e na sociedade atual. Esse aprendizado me fez valorizar ainda mais a capoeira como expressão viva de luta, identidade e transformação social.",
  },
];
