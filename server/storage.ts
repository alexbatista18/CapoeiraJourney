import { 
  classes, activities, seminars, reflections,
  type Class, type Activity, type Seminar, type Reflection,
  type InsertClass, type InsertActivity, type InsertSeminar, type InsertReflection
} from "@shared/schema";

export interface IStorage {
  // Classes
  getAllClasses(): Promise<Class[]>;
  getClassById(id: number): Promise<Class | undefined>;
  createClass(classData: InsertClass): Promise<Class>;

  // Activities
  getAllActivities(): Promise<Activity[]>;
  getActivityById(id: number): Promise<Activity | undefined>;
  createActivity(activity: InsertActivity): Promise<Activity>;

  // Seminars
  getAllSeminars(): Promise<Seminar[]>;
  getSeminarById(id: number): Promise<Seminar | undefined>;
  createSeminar(seminar: InsertSeminar): Promise<Seminar>;

  // Reflections
  getAllReflections(): Promise<Reflection[]>;
  getReflectionById(id: number): Promise<Reflection | undefined>;
  createReflection(reflection: InsertReflection): Promise<Reflection>;
}

export class MemStorage implements IStorage {
  private classes: Map<number, Class>;
  private activities: Map<number, Activity>;
  private seminars: Map<number, Seminar>;
  private reflections: Map<number, Reflection>;
  private currentClassId: number;
  private currentActivityId: number;
  private currentSeminarId: number;
  private currentReflectionId: number;

  constructor() {
    this.classes = new Map();
    this.activities = new Map();
    this.seminars = new Map();
    this.reflections = new Map();
    this.currentClassId = 1;
    this.currentActivityId = 1;
    this.currentSeminarId = 1;
    this.currentReflectionId = 1;

    // Initialize with sample data from the text
    this.initializeData();
  }

