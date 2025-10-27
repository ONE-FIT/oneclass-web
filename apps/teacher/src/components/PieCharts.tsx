import {
    PieChart as RePieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
  export type PieDatum = {
    name: "납부" | "미납부";
    value: number; // 명 수
  };
  
  type Props = {
    data: PieDatum[];
    height?: number;
  };
  
  const COLORS = {
    납부: '#60A5FA',  
    미납부: "#F87171", 
  };
  
  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: any[];
  }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload as PieDatum;
      const color = COLORS[d.name];
      return (
        <div
          style={{
            background: "white",
            border: `1px solid ${color}`,
            borderRadius: "8px",
            padding: "6px 10px",
            fontSize: "14px",
            fontWeight: 600,
            color,
          }}
        >
          {`${d.name} : ${d.value}명`}
        </div>
      );
    }
    return null;
  };
  
  export default function PieChart({ data, height = 300 }: Props) {
    const total = data.reduce((s, d) => s + d.value, 0);
  
    const labelFormatter = (entry: any) => {
      if (!total) return "0%";
      const pct = (entry.value / total) * 100;
      return `${pct.toFixed(1)}%`;
    };
  
    return (
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>
          <RePieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={Math.min(120, height / 2 - 10)}
              innerRadius={30}
              labelLine
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </RePieChart>
        </ResponsiveContainer>
      </div>
    );
  }
  