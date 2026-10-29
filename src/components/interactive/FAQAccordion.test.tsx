import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FAQAccordion } from "./FAQAccordion";

const items = [
  { q: "First question?", a: "First answer." },
  { q: "Second question?", a: "Second answer." },
];

describe("FAQAccordion", () => {
  it("renders all questions as buttons with aria-expanded", () => {
    render(<FAQAccordion items={items} />);
    const first = screen.getByRole("button", { name: "First question?" });
    expect(first).toHaveAttribute("aria-expanded", "true"); // first open by default
    const second = screen.getByRole("button", { name: "Second question?" });
    expect(second).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles a panel open and closed on click", async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={items} />);
    const second = screen.getByRole("button", { name: "Second question?" });
    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Second answer.")).toBeVisible();
    await user.click(second);
    expect(second).toHaveAttribute("aria-expanded", "false");
  });

  it("moves focus between headers with ArrowDown", async () => {
    const user = userEvent.setup();
    render(<FAQAccordion items={items} />);
    const first = screen.getByRole("button", { name: "First question?" });
    first.focus();
    await user.keyboard("{ArrowDown}");
    expect(screen.getByRole("button", { name: "Second question?" })).toHaveFocus();
  });
});
