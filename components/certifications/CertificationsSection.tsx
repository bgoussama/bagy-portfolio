import { Container } from "@/components/layout/Container";
import { CertificationCard } from "@/components/certifications/CertificationCard";
import { buttonVariants } from "@/components/ui/button";
import { certifications } from "@/data/certifications";
import Link from "next/link";

export function CertificationsSection() {
  const featuredCertifications = certifications
    .filter((certification) => certification.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  return (
    <section
      id="certifications"
      className="scroll-mt-24 py-20 sm:py-28 lg:py-32"
      aria-labelledby="certifications-heading"
    >
      <Container className="max-w-5xl space-y-10">
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-muted-foreground">Certifications</p>
          <h2 id="certifications-heading" className="text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
            Certifications &amp; Credentials
          </h2>
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredCertifications.map((certification, index) => (
            <CertificationCard key={certification.id} certification={certification} index={index} />
          ))}
        </div>

        <div className="flex justify-center pt-4 sm:pt-6">
          <Link
            href="/certifications"
            className={
              buttonVariants({ size: "lg", variant: "default" }) +
              " min-w-56 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-6 text-white shadow-[0_14px_40px_rgba(139,92,246,0.24)] transition duration-300 hover:-translate-y-0.5 hover:from-violet-400 hover:to-indigo-400 hover:shadow-[0_18px_55px_rgba(139,92,246,0.32)]"
            }
          >
            View All Certifications
          </Link>
        </div>
      </Container>
    </section>
  );
}
