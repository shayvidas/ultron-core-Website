import { test, expect } from "@playwright/test";

test("contact form rejects invalid input client-side", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /send inquiry/i }).click();
  await expect(page.getByText(/please enter your full name/i)).toBeVisible();
});

test("contact form shows success only on a server-confirmed ok", async ({ page }) => {
  // Controlled mechanism: intercept the API and return a success envelope.
  await page.route("**/api/contact", (route) =>
    route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ ok: true }) }),
  );

  await page.goto("/contact");
  await page.getByLabel("Full name").fill("Dana Cohen");
  await page.getByLabel("Business email").fill("dana@acme.co");
  await page.getByLabel("Company name").fill("Acme Co");
  await page.getByLabel("What do you need help with?").selectOption("ai-consulting");
  await page.getByLabel("Project description").fill("We copy leads between our form and CRM by hand.");
  await page.getByLabel(/privacy policy/i).check();
  await page.getByRole("button", { name: /send inquiry/i }).click();

  await expect(page.getByText(/your message is on its way/i)).toBeVisible();
});

test("contact form shows an error (not success) when the server fails", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 503,
      contentType: "application/json",
      body: JSON.stringify({ ok: false, code: "not_configured", message: "The contact form isn't fully configured yet." }),
    }),
  );

  await page.goto("/contact");
  await page.getByLabel("Full name").fill("Dana Cohen");
  await page.getByLabel("Business email").fill("dana@acme.co");
  await page.getByLabel("Company name").fill("Acme Co");
  await page.getByLabel("What do you need help with?").selectOption("ai-consulting");
  await page.getByLabel("Project description").fill("We copy leads between our form and CRM by hand.");
  await page.getByLabel(/privacy policy/i).check();
  await page.getByRole("button", { name: /send inquiry/i }).click();

  await expect(page.getByText(/couldn't send that/i)).toBeVisible();
  await expect(page.getByText(/your message is on its way/i)).toHaveCount(0);
});

test("mobile menu opens and closes", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: /open menu/i }).click();
  await expect(page.getByRole("dialog", { name: "Menu" })).toBeVisible();
  await page.getByRole("button", { name: /close menu/i }).click();
  await expect(page.getByRole("dialog", { name: "Menu" })).toHaveCount(0);
});
