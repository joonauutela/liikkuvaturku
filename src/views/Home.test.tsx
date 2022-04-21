import * as React from 'react'
import Home from './Home';
import {render, screen} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
    render(
        <MemoryRouter>
            <Home></Home>
        </MemoryRouter>
    )
    it('Render header text', () => {
        expect(screen.queryByText("Liikkumista ulkolaitteilla")).toBeTruthy()
    })
})