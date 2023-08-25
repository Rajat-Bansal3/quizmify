import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

type Props = {};

const RecentActivityCard = (props: Props) => {
  return (
    <div>
      <Card className="col-span-4 lg:col-span-3 ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Recent Activity</CardTitle>
          <CardDescription>you played a total of 7 games</CardDescription>
        </CardHeader>
        <CardContent className="max-h-[560px] overflow-scroll" >histories</CardContent>
      </Card>
    </div>
  );
};

export default RecentActivityCard;
