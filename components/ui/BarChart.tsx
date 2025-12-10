"use client"

import { Bar, BarChart as ReBarChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { day: "Saturday", growth: 186, downfall: 80 },
  { day: "Sanday", growth: 305, downfall: 200 },
  { day: "Monday", growth: 237, downfall: 120 },
  { day: "Twesday", growth: 73, downfall: 190 },
  { day: "Wednessday", growth: 209, downfall: 130 },
  { day: "Thirsday", growth: 214, downfall: 140 },
]

const chartConfig = {
  growth: {
    label: "Growth",
    color: "#2563eb",
  },
  downfall: {
    label: "Downfall",
    color: "#60a5fa",
  },
} satisfies ChartConfig

const BarChartComponent = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ReBarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="growth" fill="var(--color-growth)" radius={4} />
        <Bar dataKey="downfall" fill="var(--color-downfall)" radius={4} />
      </ReBarChart>
    </ChartContainer>
  )
}

export default BarChartComponent
