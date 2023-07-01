"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("../frontend/test"));
describe("greet", () => {
    test("should say hello to Teresa", () => {
        const response = (0, test_1.default)('Teresa');
        expect(response).toBe('Hello, Teresa!');
    });
});
