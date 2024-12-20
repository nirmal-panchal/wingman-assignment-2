import React from "react";
import { Card } from "@/components/ui/card";
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
