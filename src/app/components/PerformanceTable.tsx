import { AnimatedContainer } from './AnimatedText';

interface TableRow {
  metric: string;
  result: string | number;
}

interface PerformanceTableProps {
  data: TableRow[];
  delay?: number;
}

export function PerformanceTable({ data, delay = 0 }: PerformanceTableProps) {
  return (
    <AnimatedContainer delay={delay}>
      <div className="overflow-hidden rounded-lg border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <table className="w-full">
          <tbody className="divide-y divide-slate-700/50">
            {data.map((row, index) => (
              <AnimatedContainer 
                key={index} 
                delay={delay + (index * 0.05)}
                direction="up"
              >
                <tr className="hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-slate-300 font-medium">
                    {row.metric}
                  </td>
                  <td className="px-6 py-4 text-right text-cyan-400 font-semibold">
                    {row.result}
                  </td>
                </tr>
              </AnimatedContainer>
            ))}
          </tbody>
        </table>
      </div>
    </AnimatedContainer>
  );
}
