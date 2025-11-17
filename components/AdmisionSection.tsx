import { Card } from "@/components/ui/card";
import { MapPin, Phone, Printer, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdmissionData {
  program: string;
  average: number;
}

const Index = () => {
  const admissionData: AdmissionData[] = [
    { program: "Ştiinţe ale naturii", average: 9.12 },
    { program: "Ştiinţe sociale", average: 8.85 },
    { program: "Matematică-informatică", average: 8.67 },
    { program: "Filologie, bilingv engleză", average: 8.52 },
    { program: "Filologie", average: 8.32 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 9.0) return "text-blue-600";
    if (score >= 8.5) return "text-blue-500";
    return "text-blue-400";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 9.0) return "bg-blue-100 dark:bg-blue-950";
    if (score >= 8.5) return "bg-blue-50 dark:bg-blue-900/50";
    return "bg-gray-100 dark:bg-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text text-center md:text-left md:ml-5">
            Medii de Admitere
          </h2>
          <p className="text-xl lg:text-2xl text-foreground/80 tracking-tight max-w-3xl text-center md:text-left mx-auto md:mx-0 md:ml-5 mt-4">
            Colegiul Național „Calistrat Hogaș" din Piatra-Neamț
          </p>
          <p className="text-lg text-muted-foreground mt-2 text-center md:text-left md:ml-5">
            Clasa a IX-a • An şcolar 2025-2026
          </p>
        </header>

        {/* Admission Table */}
        <Card className="overflow-hidden border-2 border-border mb-12 animate-scale-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
                  <th className="px-6 py-5 text-left text-sm font-bold text-foreground uppercase tracking-wider">
                    Program de studiu
                  </th>
                  <th className="px-6 py-5 text-right text-sm font-bold text-foreground uppercase tracking-wider">
                    Medie admitere
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900">
                {admissionData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-0 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 group"
                  >
                    <td className="px-6 py-6 text-foreground font-semibold text-lg transition-colors duration-200 group-hover:text-primary">
                      {item.program}
                    </td>
                    <td className="px-6 py-6 text-right">
                      <span
                        className={`inline-flex items-center justify-center min-w-[90px] px-5 py-3 rounded-lg font-bold text-xl transition-all duration-200 ${getScoreColor(
                          item.average
                        )} ${getScoreBackground(
                          item.average
                        )} group-hover:scale-105 border border-blue-200 dark:border-blue-800`}
                      >
                        {item.average.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <footer className="text-center text-sm text-muted-foreground animate-fade-in">
          <p>Datele sunt actualizate pentru anul şcolar 2025-2026</p>
        </footer>

        {/* Contact Section */}
        <div className="mb-12 animate-fade-in mt-16">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tighter bg-linear-to-b from-blue-300 to-blue-600 text-transparent bg-clip-text mb-10 text-center md:text-left md:ml-5">
            Contact
          </h2>
          
          <Card className="overflow-hidden border-2 border-border">
            <div className="p-8 lg:p-12 bg-white dark:bg-gray-900">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Address Card - Centered Icon */}
                <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 border-2 border-transparent group">
                  <MapPin className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                  <div className="text-center md:text-left w-full">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Adresă</p>
                    <p className="text-foreground font-medium">str. Alexandru cel Bun, nr. 19</p>
                    <p className="text-foreground font-medium">cod poştal 610004, Piatra-Neamţ</p>
                    <p className="text-foreground font-medium">jud. Neamţ</p>
                  </div>
                </div>

                {/* Phone Card - Centered Icon */}
                <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 border-2 border-transparent group">
                  <Phone className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                  <div className="text-center md:text-left w-full">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Telefon</p>
                    <a href="tel:0233215853" className="text-foreground font-medium hover:text-primary transition-colors text-lg">
                      0233.215.853
                    </a>
                  </div>
                </div>

                {/* Fax Card - Centered Icon */}
                <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 border-2 border-transparent group">
                  <Printer className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                  <div className="text-center md:text-left w-full">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Fax</p>
                    <p className="text-foreground font-medium text-lg">0233.212.000</p>
                  </div>
                </div>

                {/* Email Card - Centered Icon */}
                <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 border-2 border-transparent group">
                  <Mail className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                  <div className="text-center md:text-left w-full">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">E-mail</p>
                    <a href="mailto:cnch@isjneamt.ro" className="text-foreground font-medium hover:text-primary transition-colors text-lg">
                      cnch@isjneamt.ro
                    </a>
                  </div>
                </div>

                {/* Facebook Card - Centered Icon */}
                <div className="flex flex-col items-center md:items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-200 border-2 border-transparent group md:col-span-2 lg:col-span-1">
                  <Facebook className="w-6 h-6 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-110 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors" />
                  <div className="text-center md:text-left w-full">
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Facebook</p>
                    <a 
                      href="https://www.facebook.com/colegiulhogas/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors text-lg break-words"
                    >
                      facebook.com/colegiulhogas
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;