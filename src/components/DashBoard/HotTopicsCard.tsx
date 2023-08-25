import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import CostumWordCloud from "../CostumWordCloud";

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <div>
       <Card className="col-span-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
          <CardDescription>
            Click On A Topic To Start A Quiz On It
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CostumWordCloud/>
        </CardContent>
      </Card>
    </div>
  );
};

export default HotTopicsCard;
