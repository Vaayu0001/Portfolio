import type { CertificationEntry } from "./types";

export const certifications: (CertificationEntry & { link?: string })[] = [
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB",
    status: "Certified • Issued Apr 2026",
    link: "/certificates/mongodb.pdf",
  },
  {
    title: "HackerRank Problem Solving Certification",
    issuer: "HackerRank",
    status: "Certified",
  },
];
