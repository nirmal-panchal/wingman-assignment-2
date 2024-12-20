import React from "react";
import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight } from "lucide-react";

const orders = [
  {
    id: 1,
    product: {
      name: "Headphones",
      image: "/headphones.jpg",
    },
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 2,
    product: {
      name: "Headphones",
      image: "/headphones.jpg",
    },
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 3,
    product: {
      name: "Headphones",
      image: "/headphones.jpg",
    },
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
  {
    id: 4,
    product: {
      name: "Headphones",
      image: "/headphones.jpg",
    },
    date: "24 Apr '2024",
    time: "10:24 AM",
    timeSpent: "2h 5m",
    orderValue: "$120.21",
    commission: "$55",
  },
];

const OrdersTable = () => {
  return (
    <div className="w-full p-6">
      <CardHeader className="px-0">
        <CardTitle className="text-[#212636] mb-6 text-xl font-medium">
          Orders
        </CardTitle>
        <div className="border rounded-lg w-full overflow-hidden">
          <Table>
            <TableHeader className="bg-[#F9FAFB]">
              <TableRow className="hover:bg-[#F9FAFB]">
                <TableHead className="w-[250px] text-sm font-medium text-gray-500 p-4">
                  Product
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500">
                  Date
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500">
                  Time spent
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500">
                  Order Value
                </TableHead>
                <TableHead className="text-sm font-medium text-gray-500">
                  Commission
                </TableHead>
                <TableHead className="text-right text-sm font-medium text-gray-500"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="hover:bg-gray-50">
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.product.image}
                        alt="Product"
                        className="w-8 h-8 rounded-lg"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {order.product.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {order.date}
                      </span>
                      <span className="text-sm text-gray-500">
                        {order.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-gray-900">
                    {order.timeSpent}
                  </TableCell>
                  <TableCell className="text-sm text-gray-900">
                    {order.orderValue}
                  </TableCell>
                  <TableCell className="text-sm font-medium text-gray-900">
                    {order.commission}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <span className="text-sm font-medium text-[#8A94A6]">
                        View Chat
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#8A94A6]" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardHeader>
    </div>
  );
};

export default OrdersTable;
