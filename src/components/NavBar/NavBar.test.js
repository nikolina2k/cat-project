/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import { exportedForTesting } from './index.tsx'
import NavBar from './index.tsx'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

describe("pathToMenuKey tests", () => {
    const { pathToMenuKey } = exportedForTesting
    it("Valid paths", () => {
        expect(pathToMenuKey({pathname: "cat-project"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat-project/"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat-project/home"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat-project/tokens"})).toBe("tokens")
        expect(pathToMenuKey({pathname: "cat-project/accounts"})).toBe("accounts")
        expect(pathToMenuKey({pathname: "cat-project/home/subhome"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat-project/accounts/user"})).toBe("accounts")
        expect(pathToMenuKey({pathname: "/some.domain/cat-project/about"})).toBe("about")
    });

    it("Invalid paths", () => {
        expect(() => pathToMenuKey({pathname: "cat"})).not.toThrow()
        expect(() => pathToMenuKey({pathname: ""})).not.toThrow()
        expect(() => pathToMenuKey({pathname: undefined})).not.toThrow()
        expect(() => pathToMenuKey({pathname: null})).not.toThrow()
    });
})

describe("NavBar test", () => {
    it("Render test", () => {
        //render(<BrowserRouter location = {{ pathname: "something" }}><NavBar/></BrowserRouter>);
    });
})