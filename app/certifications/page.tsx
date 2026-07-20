import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CertificationCard } from "@/components/certifications/CertificationCard";
import { Container } from "@/components/layout/Container";
import { buttonVariants } from "@/components/ui/button";
import { certifications, type CertificationCategory } from "@/data/certifications";

export const metadata: Metadata = {
  title: { absolute: "Certifications | Bagy Oussama" },
  description:
    "Verified cybersecurity, networking, artificial intelligence and software engineering certifications earned by Bagy Oussama.",
};

const groups: CertificationCategory[] = ["Core Cybersecurity", "AI & Software Engineering", "Additional Foundations"];

export default function CertificationsPage() {
  const orderedCertifications = [...certifications].sort((a, b) => a.order - b.order);

  return (
    <section className="py-20 sm:py-28 lg:py-32" aria-labelledby="all-certifications-heading">
      <Container className="max-w-5xl space-y-10">
        <div className="space-y-6">
          <Link href="/" className={buttonVariants({ size: "sm", variant: "outline" })}>
            <ArrowLeft aria-hidden="true" />
            Back to Home
          </Link>

          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">Certifications</p>
            <h1
              id="all-certifications-heading"
              className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl"
            >
              All Certifications
            </h1>
            <p className="max-w-3xl text-[15px] leading-7 text-zinc-300">
              A complete collection of certifications and verified learning credentials across cybersecurity, networking,
              artificial intelligence and software engineering.
            </p>
          </div>
        </div>

        {groups.map((group) => {
          const groupCertifications = orderedCertifications.filter((certification) => certification.category === group);
          const headingId = `${group.toLowerCase().replaceAll(" ", "-")}-heading`;

          return (
            <section key={group} className="space-y-5" aria-labelledby={headingId}>
              <h2 id={headingId} className="text-2xl font-bold tracking-tight text-foreground">
                {group}
              </h2>
              <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                {groupCertifications.map((certification, index) => (
                  <CertificationCard key={certification.id} certification={certification} index={index} />
                ))}
              </div>
            </section>
          );
        })}
      </Container>
    </section>
  );
}
