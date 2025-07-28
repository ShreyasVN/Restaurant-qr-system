import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main title', () => {
    render(<App />)
    
    const title = screen.getByText('Restaurant QR System')
    expect(title).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<App />)
    
    const description = screen.getByText(/Modern React 18 \+ Vite \+ TypeScript mono-repo/)
    expect(description).toBeInTheDocument()
  })

  it('renders the get started button', () => {
    render(<App />)
    
    const button = screen.getByRole('button', { name: 'Get Started' })
    expect(button).toBeInTheDocument()
  })

  it('renders feature list', () => {
    render(<App />)
    
    expect(screen.getByText('✨ Framer Motion + React Spring')).toBeInTheDocument()
    expect(screen.getByText('🎨 Tailwind CSS + twin.macro')).toBeInTheDocument()
    expect(screen.getByText('⚡ Vite + TypeScript')).toBeInTheDocument()
    expect(screen.getByText('🧪 Vitest Testing')).toBeInTheDocument()
  })
})
