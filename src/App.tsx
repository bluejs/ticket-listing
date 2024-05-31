import TicketList from "@/components/TicketList";
import { generateTickets } from "@/mockService";
import "./App.css";

const tickets = generateTickets(10000);

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Ticket List</h1>
      <TicketList tickets={tickets} />
    </div>
  );
}

export default App;
