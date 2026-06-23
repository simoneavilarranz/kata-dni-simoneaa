// @vitest-environment jsdom

import { describe, expect, test, it } from 'vitest';
import { openTest, closeTest, init } from '../js/button.js';

describe('OpenClose', () => {
    
    document.body.innerHTML = '<button type="button" id="button-call">Iniciar</button><div id="calculator" style="display: none"><button type="button" id="cancel-button">Cancelar</button>';

    it('should show calculator', () => {
        
        openTest();
        const calculator = document.getElementById("calculator");
        const expected = "flex";
        const result = calculator.style.display;
        expect(result).toBe(expected);
    })

})