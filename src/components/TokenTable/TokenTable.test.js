/**
 * @jest-environment jsdom
 */

import { render, screen, beforeEach } from '@testing-library/react'
import TokenTable from './index.tsx'
import * as React from 'react'
import '@testing-library/jest-dom'

describe("NavBar test", () => {
    it("Render test", () => {
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // Deprecated
              removeListener: jest.fn(), // Deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });

        render(<TokenTable data={null}/>)
        expect(screen.getByTestId("token-table")).toBeInTheDocument();
    });
})