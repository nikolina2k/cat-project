/**
 * @jest-environment jsdom
 */

import { render, screen, beforeEach } from '@testing-library/react'
import About from './index.tsx'
import * as React from 'react'
import '@testing-library/jest-dom'

describe("About page test", () => {
    it("Render test", () => {
        render(<About/>)
        expect(screen.getByTestId("about-page")).toBeInTheDocument();
    });
})