import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowTrendUp } from "react-icons/fa6";
import { atAGlanceData } from "@/data/data";

const AtAGlance = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className="text-[#212636] flex items-center justify-between text-[22px] font-medium">
          <span>At a glance</span>
          <span>7 days</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="grid grid-cols-3 gap-8">
          {atAGlanceData.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-[#667085] text-xs flex items-center gap-2 font-semibold">
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                <div className="text-3xl font-medium">{item.value}</div>
                <div
                  className={`flex items-center gap-2 text-sm`}
                  style={{ color: item.trendColor }}
                >
                  <FaArrowTrendUp />
                  <div className="flex items-center gap-1">
                    <span>{item.change}</span>
                    <span className="text-[#667085]">{item.trend}</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </CardContent>
    </>
  );
};

export default AtAGlance;
