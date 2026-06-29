"use client";

import { useRouter } from "next/navigation";
import { Button } from "@codacub/ui";

export function EarlyAccessCta() {
  const router = useRouter();

  return (
    <Button size="sm" onClick={() => router.push("/early-access")}>
      Get early access
    </Button>
  );
}
