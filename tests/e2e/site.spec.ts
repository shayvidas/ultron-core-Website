import { test, expect } from "@playwright/test";

const servicePaths = [
  "/services/ai-agents",
  "/services/business-automation",
  "/services/ai-engineering",
  "/services/integrations",
  "/services/web-development",
  "/services/custom-software",
  "/services/ai-consulting",
  "/services/ai-rescue",
];

const solutionPaths = [
  "/solutions/small-business",
  "/solutions/engineering-teams",
  "/solutions/customer-operations",
];

test("homepage loads with hero and key sections", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(/Make Your Business/i);
  await expect(page.getByRole("heading", { name: /Technology That Solves Real Problems/i })).toBeVisible();
  await expect(page.getByText("Interactive Example")).toBeVisible();
});

test("primary navigation destinations resolve", async ({ page }) => {
  for (const path of ["/", "/services", "/solutions", "/work", "/about", "/contact"]) {
    const res = await page.goto(path);
    expect(res?.status(), `status for ${path}`).toBeLessThan(400);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("every service page renders its title", async ({ page }) => {
  for (const path of servicePaths) {
    const res = await page.goto(path);
    expect(res?.status(), `status for ${path}`).toBeLessThan(400);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("every solution page renders its title", async ({ page }) => {
  for (const path of solutionPaths) {
    const res = await page.goto(path);
    expect(res?.status(), `status for ${path}`).toBeLessThan(400);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
});

test("unknown routes return a 404 page", async ({ page }) => {
  const res = await page.goto("/this-route-does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByText("404")).toBeVisible();
});

test("scenario explorer switches tabs", async ({ page }) => {
  await page.goto("/");
  const docTab = page.getByRole("tab", { name: "Document Processing" });
  await docTab.click();
  await expect(docTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText(/An invoice or form arrives/i)).toBeVisible();
});
