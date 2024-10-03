"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "lucide-react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock data for the table
const tableData = [
  {
    location: "New York",
    status: "Operational",
    trend: "up",
    checks: 1000,
    success: 998,
    failures: 2,
    avgResponse: "120ms",
  },
  {
    location: "London",
    status: "Degraded",
    trend: "down",
    checks: 950,
    success: 930,
    failures: 20,
    avgResponse: "180ms",
  },
  {
    location: "Tokyo",
    status: "Operational",
    trend: "stable",
    checks: 1200,
    success: 1198,
    failures: 2,
    avgResponse: "100ms",
  },
  {
    location: "Sydney",
    status: "Operational",
    trend: "up",
    checks: 800,
    success: 798,
    failures: 2,
    avgResponse: "150ms",
  },
  {
    location: "São Paulo",
    status: "Degraded",
    trend: "down",
    checks: 700,
    success: 680,
    failures: 20,
    avgResponse: "200ms",
  },
];

// Mock data for the graph
const graphData = [
  {
    name: "Jan",
    NewYork: 120,
    London: 180,
    Tokyo: 100,
    Sydney: 150,
    SaoPaulo: 200,
  },
  {
    name: "Feb",
    NewYork: 110,
    London: 170,
    Tokyo: 90,
    Sydney: 140,
    SaoPaulo: 190,
  },
  {
    name: "Mar",
    NewYork: 130,
    London: 190,
    Tokyo: 110,
    Sydney: 160,
    SaoPaulo: 210,
  },
  {
    name: "Apr",
    NewYork: 125,
    London: 185,
    Tokyo: 105,
    Sydney: 155,
    SaoPaulo: 205,
  },
  {
    name: "May",
    NewYork: 115,
    London: 175,
    Tokyo: 95,
    Sydney: 145,
    SaoPaulo: 195,
  },
  {
    name: "Jun",
    NewYork: 135,
    London: 195,
    Tokyo: 115,
    Sydney: 165,
    SaoPaulo: 215,
  },
];

export default function Component() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUpIcon className="w-4 h-4 text-green-500" />;
      case "down":
        return <ArrowDownIcon className="w-4 h-4 text-red-500" />;
      default:
        return <ArrowRightIcon className="w-4 h-4 text-yellow-500" />;
    }
  };

  return (
    <div className="w-full h-full p-4 grid grid-cols-1 lg:grid-cols-2 gap-2">
      <Card className="lg:row-span-2 overflow-hidden">
        <CardHeader>
          <CardTitle>Location Status</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-auto h-[calc(100vh-12rem)]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>#Checks</TableHead>
                  <TableHead>#Success</TableHead>
                  <TableHead>#Failures</TableHead>
                  <TableHead>Avg Response</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell className="flex items-center">
                      {getTrendIcon(row.trend)}
                      <span className="ml-1">{row.trend}</span>
                    </TableCell>
                    <TableCell>{row.checks}</TableCell>
                    <TableCell>{row.success}</TableCell>
                    <TableCell>{row.failures}</TableCell>
                    <TableCell>{row.avgResponse}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Response Time Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="NewYork" stroke="#8884d8" />
                <Line type="monotone" dataKey="London" stroke="#82ca9d" />
                <Line type="monotone" dataKey="Tokyo" stroke="#ffc658" />
                <Line type="monotone" dataKey="Sydney" stroke="#ff7300" />
                <Line type="monotone" dataKey="SaoPaulo" stroke="#00C49F" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm">
            <p>
              This dashboard provides an overview of our global server status
              and performance metrics. The table on the left shows real-time
              data for each location, including their operational status, recent
              trends, and key performance indicators.
            </p>
            <p className="mt-4">
              The graph above illustrates the average response times for each
              location over the past six months, allowing us to identify
              long-term trends and potential areas for improvement.
            </p>
            <p className="mt-4">
              Use this information to quickly assess the health of our global
              infrastructure and make data-driven decisions to optimize
              performance and reliability.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
