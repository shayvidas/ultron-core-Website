import { z } from "zod";

export const helpCategories = [
  { value: "ai-consulting", label: "AI consulting" },
  { value: "ai-agents", label: "AI agents" },
  { value: "business-automation", label: "Business automation" },
  { value: "ai-engineering", label: "AI engineering workflows" },
  { value: "integrations", label: "Systems integration" },
  { value: "web-development", label: "Business website" },
  { value: "custom-software", label: "Custom software" },
  { value: "mobile", label: "Mobile application" },
  { value: "ai-rescue", label: "Existing AI solution review" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const budgetOptions = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "small-pilot", label: "Small pilot" },
  { value: "defined-project", label: "Defined project budget" },
  { value: "ongoing", label: "Larger ongoing engagement" },
] as const;

export const companySizeOptions = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "200+", label: "200+" },
] as const;

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "phone", label: "Phone" },
] as const;

const helpValues = helpCategories.map((c) => c.value) as [string, ...string[]];
const budgetValues = budgetOptions.map((c) => c.value) as [string, ...string[]];
const sizeValues = companySizeOptions.map((o) => o.value) as [string, ...string[]];
const methodValues = contactMethodOptions.map((o) => o.value) as [string, ...string[]];

// Optional free-text field that treats "" the same as absent.
const optionalText = (max: number) => z.string().trim().max(max).optional().or(z.literal(""));
// Optional enum that also accepts "" (an unselected <select>).
const optionalEnum = (values: [string, ...string[]]) =>
  z.enum(values).optional().or(z.literal(""));

export const contactSchema = z.object({
  // Required
  name: z
    .string({ error: "Please enter your full name." })
    .trim()
    .min(2, "Please enter your full name.")
    .max(120),
  email: z
    .string({ error: "Please enter a valid business email." })
    .trim()
    .toLowerCase()
    .pipe(z.email("Please enter a valid business email.")),
  company: z
    .string({ error: "Please enter your company name." })
    .trim()
    .min(1, "Please enter your company name.")
    .max(160),
  category: z.enum(helpValues, { message: "Please choose what you need help with." }),
  description: z
    .string({ error: "Please add a short project description." })
    .trim()
    .min(10, "Please add a little more detail (at least 10 characters).")
    .max(4000, "Please keep this under 4000 characters."),
  consent: z.literal(true, { message: "Please acknowledge the privacy policy to continue." }),

  // Optional
  phone: optionalText(40),
  website: optionalText(200).refine(
    (v) => !v || /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}([/\w.-]*)*$/i.test(v),
    "Please enter a valid website.",
  ),
  companySize: optionalEnum(sizeValues),
  contactMethod: optionalEnum(methodValues),
  budget: optionalEnum(budgetValues),
  timeline: optionalText(120),

  // Honeypot — must be empty. Bots that fill every field get silently dropped.
  company_url: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
