import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowTrendUp } from "react-icons/fa6";
import { atAGlanceData } from "@/data/data";
import AtAGlance from "./at-a-glance";
import Insights from "./insights";

const HomeContent = () => {
  return (
    <Card className="ml-24 mr-10 my-32">
      <AtAGlance />
      <Insights />
    </Card>
  );
};

export default HomeContent;
