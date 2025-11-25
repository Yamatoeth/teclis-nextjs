// GoBackButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  return (
    <Button variant="outline" onClick={() => window.history.back()}>
      <ArrowLeft size={16} className="mr-2" />
      Go Back
    </Button>
  );
}