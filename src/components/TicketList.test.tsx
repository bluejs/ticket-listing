import TicketList from "@/components/TicketList";
import { generateTickets } from "@/mockService";
import { fireEvent, render, screen } from "@testing-library/react";

describe("TicketList", () => {
  const tickets = generateTickets(100);

  it("renders tickets correctly", () => {
    render(<TicketList tickets={tickets} />);

    expect(screen.getByText("Subject 1")).toBeInTheDocument();
    expect(screen.getByText("Description for ticket 1")).toBeInTheDocument();
  });

  it("handles scrolling", () => {
    render(<TicketList tickets={tickets} />);

    const scrollContainer = screen.getByTestId("ticket-list") as HTMLElement;
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 500 } });

    expect(scrollContainer.scrollTop).toBe(500);
  });

  it("only renders visible tickets", () => {
    render(<TicketList tickets={tickets} />);

    const scrollContainer = screen.getByTestId("ticket-list") as HTMLElement;
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 500 } });

    expect(screen.queryByText("Subject 1")).not.toBeInTheDocument();
    expect(screen.getByText("Subject 11")).toBeInTheDocument();
  });

  it("renders all tickets when scrolled to the top", () => {
    render(<TicketList tickets={tickets} />);

    const scrollContainer = screen.getByTestId("ticket-list") as HTMLElement;
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 0 } });

    expect(screen.getByText("Subject 1")).toBeInTheDocument();
  });

  it("renders all tickets when scrolled to the bottom", () => {
    render(<TicketList tickets={tickets} />);

    const scrollContainer = screen.getByTestId("ticket-list") as HTMLElement;
    fireEvent.scroll(scrollContainer, { target: { scrollTop: 4000 } });

    expect(screen.getByText("Subject 100")).toBeInTheDocument();
  });
});