  private initializeData() {
    // Classes data from the provided text
    const classesData: InsertClass[] = [
      {
        date: "31/03/2025",
        title: "Modo Quilombola e Fundamentos da Ginga",
        content: "Abordaremos o modo kilombola de viver e sua influência sobre a capoeiragem. A prática será reforçar a ginga e acrescentar as esquivas básicas. Metodologia TGfU aplicada aos fundamentos básicos da movimentação da Capoeira.",
        location: "Sala 3 DEF + Ginásio I COESPE",
        tags: ["História", "Prática", "Quilombos", "TGfU"],
        type: "mixed"
      },
      {
        date: "02/04/2025",
        title: "Estudo Dirigido - Guerras pela Independência",
        content: "Atividade não presencial devido à infecção respiratória do professor. Estudo dirigido sobre guerras pela independência e participação dos indígenas, escravizados e capoeiristas. Terminaremos com Roda de Capoeira fechando o ciclo TGfU.",
        location: "Atividade não presencial",
        tags: ["História", "Estudo Dirigido", "TGfU"],
        type: "theory"
      },
      {
        date: "07/04/2025",
        title: "Adaptação - Guerras pela Independência e TGfU",
        content: "Adaptação do cronograma devido à aula perdida. Tema das guerras pela independência no Brasil, mitos e fatos sobre a participação de indígenas, escravizados e ex-escravizados. Prática dos fundamentos básicos da movimentação da Capoeira com metodologia TGfU.",
        location: "Sala 3 + Ginásio I COESPE",
        tags: ["História", "Prática", "Independência", "TGfU"],
        type: "mixed"
      },
      {
        date: "09/04/2025",
        title: "Guerra do Paraguai, Lei Áurea e República",
        content: "Abordagem da Guerra do Paraguai, Lei Áurea e Proclamação da República. Momento de Roda de Capoeira fechando o ciclo do TGfU. Reposição da aula através de atividade não presencial para planejamento do evento Roda de Capoeira do Dia dos Povos Originários.",
        location: "Sala 3 + Ginásio COESPE",
        tags: ["História", "República", "TGfU", "Roda"],
        type: "mixed"
      },
      {
        date: "14/04/2025",
        title: "Movimentos de Ataque via TGfU e Kalixto",
        content: "Prática de movimentos de ataque na Capoeira via metodologia TGfU. Análise das ilustrações de Kalixto, caricaturista carioca que documentou as maltas de Capoeira na transição do império para a república no Rio de Janeiro.",
        location: "Ginásio COESPE",
        tags: ["Prática", "Arte", "História", "TGfU", "Kalixto"],
        type: "practice"
      },
      {
        date: "16/04/2025",
        title: "Primeiras Escolas e Descriminalização",
        content: "Primeiras escolas de Capoeira, a Capoeira no projeto nacionalista brasileiro e sua descriminalização. Participação em Roda de Capoeira. Organização da turma em 3 grupos para preparar o evento Roda de Capoeira do Dia dos Povos Originários.",
        location: "Sala 3 DEF + Ginásio I COESPE",
        tags: ["História", "Política", "Evento", "Descriminalização"],
        type: "mixed"
      },
      {
        date: "28/04/2025",
        title: "Fechamento de Notas e Seminário",
        content: "Fechamento das notas de participação e encaminhamento da nota do minievento. Preparação para o Seminário de Atualização em Capoeira do dia 5 de maio com critérios avaliativos: conceitual (1,0 ponto), procedimental (1,0 ponto) e atitudinal (0,5 pontos).",
        location: "Sala 3 DEF",
        tags: ["Avaliação", "Seminário", "Notas"],
        type: "theory"
      },
      {
        date: "30/04/2025",
        title: "Artesanato na Capoeira - Confecção do Berimbau",
        content: "Aula sobre artesanato na Capoeira com foco na confecção do Berimbau. Roda de Capoeira fechando o ciclo do TGfU com aplicação dos movimentos vivenciados.",
        location: "Ginásio COESPE",
        tags: ["Artesanato", "Berimbau", "TGfU", "Roda"],
        type: "practice"
      },
      {
        date: "05/05/2025",
        title: "Seminário de Atualização Científica",
        content: "Seminário com 8 grupos apresentando temas: Filosofia, História, Antropologia, Arte, Pedagogia do Esporte, Fisiologia do Exercício, Biomecânica e Anatomia do Movimento, todos relacionados à Capoeira. Artigos científicos de 2023 em diante.",
        location: "Sala 3 DEF",
        tags: ["Seminário", "Ciência", "Apresentação"],
        type: "theory"
      },
      {
        date: "07/05/2025",
        title: "Grupos Restantes e Projeto IPHAN",
        content: "Apresentação dos grupos restantes: Capoeira e lesões, Capoeira e dança. Apresentação do Projeto Mestres e Grupos de Capoeira do RN, sítio eletrônico da Capoeira do IPHAN e divisão de grupos para prestação de serviço de utilidade pública de registro de Grupos de Capoeira do RN.",
        location: "Sala 3 DEF",
        tags: ["Seminário", "IPHAN", "Projeto", "Registro"],
        type: "theory"
      },
      {
        date: "12/05/2025",
        title: "Plantas na Capoeira e Preparação Física",
        content: "Plantas na Capoeira com passo a passo para processo avaliativo. Início da atividade de visitação ao IPHAN em paralelo. Preparação física focada nos aspectos físicos para a Capoeira. Detalhamento do processo de cultivo da cabaça como parte do aprendizado prático.",
        location: "Sala 3 + possível prática",
        tags: ["Botânica", "Preparação", "IPHAN", "Cabaça"],
        type: "mixed"
      },
      {
        date: "14/05/2025",
        title: "Fundamentos da Capoeira Angola - Início",
        content: "Início dos ensinamentos sobre os fundamentos da Capoeira Angola. Aula envolverá prática e Roda de Angola. Organização da turma para visita ao espaço do Mestre Igor, da Capoeira Nacional (Angola).",
        location: "Sala 3 + Ginásio",
        tags: ["Angola", "Prática", "Fundamentos", "Mestre Igor"],
        type: "mixed"
      },
      {
        date: "19/05/2025",
        title: "Movimentos da Capoeira Angola - Aprofundamento",
        content: "Prática consistente sobre movimentos da Capoeira Angola: movimentação característica, formas de chamada (pé do berimbau e passo a dois) e estilos de jogos. Continuação dos ensinamentos sobre fundamentos da Angola.",
        location: "Ginásio COESPE",
        tags: ["Angola", "Prática", "Movimentos", "Chamada"],
        type: "practice"
      },
      {
        date: "21/05/2025",
        title: "Roda de Capoeira Angola - Fechamento do Ciclo",
        content: "Fechamento do ciclo TGfU com uma Roda de Capoeira Angola. Detalhes da visita ao espaço do Mestre Igor para tratativas sobre o formulário do IPHAN para registro no Portal da Capoeira.",
        location: "Ginásio COESPE",
        tags: ["Angola", "Roda", "TGfU", "IPHAN"],
        type: "practice"
      },
      {
        date: "26/05/2025",
        title: "Capoeira Regional - Método de Mestre Bimba",
        content: "Aula 100% prática sobre fundamentos da Capoeira Regional Baiana de Mestre Bimba (Sr. Manuel dos Reis Machado). Vivência do método da sequência de Mestre Bimba e os balões cinturados, com toques da regional: Banguela, Regional e Iúna.",
        location: "Ginásio COESPE",
        tags: ["Regional", "Bimba", "Sequência", "Toques", "Banguela"],
        type: "practice"
      },
      {
        date: "28/05/2025",
        title: "Roda de Capoeira Regional - Extensão",
        content: "Roda de Capoeira Regional no retorno do ciclo TGfU em interação com o projeto de extensão Capoeira do Brasil. Aula eminentemente prática. Organização dos grupos para visitas programadas.",
        location: "Ginásio COESPE",
        tags: ["Regional", "Roda", "Extensão", "TGfU"],
        type: "practice"
      },
      {
        date: "16/06/2025",
        title: "Aspectos Folclóricos Independentes da Capoeira",
        content: "Aspectos folclóricos associados à cultura da capoeiragem, mas que podem ser independentes da Capoeira: 1) Ijexá; 2) Congado; 3) Maculelê; e 4) Samba de Roda. Análise das influências e intersecções culturais.",
        location: "Ginásio COESPE",
        tags: ["Folclore", "Cultura", "Ijexá", "Congado", "Maculelê"],
        type: "mixed"
      },
      {
        date: "18/06/2025",
        title: "Roda de Conversa - Cultivo da Cabaça",
        content: "Roda de conversa sobre o processo de cultivo da cabaça. Cada aluno contará sua experiência e trará sua muda ou jaca com terra. Distribuição de mais sementes para quem não conseguiu germinar. Plantio na horta do Departamento de Nutrição. Lançamento das notas sobre o cultivo das plantas na Capoeira.",
        location: "Horta DEF Nutrição",
        tags: ["Plantas", "Cabaça", "Experiência", "Avaliação"],
        type: "theory"
      },
      {
        date: "23/06/2025",
        title: "Floreios na Capoeira e Estética",
        content: "Floreios na Capoeira e suas relações com o campo da estética. Aula prática iniciada na sala de ginástica. Texto no SIGAA para fomentar discussões durante a prática sobre aspectos estéticos da capoeira.",
        location: "Ginásio COESPE",
        tags: ["Floreios", "Estética", "Arte", "Prática"],
        type: "practice"
      },
      {
        date: "25/06/2025",
        title: "Preparação Física, Portfólio e Musicalidade",
        content: "Preparação física na Capoeira com visitas a laboratório e sala de musculação para reflexão crítica sobre o processo de preparação corporal. Apresentação do modelo de portfólio e planejamento da semana de musicalidade na Capoeira.",
        location: "Sala 3 + Laboratórios + Musculação",
        tags: ["Preparação", "Portfólio", "Musicalidade", "Laboratório"],
        type: "mixed"
      }
    ];

    classesData.forEach(classData => this.createClass(classData));

    // Activities data
    const activitiesData: InsertActivity[] = [
      {
        title: "Entrega das Sementes de Cabaça",
        description: "Primeira imagem do projeto: entrega das sementes de cabaça aos alunos, marcando o início do processo de cultivo que conecta teoria e prática. Cada estudante recebeu sementes para germinar em casa, compreendendo o ciclo completo desde o plantio até a confecção do berimbau.",
        date: "Início do semestre",
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "practice"
      },
      {
        title: "Roda de Capoeira na Aula - 21/05",
        description: "Segunda imagem registrada: roda de capoeira realizada em aula no dia 21/05, fechamento do ciclo TGfU com Capoeira Angola. Momento de aplicação prática dos fundamentos aprendidos, com participação ativa de todos os estudantes na roda tradicional.",
        date: "21/05/2025",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "practice"
      },
      {
        title: "Cartaz - Roda em Homenagem aos Povos Originários",
        description: "Terceira imagem: divulgação do cartaz para a roda em homenagem ao Dia dos Povos Originários. Evento organizado pelos alunos divididos em 3 grupos como atividade de reposição, reconhecendo a contribuição indígena fundamental na formação da capoeira.",
        date: "19/04/2025",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "event"
      },
      {
        title: "Encontro com Mestre Junior Orca - 12/06",
        description: "Quarta imagem registrada: encontro e homenagem ao Mestre Junior Orca no dia 12/06. Momento especial de conexão com a tradição, fortalecendo os laços com mestres tradicionais e compreendendo a linhagem histórica da capoeira no Rio Grande do Norte.",
        date: "12/06/2025",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "event"
      },
      {
        title: "Visita ao Mestre Igor - Capoeira Nacional",
        description: "Atividade de campo: visita ao espaço do Mestre Igor, da Capoeira Nacional (Angola), para tratativas sobre o formulário do IPHAN e possível registro no Portal da Capoeira. Experiência prática de pesquisa e documentação cultural.",
        date: "Maio 2025",
        imageUrl: "https://images.unsplash.com/photo-1493225457124-f18891b9b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "event"
      },
      {
        title: "Projeto de Extensão - Capoeira do Brasil",
        description: "Interação com o projeto de extensão Capoeira do Brasil durante as rodas de Capoeira Regional. Exemplo prático de como levar a capoeira para além da sala de aula, mantendo-a viva na comunidade.",
        date: "28/05/2025",
        imageUrl: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "practice"
      }
    ];

    activitiesData.forEach(activity => this.createActivity(activity));

    // Seminars data
    const seminarsData: InsertSeminar[] = [
      {
        groupNumber: 1,
        topic: "Filosofia e Capoeira",
        members: ["Normann", "Mariana", "Paulo Victor"],
        description: "Análise filosófica dos aspectos da capoeira"
      },
      {
        groupNumber: 2,
        topic: "História e Capoeira",
        members: ["André", "Jonatan", "Francisco"],
        description: "Estudo histórico da capoeira no Brasil"
      },
      {
        groupNumber: 3,
        topic: "Antropologia e Capoeira",
        members: ["Joel", "Elbert"],
        description: "Aspectos antropológicos da manifestação cultural"
      },
      {
        groupNumber: 4,
        topic: "Arte e Capoeira",
        members: ["Alex", "Lucicledson"],
        description: "Expressões artísticas na capoeira"
      },
      {
        groupNumber: 5,
        topic: "Pedagogia do Esporte e Capoeira",
        members: ["Josean", "André Lucas", "Roberto"],
        description: "Métodos pedagógicos aplicados à capoeira"
      },
      {
        groupNumber: 6,
        topic: "Fisiologia do Exercício e Capoeira",
        members: ["Brendha", "Laysia"],
        description: "Aspectos fisiológicos da prática da capoeira"
      },
      {
        groupNumber: 7,
        topic: "Biomecânica e Capoeira",
        members: ["Victor Hugo", "Gustavo"],
        description: "Análise biomecânica dos movimentos"
      },
      {
        groupNumber: 8,
        topic: "Anatomia do Movimento e Capoeira",
        members: ["Carlos Vitor", "Pablo", "José"],
        description: "Estudo anatômico dos movimentos da capoeira"
      }
    ];

    seminarsData.forEach(seminar => this.createSeminar(seminar));

    // Reflections data
    const reflectionsData: InsertReflection[] = [
      {
        title: "A Dinâmica da Capoeira Viva",
        content: "Durante o semestre, compreendi que a metodologia do professor em nos levar constantemente para outros espaços - diferentes salas, ginásios, ambientes externos - reflete uma verdade fundamental sobre a capoeira: ela só se mantém viva quando sai dos espaços tradicionais. A capoeira exige que tomemos a iniciativa de levá-la para onde as pessoas estão. Não basta conhecer os movimentos; é preciso compartilhar, ensinar, praticar em comunidade. Essa dinâmica espacial conecta-se diretamente com a resistência histórica dos quilombos e a necessidade de mobilidade para a sobrevivência cultural."
      },
      {
        title: "Metodologia TGfU e Aprendizado Significativo",
        content: "O Teaching Games for Understanding (TGfU) foi a metodologia central do curso, sempre fechando ciclos com rodas práticas. Diferente do ensino técnico tradicional, o TGfU nos permitiu compreender a capoeira como jogo antes de decompor seus elementos. Primeiro vivenciamos a roda, depois entendemos os movimentos, depois contextualizamos historicamente. Esta sequência invertida fez todo sentido: a capoeira é jogo, é cultura, é resistência - não apenas uma sequência de golpes."
      },
      {
        title: "Cultivo da Cabaça como Metáfora Pedagógica",
        content: "A experiência de cultivar as sementes da cabaça simbolizou perfeitamente a metodologia do curso: começamos com algo pequeno, cuidamos com dedicação, e eventualmente colhemos os frutos que se tornarão instrumentos. O processo avaliativo paralelo - visitação ao IPHAN, registro de grupos - nos ensinou que a capoeira é patrimônio vivo que precisa ser documentado e preservado. Assim como a cabaça cresce lentamente, nossa compreensão da capoeira se desenvolveu ao longo do semestre através da prática constante."
      },
      {
        title: "Três Momentos Avaliativos: Uma Pedagogia Participativa",
        content: "Os três momentos avaliativos refletiram a própria essência da capoeira: 1) Participação (maior peso) - porque na capoeira, estar presente e engajado é fundamental; 2) Seminários científicos - conectando tradição com conhecimento acadêmico contemporâneo; 3) Projetos externos - levando a capoeira para a comunidade. Não foram apenas formas de avaliar, mas de vivenciar integralmente o que significa ser capoeirista na universidade."
      },
      {
        title: "Integração entre Angola e Regional",
        content: "Vivenciar tanto a Capoeira Angola quanto a Regional, com suas metodologias específicas (chamadas de pé do berimbau versus sequências de Mestre Bimba), mostrou que ambas são caminhos válidos de preservação cultural. A Angola nos conectou com a ancestralidade e o ritual; a Regional nos ensinou sistematização e pedagogia. Ambas fecharam seus ciclos com rodas, sempre retornando ao jogo como elemento central."
      }
    ];

    reflectionsData.forEach(reflection => this.createReflection(reflection));
  }

