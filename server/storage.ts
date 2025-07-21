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
        content: "Abordaremos o modo kilombola de viver e sua influência sobre a capoeiragem. Prática na sala de ginástica - reforço da ginga e esquivas básicas.",
        location: "Sala 3 DEF + Ginásio I COESPE",
        tags: ["História", "Prática", "Quilombos"],
        type: "mixed"
      },
      {
        date: "07/04/2025",
        title: "Guerras pela Independência",
        content: "Guerras pela independência no Brasil, mitos e fatos sobre a participação de indígenas, escravizados e ex-escravizados. Fundamentos básicos da movimentação da Capoeira.",
        location: "Sala 3 + Ginásio I COESPE",
        tags: ["História", "Prática", "Independência"],
        type: "mixed"
      },
      {
        date: "14/04/2025",
        title: "Movimentos de Ataque e Ilustrações de Kalixto",
        content: "Movimentos de ataque na Capoeira via TGfU. Análise das ilustrações de Kalixto sobre as maltas de Capoeira no Rio de Janeiro.",
        location: "Ginásio COESPE",
        tags: ["Prática", "Arte", "História"],
        type: "practice"
      },
      {
        date: "16/04/2025",
        title: "Primeiras Escolas e Descriminalização",
        content: "Primeiras escolas de Capoeira, a Capoeira e o projeto nacionalista brasileiro e sua descriminalização. Roda de Capoeira.",
        location: "Sala 3 DEF + Ginásio I COESPE",
        tags: ["História", "Prática", "Política"],
        type: "mixed"
      },
      {
        date: "12/05/2025",
        title: "Plantas na Capoeira",
        content: "Plantas na Capoeira e preparação física. Início do processo avaliativo de visitação ao IPHAN.",
        location: "Sala 3",
        tags: ["Botanica", "Preparação", "IPHAN"],
        type: "theory"
      },
      {
        date: "14/05/2025",
        title: "Fundamentos da Capoeira Angola",
        content: "Início dos ensinamentos sobre os fundamentos da Capoeira Angola. Prática e Roda de Angola.",
        location: "Sala 3 + Ginásio",
        tags: ["Angola", "Prática", "Fundamentos"],
        type: "mixed"
      },
      {
        date: "19/05/2025",
        title: "Movimentos da Capoeira Angola",
        content: "Prática sobre movimentos da Capoeira Angola, incluindo movimentação característica, formas de chamada e estilos de jogos.",
        location: "Ginásio COESPE",
        tags: ["Angola", "Prática", "Movimentos"],
        type: "practice"
      },
      {
        date: "21/05/2025",
        title: "Roda de Capoeira Angola",
        content: "Fechamento do ciclo TGfU com uma Roda de Capoeira Angola.",
        location: "Ginásio COESPE",
        tags: ["Angola", "Roda", "TGfU"],
        type: "practice"
      },
      {
        date: "26/05/2025",
        title: "Capoeira Regional de Mestre Bimba",
        content: "Fundamentos da Capoeira Regional Baiana de Mestre Bimba. Sequência de Mestre Bimba e balões cinturados.",
        location: "Ginásio COESPE",
        tags: ["Regional", "Bimba", "Sequência"],
        type: "practice"
      },
      {
        date: "28/05/2025",
        title: "Roda de Capoeira Regional",
        content: "Roda de Capoeira Regional no retorno do ciclo do TGfU em interação com o projeto de extensão Capoeira do Brasil.",
        location: "Ginásio COESPE",
        tags: ["Regional", "Roda", "Extensão"],
        type: "practice"
      },
      {
        date: "16/06/2025",
        title: "Aspectos Folclóricos",
        content: "Aspectos folclóricos associados à cultura da capoeiragem: Ijexá, Congado, Maculelê e Samba de Roda.",
        location: "Ginásio",
        tags: ["Folclore", "Cultura", "Tradição"],
        type: "mixed"
      },
      {
        date: "18/06/2025",
        title: "Cultivo da Cabaça - Roda de Conversa",
        content: "Roda de conversa sobre o processo de cultivo da cabaça. Compartilhamento de experiências e plantio na horta do Departamento de Nutrição.",
        location: "Horta DEF Nutrição",
        tags: ["Plantas", "Cabaça", "Experiência"],
        type: "theory"
      },
      {
        date: "23/06/2025",
        title: "Floreios e Estética",
        content: "Floreios na Capoeira e suas relações com o campo da estética. Aula prática com reflexões estéticas.",
        location: "Ginásio",
        tags: ["Floreios", "Estética", "Arte"],
        type: "practice"
      },
      {
        date: "25/06/2025",
        title: "Preparação Física e Portfólio",
        content: "Preparação física na Capoeira, visitas a laboratório e sala de musculação. Apresentação do modelo de portfólio e semana de musicalidade.",
        location: "Sala 3 + Laboratórios",
        tags: ["Preparação", "Portfólio", "Musicalidade"],
        type: "mixed"
      }
    ];

    classesData.forEach(classData => this.createClass(classData));

    // Activities data
    const activitiesData: InsertActivity[] = [
      {
        title: "Entrega das Sementes",
        description: "Início do projeto de cultivo da cabaça, conectando os alunos com as plantas utilizadas na confecção de instrumentos tradicionais da capoeira.",
        date: "Início do semestre",
        imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "practice"
      },
      {
        title: "Roda de Capoeira - 21/05",
        description: "Prática em roda de capoeira, aplicando os fundamentos aprendidos e vivenciando a energia coletiva da manifestação cultural.",
        date: "21/05/2025",
        imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "practice"
      },
      {
        title: "Dia dos Povos Originários",
        description: "Divulgação e organização do evento em homenagem ao Dia dos Povos Originários, reconhecendo a contribuição indígena na capoeira.",
        date: "19/04/2025",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "event"
      },
      {
        title: "Homenagem ao Mestre Junior Orca",
        description: "Encontro e homenagem ao Mestre Junior Orca, fortalecendo a conexão com os mestres tradicionais e a linhagem da capoeira.",
        date: "12/06/2025",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        category: "event"
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
        content: "Durante o semestre, compreendi que a metodologia do professor em nos levar constantemente para outros espaços - diferentes salas, ginásios, ambientes externos - reflete uma verdade fundamental sobre a capoeira: ela só se mantém viva quando sai dos espaços tradicionais. A capoeira exige que tomemos a iniciativa de levá-la para onde as pessoas estão. Não basta conhecer os movimentos; é preciso compartilhar, ensinar, praticar em comunidade."
      },
      {
        title: "Aprendizado Integrado",
        content: "A experiência de cultivar as sementes da cabaça simbolizou perfeitamente este conceito: começamos com algo pequeno, cuidamos com dedicação, e eventualmente colhemos os frutos que se tornarão instrumentos. Assim como a capoeira - ela cresce quando nutrida pela prática constante e pelo compartilhamento."
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
    const newClass: Class = { ...classData, id };
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
    const newActivity: Activity = { ...activity, id };
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
    const newSeminar: Seminar = { ...seminar, id };
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
