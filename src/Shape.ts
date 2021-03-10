type Dimensions = {
  width: number;
  height: number;
};

abstract class Shape {
  protected dimensions: Dimensions;
  protected fontFamily = 'monospace';
  protected fontSize = 13;
  protected textColor = '#222';
  protected horizontalPadding = 15;
  protected verticalPadding = 10;
  protected characterWidth = 7.8;
  protected characterHeight = 10;
  protected corner = 2;

  constructor(protected label: string) {
    this.dimensions = {
      width: 2 * this.horizontalPadding + label.length * this.characterWidth,
      height: 2 * this.verticalPadding + this.characterHeight,
    };
  }

  abstract print(): string;
}

export default Shape;
