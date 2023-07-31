const generateUniqueId = require('./index');

describe('ID', () => {
  it('should be generated without passing any additional arguments', () => {
    const id1 = generateUniqueId();
    const id2 = generateUniqueId();

    expect(id1.length).toBe(20);
    expect(id1).not.toMatch(id2);
  });

  it('should contain only letters', () => {
    const id = generateUniqueId({
      useNumbers: false,
      length: 50,
    });

    expect(id.match(/[0-9]/g)).toBe(null);
    expect(id.length).toBe(50);
  });

  it('should contain only numbers', () => {
    const id = generateUniqueId({
      useLetters: false,
      length: 30,
    });

    expect(id.match(/[a-z]/g)).toBe(null);
    expect(id.length).toBe(30);
  });

  it('should include certain symbols', () => {
    const id = generateUniqueId({
      includeSymbols: ['@', '#'],
      length: 100,
    });

    expect(((/(@|#)/g)).test(id)).toBe(true);
    expect(id.length).toBe(100);

    const id2 = generateUniqueId({
      includeSymbols: ['@', '#'],
      length: 10,
      useLetters: false,
      useNumbers: false,
    });

    expect(id2.match(/[a-z0-9]/g)).toBe(null);
    expect(id2.includes('@')).toBe(true);
    expect(id2.includes('#')).toBe(true);
    expect(id2.length).toBe(10);
  });

  it('should exclude certain symbols', () => {
    const id = generateUniqueId({
      useLetters: false,
      excludeSymbols: ['0', '1', '2', '3', '4', '5'],
    });

    expect(id.match(/[0-5]/g)).toBe(null);
  });
});
