import { render, screen, fireEvent } from "@testing-library/react";
import MyJournal from "../Navbar/buttons/MyJournal.jsx";

describe("MyJournal Component", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders the title", () => {
    render(<MyJournal />);
    expect(screen.getByText("Symptom Journal")).toBeInTheDocument();
  });

  it("shows error message when required fields are missing", () => {
    render(<MyJournal />);
    fireEvent.click(screen.getByText("Add Entry"));
    expect(
      screen.getByText("Please enter a date and symptom.")
    ).toBeInTheDocument();
  });

  it("renders the Add Entry button", () => {
    render(<MyJournal />);
    expect(screen.getByText("Add Entry")).toBeInTheDocument();
  });
});
