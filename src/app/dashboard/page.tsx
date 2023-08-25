// import DetailsDialog from "@/components/DashBoard/DetailsDialog";
import HistoryCard from "@/components/DashBoard/HistoryCard";
import HotTopicsCard from "@/components/DashBoard/HotTopicsCard";
import QuizMeCard from "@/components/DashBoard/QuizMeCard";
import RecentActivityCard from "@/components/DashBoard/RecentActivityCard";
import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | Quizmify",
  description: "Quiz yourself on anything!",
};

const Dasboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    redirect("/");
  }

  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
        {/* <DetailsDialog /> */}
      </div>

      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dasboard;