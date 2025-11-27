import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../pages/InformationSection/TreatmentOptions/table.jsx";
import { describe, it, expect, vi } from "vitest"
import React from "react"

describe("Hospital Finder App", () => {
  it("shows an error when the entered location is not a real city", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => ({ features: [] })
    })

    render(<App />)

    const input = screen.getByPlaceholderText(/enter a city/i)
    const button = screen.getByRole("button", { name: /search/i })

    await userEvent.type(input, "asdfghjkl")
    await userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(/city not found/i)).toBeInTheDocument()
    })
  })

  it("displays the main heading", () => {
    render(<App />)
    const headings = screen.getAllByText(/find hospitals/i)
    expect(headings.length).toBeGreaterThan(0)
  })
})
