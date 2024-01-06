import { render, screen, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
//  @ts-ignore
import Button from './Button.vue'

describe('Button', () => {
  it('should renders', () => {
    render(Button)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should renders with text', () => {
    render(Button, {
      slots: {
        default: 'text test',
      },
    })

    expect(screen.getByRole('button')).toHaveTextContent('text test')
  })

  it('should emit click event', async () => {
    const { emitted } = render(Button, {
      slots: {
        default: 'test',
      },
    })

    await fireEvent.click(screen.getByRole('button'))

    expect(emitted()).toHaveProperty('click')
  })
})
