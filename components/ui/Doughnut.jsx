"use client"

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"


const doughnutData = [
  { name: "Male", value: 400, color: "#0AE626" },
  { name: "Female", value: 300, color: "#FB427D" },
  { name: "Baby", value: 200, color: "#1E30F8" },
]
const doughnutData2 = [
  { name: "New", value: 400, color: "#0AE626" },
  { name: "Old", value: 300, color: "#FB427D" },
]


// REQUIRED config for shadcn ChartContainer
const chartConfig = {
  Male: {
    label: "Male",
    color: "#0AE626",
  },
  Female: {
    label: "Female",
    color: "#FB427D",
  },
  Baby: {
    label: "Baby",
    color: "#1E30F8",
  },
};

const chartConfig2 = {
  New: {
    label: "New",
    color: "#0AE626",
  },
  Old: {
    label: "Old",
    color: "#FB427D",
  },
};
const DoughnutChart = ({barType}) => {
  return (
  <>
  {
    barType==="gender"&&(
    <ChartContainer 
      config={chartConfig} 
      className="min-h-[250px] w-full"
    >
      <PieChart>
        <Pie
          data={doughnutData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={90}
          paddingAngle={0}
        >
          {doughnutData.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
        </Pie>

        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
      </PieChart>
    </ChartContainer>
    )
  }
  {
    barType==='type'&&(
    <ChartContainer 
      config={chartConfig2} 
      className="min-h-[250px] w-full"
    >
      <PieChart>
        <Pie
          data={doughnutData2}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={90}
          paddingAngle={0}
        >
          {doughnutData.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
        </Pie>

        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
      </PieChart>
    </ChartContainer>
    )
  }
  </>
  )
}

export default DoughnutChart
