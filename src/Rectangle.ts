import escape = require('xml-escape');

import Shape from './Shape';

class Rectangle extends Shape {
  protected corner = 0;

  print(): string {
    const style = 'fill:#fff; stroke:#444; stroke-width:1';

    return `
      <g>
        <rect
          width="${this.dimensions.width}"
          height="${this.dimensions.height}"
          rx="${this.corner}"
          ry="${this.corner}"
          style="${style}" />
        <title>${escape(this.label)}</title>
        <text
          x="${this.horizontalPadding}"
          y="${2 * this.verticalPadding}"
          font-family="${this.fontFamily}"
          font-size="${this.fontSize}"
          fill="${this.textColor}"
        >
          <tspan
            x="${this.horizontalPadding}"
            y="${2 * this.verticalPadding}"
          >
            ${this.label}
          </tspan>
        </text>
      </g>`;
  }
}

export default Rectangle;
