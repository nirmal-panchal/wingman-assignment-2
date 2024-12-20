"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

const weeklyData = [
  { day: "Mon", incoming: 33, answered: 28, experts: 8 },
  { day: "Tue", incoming: 32, answered: 27, experts: 8 },
  { day: "Wed", incoming: 38, answered: 32, experts: 9 },
  { day: "Thu", incoming: 45, answered: 40, experts: 5 },
  { day: "Fri", incoming: 43, answered: 34, experts: 9 },
  { day: "Sat", incoming: 48, answered: 35, experts: 8 },
  { day: "Sun", incoming: 52, answered: 37, experts: 8 },
  { day: "Mon", incoming: 35, answered: 30, experts: 5 },
  { day: "Mon", incoming: 45, answered: 38, experts: 9 },
  { day: "Tue", incoming: 47, answered: 40, experts: 3 },
  { day: "Wed", incoming: 50, answered: 42, experts: 10 },
  { day: "Thu", incoming: 55, answered: 46, experts: 3 },
  { day: "Fri", incoming: 52, answered: 44, experts: 10 },
  { day: "Sat", incoming: 56, answered: 47, experts: 9 },
  { day: "Sun", incoming: 60, answered: 50, experts: 9 },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#CCFBEF",
  },
  mobile: {
    label: "Mobile",
    color: "#134E48",
  },
} satisfies ChartConfig;

const Insights = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-[#212636] text-[22px] font-medium">
          <span>Insights</span>
        </CardTitle>
        <CardContent className="p-0">
          <div className="grid grid-cols-3 gap-8">
            <Card className="h-[350px] p-6 col-span-2">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={weeklyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#F1F5F9"
                  />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    dx={-10}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    ticks={[10, 20, 30, 40, 50, 60]}
                    domain={[0, 60]}
                    yAxisId="left"
                    label={{
                      value: "CONSULTATIONS",
                      angle: -90,
                      position: "insideLeft",
                      style: {
                        textAnchor: "middle",
                        fill: "#94A3B8",
                        fontSize: 8,
                        opacity: 0.7,
                      },
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                    dx={10}
                    tick={{ fill: "#94A3B8", fontSize: 12 }}
                    domain={[0, 20]}
                    tickFormatter={() => "10"}
                    label={{
                      value: "EXPERTS ONLINE",
                      angle: -90,
                      position: "insideRight",
                      style: {
                        textAnchor: "middle",
                        fill: "#94A3B8",
                        fontSize: 8,
                        opacity: 0.7,
                      },
                    }}
                  />
                  <Bar
                    dataKey="experts"
                    fill="#FEF9C3"
                    yAxisId="right"
                    barSize={20}
                    radius={[4, 4, 0, 0]}
                  />
                  {/* <Bar 
                dataKey="incoming"
                fill="#94A3B8"
                yAxisId="left"
                barSize={20}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="answered"
                fill="#15B79E" 
                yAxisId="left"
                barSize={20}
                radius={[4, 4, 0, 0]}
              /> */}
                  <Line
                    type="monotone"
                    dataKey="incoming"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray="5 5"
                    yAxisId="left"
                  />
                  <Line
                    type="monotone"
                    dataKey="answered"
                    stroke="#15B79E"
                    strokeWidth={2}
                    dot={false}
                    yAxisId="left"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </Card>
            <Card>
              <CardHeader className="h-[350px]">
                <ChartContainer config={chartConfig}>
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dashed" />}
                    />
                    <Bar dataKey="desktop" fill="#CCFBEF" radius={4} />
                    <Bar dataKey="mobile" fill="#134E48" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardHeader>
            </Card>
          </div>
        </CardContent>
      </CardHeader>
    </>
  );
};

export default Insights;
