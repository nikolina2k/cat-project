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
        expect(pathToMenuKey({pathname: "cat"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat/"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat/home"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat/tokens"})).toBe("tokens")
        expect(pathToMenuKey({pathname: "cat/accounts"})).toBe("accounts")
        expect(pathToMenuKey({pathname: "cat/home/subhome"})).toBe("home")
        expect(pathToMenuKey({pathname: "cat/accounts/user"})).toBe("accounts")
        expect(pathToMenuKey({pathname: "/some.domain/cat/about"})).toBe("about")
    });

    it("Invalid paths", () => {
        expect(() => pathToMenuKey({pathname: "cpr"})).not.toThrow()
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