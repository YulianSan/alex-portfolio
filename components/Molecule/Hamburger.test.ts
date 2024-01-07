import { vi, describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
// @ts-ignore
import Hamburger from './Hamburger.vue'

vi.mock('../../composables/useMenu')

describe('Hamburger', () => {
	it('should render', () => {
		render(Hamburger)

		expect(screen.getByRole('button')).toBeInTheDocument()
	})
})
