import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

describe('Navbar regression test', () => {
  it('renders navigation links correctly and layout is still working', () => {
    render(<Navbar />);
    expect(screen.getByText('Servicios Booking Page')).toBeInTheDocument();
    expect(screen.getByText('Book an Appointment')).toBeInTheDocument();
    expect(screen.getByText('Search for Appointment')).toBeInTheDocument();
    expect(screen.getByText('Reschedule Appointment')).toBeInTheDocument();
    expect(screen.getByText('Cancel an Appointment')).toBeInTheDocument();
  });
});
