"use client";

import { LineWave } from "react-loader-spinner";

export default function LoaderPage() {
  return (
    <section className="min-h-[70vh] w-full flex justify-center items-center">
      <LineWave
        height="150"
        width="150"
        color="#4fa94d"
        ariaLabel="line-wave"
      />
    </section>
  );
}
