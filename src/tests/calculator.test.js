// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import { dniLetter } from "../js/calculator.js";

describe("dniLetter", () => {
    it("should return z", () => {
        expect(dniLetter("12345678")).toBe("Z");
    });
});