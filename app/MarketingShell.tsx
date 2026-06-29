"use client";

import Link from "next/link";
import { CookieBanner, Logo } from "@my-design-system/ui";
import { EarlyAccessCta } from "./EarlyAccessCta";

export function MarketingShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--color-surface-page)",
        minHeight: "100vh",
        fontFamily: "var(--font-family-primary)",
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: "64px",
          padding: "0 var(--spacing-10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "rgba(230, 226, 219, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-3)",
            textDecoration: "none",
          }}
        >
          <Logo size="sm" alt="designersbuild logo" />
          <span
            style={{
              fontFamily: "var(--font-family-title)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-text-title)",
            }}
          >
            designersbuild
          </span>
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-1)",
          }}
        >
          <Link
            href="/features"
            style={{
              fontSize: "var(--font-size-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              padding: "var(--spacing-2) var(--spacing-3)",
              borderRadius: "var(--border-radius-lg)",
            }}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            style={{
              fontSize: "var(--font-size-base)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text-secondary)",
              textDecoration: "none",
              padding: "var(--spacing-2) var(--spacing-3)",
              borderRadius: "var(--border-radius-lg)",
            }}
          >
            Pricing
          </Link>
        </div>

        <EarlyAccessCta />
      </nav>

      <div style={{ paddingTop: "64px" }}>{children}</div>
      <CookieBanner LinkComponent={Link} />
    </div>
  );
}
