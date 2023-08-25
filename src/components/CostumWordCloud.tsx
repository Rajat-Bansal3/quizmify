"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {
  // formattedTopics: { text: string; value: number }[];
};

const data = [
  {
  text : "Hello",
  value : 5 
},
  {
  text : "Hello",
  value : 7
},
  {
  text : "Hello",
  value : 2 
},
  {
  text : "Hello",
  value : 20 
},
  {
  text : "Hello",
  value : 6 
}
]

const fontSizeMapper = (word: { value: number }) =>
  Math.log2(word.value) * 5 + 16;

const CostumWordCloud = (props: Props) => {
  const theme = useTheme();
  const router = useRouter();
  return (
    <>
      <D3WordCloud
        data={data}
        height={550}
        font="Times"
        fontSize={fontSizeMapper}
        rotate={0}
        padding={10}
        fill={theme.theme === "system" ? "white" : "black"}
        onWordClick={(e, d) => {
          router.push("/quiz?topic=" + d.text);
        }}
      />
    </>
  );
};

export default CostumWordCloud;