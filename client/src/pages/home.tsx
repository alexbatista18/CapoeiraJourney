import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, Users, BookOpen, Lightbulb, Images, Drum, Sprout, BicepsFlexed } from "lucide-react";
import Sidebar from "../components/sidebar";
import TimelineCard from "../components/timeline-card";
import ImageModal from "../components/image-modal";
import SectionHeader from "../components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Dados estáticos para GitHub Pages
const staticClasses = [
  {
    id: 1,
    date: "2025-03-31",
    title: "Introdução à Capoeira Angola",
    description: "Primeira aula sobre os fundamentos históricos e culturais da Capoeira Angola, abordando suas origens africanas e desenvolvimento no Brasil.",
    type: "teoria",
    topics: ["História da Capoeira", "Capoeira Angola vs Regional", "Mestres históricos"]
  },
  {
    id: 2,
    date: "2025-04-02",
    title: "Movimentos Básicos e Ginga",
    description: "Prática dos movimentos fundamentais da capoeira, com foco na ginga como movimento base e primeiras esquivas.",
    type: "prática",
    topics: ["Ginga", "Cocorinha", "Negativa", "Esquivas básicas"]
  },
  {
    id: 3,
    date: "2025-04-07",
    title: "Instrumentos e Musicalidade",
    description: "Aprendizado sobre os instrumentos da capoeira, especialmente o berimbau, e sua importância na roda.",
    type: "música",
    topics: ["Berimbau", "Pandeiro", "Atabaque", "Cantigas tradicionais"]
  },
  {
    id: 4,
    date: "2025-04-09",
    title: "Roda de Capoeira",
    description: "Primeira experiência prática em roda, aplicando os conhecimentos adquiridos nas aulas anteriores.",
    type: "prática",
    topics: ["Protocolo da roda", "Interação entre capoeiristas", "Energia e fluxo"]
  }
];

const staticActivities = [
  {
    id: 1,
    title: "Visita ao Museu Afro-Brasileiro",
    description: "Atividade complementar para compreender o contexto histórico e cultural da capoeira.",
    date: "2025-04-15",
    type: "cultural",
    imageUrl: "/image5.jpeg"
  },
  {
    id: 2,
    title: "Workshop de Confecção de Instrumentos",
    description: "Aprendizado prático sobre como construir e manter instrumentos tradicionais da capoeira.",
    date: "2025-04-20",
    type: "prático",
    imageUrl: "/image6.jpeg"
  }
];

const staticSeminars = [
  {
    id: 1,
    title: "Capoeira e Resistência Cultural",
    speaker: "Mestre João",
    date: "2025-04-25",
    description: "Seminário sobre o papel da capoeira como forma de resistência e preservação cultural.",
    groupNumber: 1,
    topic: "Resistência Cultural",
    members: ["Ana Silva", "Carlos Santos", "Maria Oliveira"]
  },
  {
    id: 2,
    title: "Tradições Musicais da Capoeira",
    speaker: "Contramestre Pedro",
    date: "2025-05-02",
    description: "Exploração profunda da musicalidade e instrumentos tradicionais da capoeira.",
    groupNumber: 2,
    topic: "Musicalidade",
    members: ["João Costa", "Fernanda Lima", "Roberto Alves"]
  }
];

