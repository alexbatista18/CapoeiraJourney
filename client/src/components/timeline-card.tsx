import { motion } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import type { Class } from "@shared/schema";

interface TimelineCardProps {
  classItem: Class;
}

const getTagColor = (tag: string) => {
  const colors: Record<string, string> = {
    'História': 'bg-capoeira-yellow text-white',
    'Prática': 'bg-capoeira-blue text-white',
    'Quilombos': 'bg-amber-600 text-white',
    'Angola': 'bg-yellow-500 text-white',
    'Regional': 'bg-red-500 text-white',
    'Arte': 'bg-purple-500 text-white',
    'Cultura': 'bg-green-500 text-white',
    'Folclore': 'bg-orange-500 text-white',
    'Plantas': 'bg-emerald-500 text-white',
    'Preparação': 'bg-blue-600 text-white',
    'TGfU': 'bg-indigo-500 text-white',
    'IPHAN': 'bg-teal-500 text-white',
    'Fundamentos': 'bg-violet-500 text-white',
    'Movimentos': 'bg-rose-500 text-white',
    'Roda': 'bg-cyan-500 text-white',
    'Sequência': 'bg-lime-500 text-white',
    'Extensão': 'bg-pink-500 text-white',
    'Tradição': 'bg-stone-500 text-white',
    'Experiência': 'bg-amber-500 text-white',
    'Floreios': 'bg-fuchsia-500 text-white',
    'Estética': 'bg-sky-500 text-white',
    'Portfólio': 'bg-slate-500 text-white',
    'Musicalidade': 'bg-orange-600 text-white',
    'Independência': 'bg-green-600 text-white',
    'Política': 'bg-blue-700 text-white',
    'Botanica': 'bg-green-400 text-white',
    'Bimba': 'bg-red-600 text-white'
  };
  return colors[tag] || 'bg-gray-500 text-white';
};

export default function TimelineCard({ classItem }: TimelineCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="bg-capoeira-green rounded-full p-3">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{classItem.title}</CardTitle>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">{classItem.date}</Badge>
                {classItem.location && (
                  <Badge variant="secondary" className="text-xs">
                    {classItem.location}
                  </Badge>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {classItem.tags?.map((tag) => (
                  <Badge key={tag} className={`text-xs ${getTagColor(tag)}`}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {classItem.content.length > 150 
                  ? `${classItem.content.substring(0, 150)}...` 
                  : classItem.content
                }
              </p>
            </div>
          </div>
        </CardHeader>
        
        {classItem.content.length > 150 && (
          <CardContent className="pt-0">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-capoeira-green hover:text-capoeira-blue p-0"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Ver menos
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Ver detalhes
                    </>
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{classItem.content}</p>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}
