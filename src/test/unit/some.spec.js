import {MyComponent} from '../../MyComponent';


describe('Some Tests', () => {
  fit('can run a test', () => {
    const component = MyComponent;
    expect(true).toBe(true);
  });

  it('can run a test', () => {
    const component = MyComponent;
    expect(true).toBe(true);
  });
});