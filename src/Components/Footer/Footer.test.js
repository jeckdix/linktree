import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from './Footer'

describe('Footer', () => {
    afterAll(() => {
        cleanup();
    });

    it('should render without errors', () => {

        const { asFragment } = render(<Footer  />);
        expect(asFragment()).toMatchSnapshot();
    });


    it('should a footer text', () => {

        render(<Footer  />);
        expect(screen.getByText("HNG Internship 9 Frontend Task")).toBeInTheDocument();
    });

    // it('should contain the correct attributes', () => {
    //         const linkProps = {
    //                 id: "btn__zuri",
    //                 link: "https://training.zuri.team/",
    //                 title: "Zuri Team",
    //         }
    //         render(<Button {...linkProps} />);

    //         expect(screen.getByRole('link')).toHaveAttribute('href', linkProps.link);
    //         expect(screen.getByRole('link')).toHaveAttribute('id', linkProps.id);
    //         expect(screen.getByRole('link')).toHaveTextContent(linkProps.title);
    // })
})

// jestdom
// react-testing-library



