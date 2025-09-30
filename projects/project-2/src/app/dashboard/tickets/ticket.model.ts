// make a interface to ticket model with id titile request and status
export interface Ticket {
    id: number; 
    title: string;
    request: string;
    status: 'open' | 'closed';
}