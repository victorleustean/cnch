import { Card } from "./ui/card";


interface AdmissionData {
  program: string;
  average: number;
}

export const Index = () => {
  const admissionData: AdmissionData[] = [
    { program: "Ştiinţe ale naturii", average: 9.12 },
    { program: "Ştiinţe sociale", average: 8.85 },
    { program: "Matematică-informatică", average: 8.67 },
    { program: "Filologie, bilingv engleză", average: 8.52 },
    { program: "Filologie", average: 8.32 },
  ];

  const getScoreColor = (score: number) => {
    if (score >= 9.0) return "text-accent";
    if (score >= 8.5) return "text-primary";
    return "text-muted-foreground";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 9.0) return "bg-gray-400"; // gri mai inchis pentru >9.0
    if (score >= 8.5) return "bg-gray-200";
    return "bg-gray-100";
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12 animate-fade-in">
          <h2 className="text-8xl font-bold bg-gradient-to-b from-blue-300 to-blue-600 tracking-tighter mb-3 text-transparent bg-clip-text xl:mt-20">
            Medii de Admitere
          </h2>
          <p className="text-lg text-muted-foreground">
            Clasa a IX-a • An şcolar 2025-2026
          </p>
        </header>

        <Card className="overflow-hidden shadow-[var(--shadow-elegant)] border-border/50 animate-scale-in">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-gradient-to-r from-primary/5 to-accent/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground uppercase tracking-wider">
                    Program de studiu
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground uppercase tracking-wider">
                    Medie admitere
                  </th>
                </tr>
              </thead>
              <tbody>
                {admissionData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-border/50 last:border-0 transition-all duration-300 hover:bg-secondary/30 hover:shadow-[var(--shadow-hover)] group"
                  >
                    <td className="px-6 py-5 text-foreground font-medium transition-colors duration-300 group-hover:text-primary">
                      {item.program}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <span
                        className={`inline-flex items-center justify-center min-w-[80px] px-4 py-2 rounded-full font-bold text-lg transition-all duration-300 ${getScoreColor(
                          item.average
                        )} ${getScoreBackground(
                          item.average
                        )} group-hover:scale-110`}
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

        <footer className="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
          <p>Datele sunt actualizate pentru anul şcolar 2025-2026</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;