  // Classes methods
  async getAllClasses(): Promise<Class[]> {
    return Array.from(this.classes.values()).sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number);
      const [dayB, monthB, yearB] = b.date.split('/').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateA.getTime() - dateB.getTime();
    });
  }

  async getClassById(id: number): Promise<Class | undefined> {
    return this.classes.get(id);
  }

  async createClass(classData: InsertClass): Promise<Class> {
    const id = this.currentClassId++;
    const newClass: Class = { 
      ...classData, 
      id,
      location: classData.location ?? null,
      tags: classData.tags ?? null
    };
    this.classes.set(id, newClass);
    return newClass;
  }

  // Activities methods
  async getAllActivities(): Promise<Activity[]> {
    return Array.from(this.activities.values());
  }

  async getActivityById(id: number): Promise<Activity | undefined> {
    return this.activities.get(id);
  }

  async createActivity(activity: InsertActivity): Promise<Activity> {
    const id = this.currentActivityId++;
    const newActivity: Activity = { 
      ...activity, 
      id,
      date: activity.date ?? null,
      imageUrl: activity.imageUrl ?? null
    };
    this.activities.set(id, newActivity);
    return newActivity;
  }

  // Seminars methods
  async getAllSeminars(): Promise<Seminar[]> {
    return Array.from(this.seminars.values()).sort((a, b) => a.groupNumber - b.groupNumber);
  }

  async getSeminarById(id: number): Promise<Seminar | undefined> {
    return this.seminars.get(id);
  }

  async createSeminar(seminar: InsertSeminar): Promise<Seminar> {
    const id = this.currentSeminarId++;
    const newSeminar: Seminar = { 
      ...seminar, 
      id,
      description: seminar.description ?? null,
      members: seminar.members ?? null
    };
    this.seminars.set(id, newSeminar);
    return newSeminar;
  }

  // Reflections methods
  async getAllReflections(): Promise<Reflection[]> {
    return Array.from(this.reflections.values());
  }

  async getReflectionById(id: number): Promise<Reflection | undefined> {
    return this.reflections.get(id);
  }

  async createReflection(reflection: InsertReflection): Promise<Reflection> {
    const id = this.currentReflectionId++;
    const newReflection: Reflection = { 
      ...reflection, 
      id, 
      createdAt: new Date()
    };
    this.reflections.set(id, newReflection);
    return newReflection;
  }
}

export const storage = new MemStorage();
