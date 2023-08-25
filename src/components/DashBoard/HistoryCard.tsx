"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { History } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const HistoryCard = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <Card
        className="hover:cursor-pointer hover:opacity-75"
        onClick={() => {
          router.push("/history");
        }}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-2">
          <CardTitle className="text-2xl font-bold">History</CardTitle>
          <History size={28} strokeWidth={2.5} />
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          <p>View Past Quiz Attempts</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default HistoryCard;
