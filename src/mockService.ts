import { Ticket } from '@/types/ticket';

/**
 * Generates an array of tickets with the specified count.
 * 
 * @param {number} count - The number of tickets to generate.
 * @returns {Ticket[]} An array of generated tickets.
 * 
 * @example
 * const tickets = generateTickets(10);
 * console.log(tickets);
 */
export const generateTickets = (count: number): Ticket[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    subject: `Subject ${index + 1}`,
    priority: (['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)] as Ticket['priority']),
    status: (['Open', 'In Progress', 'Closed'][Math.floor(Math.random() * 3)] as Ticket['status']),
    description: `Description for ticket ${index + 1}`
  }));
};