import { greet } from "../src/index";

test('greets the person', () => {
    expect(greet('World')).toBe('Hello, World!');
})