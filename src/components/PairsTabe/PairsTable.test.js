/**
 * @jest-environment jsdom
 */

import { render, screen, beforeEach } from '@testing-library/react'
import PairsTable from './index.tsx'
import * as React from 'react'
import '@testing-library/jest-dom'

describe("PairsTable test", () => {
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

        render(<PairsTable data={null}/>)
        expect(screen.getByTestId("pairs-table")).toBeInTheDocument();
    });
})