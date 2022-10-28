import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'


describe('Button', () => {
    afterAll(() => {
        cleanup();
    });

    it('should render without errors', () => {
        const linkProps = {
                id: "btn__zuri",
                link: "https://training.zuri.team/",
                title: "Zuri Team",
        }
        const { asFragment } = render(<Button {...linkProps} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should contain the correct attributes', () => {
            const linkProps = {
                    id: "btn__zuri",
                    link: "https://training.zuri.team/",
                    title: "Zuri Team",
            }
            render(<Button {...linkProps} />);

            expect(screen.getByRole('link')).toHaveAttribute('href', linkProps.link);
            expect(screen.getByRole('link')).toHaveAttribute('id', linkProps.id);
            expect(screen.getByRole('link')).toHaveTextContent(linkProps.title);
    })
})

// jestdom
// react-testing-library



