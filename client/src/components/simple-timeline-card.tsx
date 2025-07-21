import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SimpleTimelineCardProps {
  date: string;
  title: string;
  description: string;
  type: string;
  tags: string[];
  location: string;
  isLeft: boolean;
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'teoria':
      return 'bg-blue-100 text-blue-800';
    case 'prática':
      return 'bg-green-100 text-green-800';
    case 'mista':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    'História': 'bg-yellow-500 text-white',
    'Prática': 'bg-green-500 text-white',
    'Quilombos': 'bg-amber-600 text-white',
    'Angola': 'bg-yellow-500 text-white',
    'Regional': 'bg-red-500 text-white',
    'TGfU': 'bg-blue-500 text-white',
    'Estudo Dirigido': 'bg-purple-500 text-white',
    'República': 'bg-gray-500 text-white',
    'Arte': 'bg-pink-500 text-white',
    'Kalixto': 'bg-indigo-500 text-white',
    'Política': 'bg-red-600 text-white',
    'Evento': 'bg-orange-500 text-white',
    'Descriminalização': 'bg-green-600 text-white',
    'Avaliação': 'bg-gray-600 text-white',
    'Seminário': 'bg-blue-600 text-white',
    'Notas': 'bg-gray-500 text-white',
    'Artesanato': 'bg-yellow-600 text-white',
    'Berimbau': 'bg-orange-600 text-white',
    'Roda': 'bg-red-400 text-white',
    'IPHAN': 'bg-purple-600 text-white',
    'Projeto': 'bg-indigo-600 text-white',
    'Registro': 'bg-gray-700 text-white',
    'Botânica': 'bg-green-700 text-white',
    'Preparação': 'bg-blue-700 text-white',
    'Cabaça': 'bg-yellow-700 text-white',
    'Fundamentos': 'bg-red-700 text-white',
    'Mestre Igor': 'bg-orange-700 text-white',
    'Movimentos': 'bg-purple-700 text-white',
    'Chamada': 'bg-pink-600 text-white',
    'Bimba': 'bg-red-800 text-white',
    'Sequência': 'bg-yellow-800 text-white',
    'Toques': 'bg-blue-800 text-white',
    'Banguela': 'bg-green-800 text-white',
    'Extensão': 'bg-purple-800 text-white',
    'Folclore': 'bg-orange-800 text-white',
    'Cultura': 'bg-red-900 text-white',
    'Ijexá': 'bg-yellow-900 text-white',
    'Congado': 'bg-blue-900 text-white',
    'Maculelê': 'bg-green-900 text-white',
    'Plantas': 'bg-emerald-600 text-white',
    'Experiência': 'bg-teal-600 text-white',
    'Floreios': 'bg-cyan-600 text-white',
    'Estética': 'bg-sky-600 text-white',
    'Portfólio': 'bg-violet-600 text-white',
    'Musicalidade': 'bg-fuchsia-600 text-white',
    'Laboratório': 'bg-rose-600 text-white'
  };
  return colors[tag] || 'bg-gray-500 text-white';
};

export default function SimpleTimelineCard({ 
  date, 
  title, 
  description, 
  type, 
  tags, 
  location, 
  isLeft 
}: SimpleTimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowButton = description.length > 300;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} mb-8`}
    >
      {/* Timeline line */}
      <div className="hidden lg:flex flex-col items-center flex-shrink-0 mx-8">
        <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
        <div className="w-1 h-20 bg-orange-200 mt-2"></div>
      </div>
      
      {/* Card */}
      <Card className="flex-1 max-w-lg hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              {date}
            </div>
            <Badge className={getTypeColor(type)}>
              {type}
            </Badge>
          </div>
          <CardTitle className="text-lg text-capoeira-blue">{title}</CardTitle>
          {location && (
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          )}
        </CardHeader>
        <CardContent>
          <p className={`text-gray-700 mb-4 leading-relaxed ${!isExpanded && shouldShowButton ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          
          {shouldShowButton && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mb-4 text-blue-600 hover:text-blue-800"
            >
              {isExpanded ? (
                <>
                  Ver menos <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Ver mais <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
          )}
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className={`text-xs ${getTagColor(tag)}`}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
