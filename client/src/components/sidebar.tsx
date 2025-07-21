import { motion } from "framer-motion";
import {
  Home,
  GraduationCap,
  Calendar,
  BookOpen,
  Images,
  BicepsFlexed,
  Users,
  Drum,
  Sprout,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarProps {
  onNavigate: (sectionId: string) => void;
}

const navigationItems = [
  { id: "hero", label: "Início", icon: Home },
  { id: "aulas", label: "Timeline das Aulas", icon: Calendar },
  { id: "historia", label: "Contexto Histórico", icon: BookOpen },
  { id: "atividades", label: "Atividades Práticas", icon: Images },
  { id: "seminarios", label: "Seminários", icon: Users },
  { id: "reflexoes", label: "Reflexões", icon: Lightbulb },
  { id: "metodologia", label: "Metodologia TGfU", icon: Drum },
];

export default function Sidebar({ onNavigate }: SidebarProps) {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavigation = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigate(sectionId);
  };

  return (
    <motion.nav
      className="w-72 bg-white shadow-lg fixed h-full overflow-y-auto z-10"
      initial={{ x: -288 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-xl font-bold text-capoeira-green">
          Portfólio Capoeira
        </h1>
        <p className="text-sm text-gray-600 mt-1">Semestre 2025</p>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start transition-colors ${
                    isActive
                      ? "bg-capoeira-green text-white hover:bg-capoeira-green hover:text-white"
                      : "text-gray-700 hover:bg-capoeira-green hover:text-white"
                  }`}
                  onClick={() => handleNavigation(item.id)}
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}
