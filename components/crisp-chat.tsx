"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("4d817a6a-8044-436a-81f0-049da73849ea");
  }, []);

  return null;
};