const staticReflections = [
  {
    id: 1,
    title: "Reflexão sobre Identidade Cultural",
    content: "A capoeira me fez compreender melhor a riqueza da cultura afro-brasileira e sua importância na formação da identidade nacional.",
    date: "2025-04-10",
    author: "Estudante"
  },
  {
    id: 2,
    title: "Movimento e Filosofia",
    content: "Descobri que a capoeira vai além dos movimentos físicos - é uma filosofia de vida que ensina respeito, disciplina e comunidade.",
    date: "2025-04-12",
    author: "Estudante"
  }
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  // Usar dados estáticos em vez de queries para GitHub Pages
  const classes = staticClasses;
  const activities = staticActivities;
  const seminars = staticSeminars;
  const reflections = staticReflections;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openImageModal = (src: string, title: string, description: string) => {
    setSelectedImage({ src, title, description });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-neutral-bg">
      <div className="flex">
        <Sidebar onNavigate={scrollToSection} />
        
        <main className="flex-1 ml-72 p-8">
          {/* Hero Section */}
          <motion.section 
            id="inicio"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-capoeira rounded-xl shadow-lg p-8 text-white">
              <h1 className="text-4xl font-bold mb-4">Portfólio de Capoeira</h1>
              <p className="text-xl font-light mb-6">
                Uma jornada através do semestre de aprendizado em Capoeira - DEF/UFRN
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white bg-opacity-20 text-white">
                  Março - Julho 2025
                </Badge>
                <Badge variant="secondary" className="bg-white bg-opacity-20 text-white">
                  História & Prática
                </Badge>
                <Badge variant="secondary" className="bg-white bg-opacity-20 text-white">
                  Cultura Brasileira
                </Badge>
              </div>
            </div>
          </motion.section>

          {/* Timeline das Aulas */}
          <motion.section 
            id="timeline"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SectionHeader 
              title="Timeline das Aulas" 
              icon={<Calendar className="w-6 h-6" />}
            />
            <div className="space-y-6">
              {classes.map((classItem, index) => (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TimelineCard classItem={classItem} />
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Momentos Históricos */}
          <motion.section 
            id="momentos-historicos"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SectionHeader 
              title="Momentos Históricos" 
              icon={<BookOpen className="w-6 h-6" />}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={"/image1.jpg"}
                    alt="Quilombos e Escravidão"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">Quilombos e Escravidão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estudo sobre o modo quilombola de viver e como essa forma de organização 
                    social influenciou diretamente o desenvolvimento da capoeira como 
                    manifestação cultural de resistência.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={"/image2.jpg"}
                    alt="Influência Indígena"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">Influência Indígena</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Análise da contribuição dos povos originários para a capoeira, incluindo 
                    aspectos linguísticos, rituais e movimentos que foram incorporados à prática.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={"/image3.jpeg"}
                    alt="Guerra do Paraguai"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">Guerra do Paraguai</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Contextualização histórica da participação de capoeiristas na Guerra do 
                    Paraguai e como este conflito impactou a percepção social da capoeira no Brasil.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={"/image4.jpeg"}
                    alt="Luiz Gama"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">Luiz Gama</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estudo sobre Luiz Gama e outros abolicionistas, compreendendo o papel da 
                    capoeira no movimento de libertação e resistência negra no Brasil.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Galeria de Atividades Práticas */}
          <motion.section 
            id="galeria"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SectionHeader 
              title="Atividades Práticas" 
              icon={<Images className="w-6 h-6" />}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {activities.map((activity) => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative cursor-pointer" onClick={() => 
                    openImageModal(activity.imageUrl ?? '', activity.title, activity.description)
                  }>
                    <img 
                      src={activity.imageUrl ?? ''}
                      alt={activity.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                    {activity.date && (
                      <Badge variant="outline" className="w-fit">
                        {activity.date}
                      </Badge>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{activity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Fundamentos */}
          <motion.section 
            id="fundamentos"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionHeader 
              title="Fundamentos" 
              icon={<BicepsFlexed className="w-6 h-6" />}
            />
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚪</span>
                  </div>
                  <CardTitle>Capoeira Angola</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Estilo tradicional, mais próximo ao chão, com movimentos lentos e ritualizados. 
                    Foco na chamada e no jogo de dois.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <CardTitle>Capoeira Regional</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Criada por Mestre Bimba, incorpora movimentos de luta e sequências 
                    codificadas. Mais atlética e vertical.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Metodologias de Ensino */}
          <motion.section 
            id="metodologias"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SectionHeader 
              title="Metodologias de Ensino" 
              icon={<BookOpen className="w-6 h-6" />}
            />
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-capoeira-blue rounded-full p-3">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-capoeira-blue">TGfU - Teaching Games for Understanding</CardTitle>
                      <p className="text-sm text-gray-600">Metodologia Central do Curso</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Princípios da Metodologia:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-capoeira-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>Compreensão do jogo antes da técnica</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-capoeira-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>Vivência prática seguida de reflexão</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-capoeira-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>Fechamento de ciclos com rodas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-capoeira-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span>Contextualização histórica e cultural</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Aplicação Prática:</h4>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-800 text-sm mb-2">
                          <strong>Sequência Metodológica:</strong>
                        </p>
                        <ol className="text-blue-700 text-sm space-y-1">
                          <li>1. Vivência da roda de capoeira</li>
                          <li>2. Decomposição dos movimentos</li>
                          <li>3. Prática técnica orientada</li>
                          <li>4. Contextualização histórica</li>
                          <li>5. Retorno à roda com compreensão ampliada</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl mb-2">🎯</div>
                      <h5 className="font-semibold">Angola</h5>
                      <p className="text-xs text-gray-600">Chamadas e passo a dois</p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-2xl mb-2">⚡</div>
                      <h5 className="font-semibold">Regional</h5>
                      <p className="text-xs text-gray-600">Sequências e balões</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl mb-2">🔄</div>
                      <h5 className="font-semibold">Ciclos</h5>
                      <p className="text-xs text-gray-600">Sempre fechados com rodas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-capoeira-green">Pedagogia Espacial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Utilização de diferentes espaços como estratégia pedagógica: salas de aula para teoria, 
                    ginásios para prática, ambientes externos para vivências comunitárias.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded text-white flex items-center justify-center text-sm">S3</div>
                      <div>
                        <p className="font-medium">Sala 3 DEF</p>
                        <p className="text-xs text-gray-600">Teoria e contexto</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded text-white flex items-center justify-center text-sm">G</div>
                      <div>
                        <p className="font-medium">Ginásio COESPE</p>
                        <p className="text-xs text-gray-600">Prática e rodas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="w-8 h-8 bg-amber-500 rounded text-white flex items-center justify-center text-sm">E</div>
                      <div>
                        <p className="font-medium">Espaços Externos</p>
                        <p className="text-xs text-gray-600">Comunidade e extensão</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Seminários */}
          <motion.section 
            id="seminarios"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SectionHeader 
              title="Seminários de Atualização" 
              icon={<Users className="w-6 h-6" />}
            />
            <Card>
              <CardHeader>
                <CardTitle>Apresentações Multidisciplinares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Apresentações em grupos sobre diferentes aspectos da capoeira, integrando 
                  conhecimentos multidisciplinares:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {seminars.map((seminar) => (
                    <div key={seminar.id} className="border-l-4 border-capoeira-green pl-4">
                      <h4 className="font-semibold">
                        Grupo {seminar.groupNumber} - {seminar.topic}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {seminar.members?.join(', ')}
                      </p>
                      {seminar.description && (
                        <p className="text-xs text-gray-500 mt-1">{seminar.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Cultura e Folclore */}
          <motion.section 
            id="cultura"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <SectionHeader 
              title="Cultura & Folclore" 
              icon={<Drum className="w-6 h-6" />}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Ijexá", description: "Ritmo afro-brasileiro conectado às tradições religiosas", color: "bg-orange-500" },
                { name: "Congado", description: "Manifestação cultural de origem africana", color: "bg-purple-500" },
                { name: "Maculelê", description: "Dança folclórica com bastões", color: "bg-green-500" },
                { name: "Samba de Roda", description: "Expressão musical e coreográfica tradicional", color: "bg-yellow-500" }
              ].map((item) => (
                <Card key={item.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`${item.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                      <Drum className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">{item.name}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>

          {/* Reflexões Pessoais */}
          <motion.section 
            id="reflexoes"
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <SectionHeader 
              title="Reflexões Pessoais" 
              icon={<Lightbulb className="w-6 h-6" />}
            />
            <Card>
              <CardContent className="p-6">
                <div className="gradient-capoeira rounded-lg p-6 text-white mb-6">
                  <h3 className="text-xl font-semibold mb-4">A Dinâmica da Capoeira Viva</h3>
                  <p className="leading-relaxed">
                    Durante o semestre, compreendi que a metodologia do professor em nos levar 
                    constantemente para outros espaços - diferentes salas, ginásios, ambientes 
                    externos - reflete uma verdade fundamental sobre a capoeira: <strong>ela só 
                    se mantém viva quando sai dos espaços tradicionais</strong>.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {reflections.map((reflection) => (
                    <div key={reflection.id} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-capoeira-green mb-3">
                        {reflection.title}
                      </h4>
                      <p className="text-gray-600">{reflection.content}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-6 bg-capoeira-yellow bg-opacity-10 border-l-4 border-capoeira-yellow rounded-r-lg">
                  <p className="italic text-gray-700">
                    "A capoeira me ensinou que o conhecimento só se completa quando é transmitido. 
                    Cada roda, cada movimento ensinado, cada história compartilhada contribui para 
                    manter viva esta manifestação cultural tão rica e significativa."
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </main>
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          title={selectedImage.title}
          description={selectedImage.description}
          onClose={closeImageModal}
        />
      )}
    </div>
  );
}
