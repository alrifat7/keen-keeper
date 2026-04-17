import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend, Cell } from "recharts";

const data = [
  { name: "Text", value: 400 },
  { name: "Call", value: 300 },
  { name: "Video", value: 300 },
];

// custom colors (same style as image)
const COLORS = ["#7C3AED", "#1F2937", "#22C55E"];

export default function StatsChart() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Friendship Analytics
      </h2>

      {/* Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">
        
        <h3 className="text-lg font-medium text-gray-600 mb-6">
          By Interaction Type
        </h3>

        <div className="w-full h-[350px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={80}        // donut style
                outerRadius={120}
                paddingAngle={6}        // gap between slices
                cornerRadius={10}       // rounded edges
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend 
                verticalAlign="bottom" 
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}