import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomeScreen from '../app/screens_components/Home/home'
import { useRouter } from 'next/router'; // Import useRouter

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
    });
  });

// describe('HomeScreen', () => {
  it('renders the HackHolyoke logo', () => {
    render(<HomeScreen />)
    const logo = screen.getByRole('img', { name: /HH24_logo/i })
    expect(logo).toBeInTheDocument()
  })

  it('renders the welcome message', () => {
    render(<HomeScreen />)
    const welcomeMessage = screen.getByText(/Welcome To/i)
    expect(welcomeMessage).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<HomeScreen />)
    const mainHeading = screen.getByText(/HACKHOLYOKE 2024!/i)
    expect(mainHeading).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<HomeScreen />)
    const description = screen.getByText(/November 9-10 \| Chapin Auditorium, South Hadley, MA/i)
    expect(description).toBeInTheDocument()
  })

  it('renders all buttons', async () => {
    render(<HomeScreen />);
  
    const registerButton = await screen.findByRole('button', { name: /Register/i });
    const teamButton = await screen.findByRole('button', { name: /Team/i });
    const learnMoreButton = await screen.findByRole('button', { name: /Learn More/i });
    const joinDiscordButton = await screen.findByRole('button', { name: /Join Discord/i });
  
    expect(registerButton).toBeInTheDocument();
    expect(teamButton).toBeInTheDocument();
    expect(learnMoreButton).toBeInTheDocument();
    expect(joinDiscordButton).toBeInTheDocument();
  });
})