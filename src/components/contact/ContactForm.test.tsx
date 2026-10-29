import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Full name"), "Dana Cohen");
  await user.type(screen.getByLabelText("Business email"), "dana@acme.co");
  await user.type(screen.getByLabelText("Company name"), "Acme Co");
  await user.selectOptions(screen.getByLabelText("What do you need help with?"), "ai-consulting");
  await user.type(
    screen.getByLabelText("Project description"),
    "We copy leads between our form and CRM by hand.",
  );
  await user.click(screen.getByLabelText(/privacy policy/i));
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows validation errors for an empty submission", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /send inquiry/i }));
    expect(await screen.findByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("shows a success state only after a server-confirmed ok response", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send inquiry/i }));

    expect(await screen.findByText(/your message is on its way/i)).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledWith("/api/contact", expect.objectContaining({ method: "POST" }));
  });

  it("shows an error (never success) when the server returns a failure", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ ok: false, message: "The contact form isn't fully configured yet." }),
    });
    vi.stubGlobal("fetch", fetchMock);

    const user = userEvent.setup();
    render(<ContactForm />);
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send inquiry/i }));

    await waitFor(() => {
      expect(screen.getByText(/couldn't send that/i)).toBeInTheDocument();
    });
    expect(screen.queryByText(/your message is on its way/i)).not.toBeInTheDocument();
  });
});
