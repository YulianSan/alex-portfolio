import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
// @ts-ignore
import Hamburger from './Hamburger.vue'

describe('Hamburger', () => {
	it('should render', () => {
		render(Hamburger, {
			props: {
				modelValue: false
			},
			global: {
				stubs: {
					Icon: { template: '<div></div>' },
				}
			}
		})

		expect(screen.getByRole('button')).toBeInTheDocument()
	})

	it('should open menu', () => {
		const { emitted } = render(Hamburger, {
			props: {
				modelValue: false
			},
			global: {
				stubs: {
					Icon: { template: '<div></div>' },
				}
			}
		})

		const button = screen.getByRole('button')
		expect(emitted('update:modelValue')?.length).toBeUndefined()
		fireEvent.click(button)

		expect(emitted()).toHaveProperty('update:modelValue')
		expect(emitted('update:modelValue')?.[0]).toEqual([true])
		expect(emitted('update:modelValue')?.length).toBe(1)
	})
})
