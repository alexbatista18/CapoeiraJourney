import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  BookOpen,
  Lightbulb,
  Images,
  Drum,
  Sprout,
  BicepsFlexed,
} from "lucide-react";
// Sidebar import removed
import SimpleTimelineCard from "../components/simple-timeline-card";
import ImageModal from "../components/image-modal";
import SectionHeader from "../components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  allClasses,
  allActivities,
  allSeminars,
  allReflections,
} from "@/lib/staticData";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  // Usar dados estáticos diretos
  const classes = allClasses;
  const activities = allActivities;
  const seminars = allSeminars;
  const reflections = allReflections;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openImageModal = (src: string, title: string, description: string) => {
    setSelectedImage({ src, title, description });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "theory":
        return "bg-blue-100 text-blue-800";
      case "practice":
        return "bg-green-100 text-green-800";
      case "mixed":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Sidebar removed for landing page */}
      <main>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-yellow-600 opacity-90"></div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Jornada da <span className="text-yellow-300">Capoeira</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Portfólio acadêmico da disciplina de Capoeira - DEF/UFRN
                <br />
                Uma imersão completa na cultura, história e prática da arte
                afro-brasileira
              </p>
              <Button
                onClick={() => scrollToSection("aulas")}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Explorar Jornada
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Timeline das Aulas */}
        <section id="aulas" className="py-20 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={Calendar}
              title="Timeline das Aulas"
              subtitle="Acompanhe nossa jornada de aprendizado através das aulas ministradas"
            />

            <div className="mt-12 space-y-8">
              {classes.map((classItem, index) => (
                <SimpleTimelineCard
                  key={classItem.id}
                  date={classItem.date}
                  title={classItem.title}
                  description={classItem.content}
                  type={classItem.type}
                  tags={classItem.tags || []}
                  location={classItem.location || ""}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contexto Histórico */}
        <section id="historia" className="py-20 px-4 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={BookOpen}
              title="Contexto Histórico"
              subtitle="Explorando as raízes e a evolução da Capoeira no Brasil"
            />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={"/CapoeiraJourney/image1.jpg"}
                    alt="Quilombos e Escravidão"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">
                    Quilombos e Escravidão
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estudo aprofundado sobre os quilombos como espaços de
                    resistência e desenvolvimento da capoeira durante o período
                    colonial e imperial brasileiro.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={"/CapoeiraJourney/image2.jpg"}
                    alt="Influência Indígena"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">
                    Influência Indígena
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Análise da contribuição dos povos originários para a
                    capoeira, incluindo aspectos linguísticos, rituais e
                    movimentos que foram incorporados à prática.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={"/CapoeiraJourney/image3.jpeg"}
                    alt="Guerra do Paraguai"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">
                    Guerra do Paraguai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Contextualização histórica da participação de capoeiristas
                    na Guerra do Paraguai e como este conflito impactou a
                    percepção social da capoeira no Brasil.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={"/CapoeiraJourney/image4.jpeg"}
                    alt="Luiz Gama"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-capoeira-blue">
                    Luiz Gama
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Estudo sobre Luiz Gama e outros abolicionistas,
                    compreendendo o papel da capoeira no movimento de libertação
                    e resistência negra no Brasil.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Atividades Práticas */}
        <section id="atividades" className="py-20 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={Images}
              title="Atividades Práticas"
              subtitle="Registros fotográficos das principais atividades desenvolvidas"
            />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {activities.map((activity) => (
                <Card
                  key={activity.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      activity.imageUrl || "",
                      activity.title,
                      activity.description
                    )
                  }
                >
                  <div className="relative">
                    <img
                      src={activity.imageUrl || ""}
                      alt={activity.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-orange-500 hover:bg-orange-600">
                      {activity.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-capoeira-blue">
                      {activity.title}
                    </CardTitle>
                    {activity.date && (
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {activity.date}
                      </p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seminários */}
        <section id="seminarios" className="py-20 px-4 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={Users}
              title="Seminários Científicos"
              subtitle="Apresentações acadêmicas conectando diferentes áreas do conhecimento com a Capoeira"
            />

            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seminars.map((seminar) => (
                <Card
                  key={seminar.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="mb-2">
                        Grupo {seminar.groupNumber}
                      </Badge>
                      <Users className="h-5 w-5 text-orange-500" />
                    </div>
                    <CardTitle className="text-lg">{seminar.topic}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">
                      {seminar.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      <strong>Membros:</strong> {seminar.members?.join(", ")}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reflexões */}
        <section id="reflexoes" className="py-20 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={Lightbulb}
              title="Reflexões e Aprendizados"
              subtitle="Pensamentos e descobertas ao longo da jornada acadêmica"
            />

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {reflections.map((reflection) => (
                <Card
                  key={reflection.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-capoeira-blue flex items-center">
                      <Lightbulb className="h-5 w-5 mr-2 text-yellow-500" />
                      {reflection.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {reflection.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section
          id="metodologia"
          className="py-20 px-4 lg:px-8 bg-gradient-to-br from-orange-100 to-red-100"
        >
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              icon={Drum}
              title="Metodologia TGfU"
              subtitle="Teaching Games for Understanding aplicado à Capoeira"
            />

            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                    <Sprout className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Vivência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Primeiro experimentamos os movimentos em contexto de jogo e
                    roda, compreendendo a essência antes da técnica.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4">
                    <BicepsFlexed className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Sistematização</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Após a vivência, refinamos a técnica e compreendemos os
                    fundamentos de cada movimento e situação.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                    <Drum className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Aplicação</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fechamos cada ciclo com rodas de capoeira, aplicando todo o
                    conhecimento adquirido em situação real.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Portfólio de Capoeira</h3>
            <p className="text-gray-400 mb-4">
              Disciplina de Capoeira - Departamento de Educação Física
            </p>
            <p className="text-gray-400">
              Universidade Federal do Rio Grande do Norte (UFRN)
            </p>
          </div>
        </footer>
      </main>

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
