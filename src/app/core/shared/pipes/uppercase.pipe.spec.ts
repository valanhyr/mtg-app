import { UppercasePipe } from './uppercase.pipe';

describe('UppercasePipe', () => {
  let pipe: UppercasePipe;

  beforeEach(() => {
    pipe = new UppercasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform lowercase letters to uppercase', () => {
    const transformed = pipe.transform('hello world');
    expect(transformed).toEqual('HELLO WORLD');
  });

  it('should transform uppercase letters to uppercase', () => {
    const transformed = pipe.transform('HELLO WORLD');
    expect(transformed).toEqual('HELLO WORLD');
  });

  it('should transform mixed case letters to uppercase', () => {
    const transformed = pipe.transform('Hello World');
    expect(transformed).toEqual('HELLO WORLD');
  });

  it('should return empty string for null input', () => {
    const transformed = pipe.transform(null);
    expect(transformed).toEqual('');
  });

  it('should return empty string for undefined input', () => {
    const transformed = pipe.transform(undefined);
    expect(transformed).toEqual('');
  });
});