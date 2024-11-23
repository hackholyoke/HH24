import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      refresh: jest.fn(),
      pathname: '/',
      query: {},
    }),
  }));