import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  let pipe: CapitalizePipe;

  beforeEach(() => {
    pipe = new CapitalizePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the first letter of each word in a sentence', () => {
    const sentence = 'hello world';
    const transformed = pipe.transform(sentence);
    expect(transformed).toEqual('Hello World');
  });

  it('should handle empty string', () => {
    const transformed = pipe.transform('');
    expect(transformed).toEqual('');
  });

  it('should handle null value', () => {
    const transformed = pipe.transform(null);
    expect(transformed).toEqual('');
  });

  it('should handle undefined value', () => {
    const transformed = pipe.transform(undefined);
    expect(transformed).toEqual('');
  });
});