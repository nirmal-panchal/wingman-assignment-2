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
import { ArrowUpRight } from "lucide-react";

const weeklyData = [
  { day: "Mon", incoming: 33, answered: 28, experts: 8 },
  { day: "Tue", incoming: 32, answered: 27, experts: 8 },
  { day: "Wed", incoming: 38, answered: 32, experts: 9 },
  { day: "Thu", incoming: 45, answered: 40, experts: 5 },
  { day: "Fri", incoming: 43, answered: 34, experts: 9 },
  { day: "Sat", incoming: 48, answered: 35, experts: 8 },
  { day: "Sun", incoming: 52, answered: 37, experts: 8 },
];

const forecastStats = [
  {
    percentage: 15,
    description:
      "forecasted increase in your sales closed by the end of the current month",
  },
  {
    percentage: 20,
    description:
      "forecasted increase in consultations by the end of the current month",
  },
];

const comparisonData = [
  { period: "This week", consultations: 20, orders: 15 },
  { period: "Last week", consultations: 15, orders: 10 },
];

const Insights = () => {
  return (
    <div className="w-full">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-[#212636] mb-4 sm:mb-6 md:mb-10 text-lg sm:text-xl md:text-2xl font-medium">
          <span>Insights</span>
        </CardTitle>
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Main Chart */}
            <Card className="h-[300px] sm:h-[350px] p-3 sm:p-6 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={weeklyData}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 10,
                    bottom: 5,
                  }}
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
                    tick={{
                      fill: "#94A3B8",
                      fontSize: 10,
                      width: 20,
                    }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    dx={-5}
                    tick={{
                      fill: "#94A3B8",
                      fontSize: 10,
                    }}
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
                    dx={5}
                    tick={{
                      fill: "#94A3B8",
                      fontSize: 10,
                    }}
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
                    barSize={16}
                    radius={[4, 4, 0, 0]}
                  />
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

            {/* Side Charts Container */}
            <div className="flex flex-col sm:flex-row lg:flex-row items-center gap-4 sm:gap-6">
              {/* Comparison Chart */}
              <Card className="h-[250px] sm:h-[300px] lg:h-[350px] w-full sm:w-1/2 lg:w-64">
                <CardHeader className="h-full p-2 sm:p-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={comparisonData}
                      margin={{
                        top: 5,
                        right: 20,
                        left: 0,
                        bottom: 25,
                      }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="#F1F5F9"
                        horizontalPoints={comparisonData.map(
                          (_, index) => index
                        )}
                      />
                      <XAxis
                        dataKey="period"
                        axisLine={false}
                        tickLine={false}
                        interval={0}
                        tick={{ fontSize: 10 }}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                      />
                      <Bar
                        dataKey="consultations"
                        fill="#CCFBEF"
                        barSize={20}
                        radius={[5, 5, 0, 0]}
                      />
                      <Bar
                        dataKey="orders"
                        fill="#115E59"
                        barSize={20}
                        radius={[5, 5, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardHeader>
              </Card>

              {/* Forecast Card */}
              <Card className="w-full sm:w-1/2 lg:w-64 p-4 sm:p-6 bg-gradient-to-b from-[#15B79F] to-[#0E9382] text-white">
                <div className="text-white/80 font-medium text-sm sm:text-base mb-4 sm:mb-6">
                  FORECASTS
                </div>
                <div className="space-y-4 sm:space-y-6">
                  {forecastStats.map((stat, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                          +{stat.percentage}%
                        </span>
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-white/90 text-sm sm:text-base leading-tight">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </div>
  );
};

export default Insights;
