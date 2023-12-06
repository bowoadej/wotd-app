import { render, screen } from '@testing-library/react';
import Word from '../components/Word';

test("Word component renders successfully", () => {
    render(<Word />);
    const element = screen.getByText(/Your Word Of The Day Is/i);
    expect(element).toBeInTheDocument();
}

)