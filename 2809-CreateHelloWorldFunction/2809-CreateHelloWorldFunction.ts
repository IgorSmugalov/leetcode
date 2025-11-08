// Last updated: 08.11.2025, 16:19:43
function createHelloWorld() {
	return function(...args): string {
        return "Hello World"
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */