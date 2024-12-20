import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaArrowTrendUp } from "react-icons/fa6";
import { atAGlanceData } from "@/data/data";
import AtAGlance from "./at-a-glance";
import Insights from "./insights";
import OrdersTable from "./orders";

const HomeContent = () => {
  return (
    <Card className="ml-24 mr-10 mt-32 mb-9">
      <AtAGlance />
      <Insights />
      <OrdersTable />
    </Card>
  );
};

export default HomeContent;
