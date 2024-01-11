import { fireEvent, render, screen } from '@testing-library/vue'
import { it, describe, expect } from 'vitest'
// @ts-ignore
import Switch from './Switch.vue'

describe('Switch', () => {
  it('should renders', () => {
    render(Switch, {
      props: {
        modelValue: false
      }
    })

    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('should toggle value', async () => {
    const { emitted } = render(Switch, {
      props: {
        modelValue: false,
      },
    })

    const checkbox = screen.getByRole('switch')

    expect(checkbox).not.toBeChecked()

    await fireEvent.click(checkbox)

    expect(emitted()['update:modelValue'][0]).toEqual([true]);
    expect(checkbox).toBeChecked()

    await fireEvent.click(checkbox)

    expect(emitted()['update:modelValue'][1]).toEqual([false]);
    expect(checkbox).not.toBeChecked()
  })
})
