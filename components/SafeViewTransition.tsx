"use client";

import { ViewTransition as ReactViewTransition } from "react";
import { ReactNode } from "react";

export default function SafeViewTransition({ 
  children, 
  name 
}: { 
  children: ReactNode;
  name?: string;
}) {
  // Check if View Transitions API is supported
  if (typeof document !== "undefined" && !("startViewTransition" in document)) {
    return <>{children}</>;
  }
  
  try {
    return <ReactViewTransition name={name}>{children}</ReactViewTransition>;
  } catch (error) {
    console.warn("ViewTransition failed:", error);
    return <>{children}</>;
  }
}
