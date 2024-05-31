/**
 * Represents a ticket in the system.
 * 
 * @interface
 * 
 * @property {number} id - The unique identifier for the ticket.
 * @property {string} subject - The subject or title of the ticket.
 * @property {'Low' | 'Medium' | 'High'} priority - The priority level of the ticket.
 * @property {'Open' | 'In Progress' | 'Closed'} status - The current status of the ticket.
 * @property {string} description - A detailed description of the ticket.
 */
export interface Ticket {
  id: number;
  subject: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'In Progress' | 'Closed';
  description: string;
}