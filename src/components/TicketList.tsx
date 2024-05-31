import { Ticket } from "@/types/ticket";
import React, { useRef, useState } from "react";

const TICKET_HEIGHT = 50;
// Note: You could also use viewport height to calculate the visible tickets, such as:
// const visibleCount = Math.ceil(window.innerHeight / TICKET_HEIGHT);
const VISIBLE_COUNT = 20;

/**
 * TicketList component that displays a list of tickets using virtualized rendering for performance.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Ticket[]} props.tickets - Array of ticket objects to display
 *
 * @example
 * const tickets = [
 *   { id: 1, subject: "Ticket 1", priority: "High", status: "Open", description: "Description 1" },
 *   { id: 2, subject: "Ticket 2", priority: "Low", status: "Closed", description: "Description 2" },
 *   // ...more tickets
 * ];
 *
 * <TicketList tickets={tickets} />
 */
const TicketList: React.FC<{ tickets: Ticket[] }> = ({ tickets }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalHeight = tickets.length * TICKET_HEIGHT;
  const startIndex = Math.floor(scrollTop / TICKET_HEIGHT);
  const endIndex = Math.min(tickets.length - 1, startIndex + VISIBLE_COUNT - 1);

  const visibleTickets = tickets.slice(startIndex, endIndex + 1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      className="h-screen overflow-y-auto relative"
      ref={containerRef}
      onScroll={handleScroll}
      data-testid="ticket-list"
    >
      <div style={{ height: totalHeight }}>
        {visibleTickets.map((ticket, index) => (
          <div
            key={ticket.id}
            className="absolute flex justify-between border-b border-gray-300 p-2 box-border w-full"
            style={{ top: (startIndex + index) * TICKET_HEIGHT }}
          >
            <div>{ticket.subject}</div>
            <div>{ticket.priority}</div>
            <div>{ticket.status}</div>
            <div>{ticket.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
