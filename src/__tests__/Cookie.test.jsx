import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CookiesManagement from "../components/CookiesManagement";

test('renders a message', () => {
    const { asFragment, getByText } = render(<CookiesManagement />)
    expect(getByText('Cookies')).toBeInTheDocument()
})