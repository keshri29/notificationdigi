"use client";

import { useCallback, useEffect, useState } from "react";
import Bell from "@/components/Bell";
import Statusbar from "@/components/Statusbar";

export default function Home() {
  
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-around w-fit bg-black">
        <Statusbar />
        <Bell />
      </div>
    </div>
  );
}
