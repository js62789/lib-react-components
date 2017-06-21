import React from 'react';
import Button from '../Button';
import styles from './styles.css';

export class Image extends React.Component {
  calculateScaledFontSize(width, height) {
    return Math.round(Math.max(12, Math.min(Math.min(width, height) * 0.75, 0.75 * Math.max(width, height) / 12)));
  }

  generateSrcPlaceholder({ width, height, backgroundColor, fontSize, fontColor }) {
    return `
      data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">
        <rect width="${width}" height="${height}" fill="${backgroundColor}"/>
        <text text-anchor="middle" x="${width/2}" y="${height/2}"
          style="fill:${fontColor};font-weight:bold;font-size:${fontSize}px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central">
          ${width}x${height}
        </text>
      </svg>
    `.replace(/\n/g, '').replace(/^\s+/g, '').replace(/>\s+</g, '><');
  }

  render() {
    const { width, height, rounded, bordered } = this.props;
    const classNames = [ styles.image ];
    const inlineStyles = this.props.style || {};

    const src = this.props.src || this.generateSrcPlaceholder({
      width: width,
      height: height,
      backgroundColor: '#ddd',
      fontColor: '#bbb',
      fontSize: this.calculateScaledFontSize(width, height)
    });

    if (rounded) {
      classNames.push(styles.imageRounded);
    }

    if (bordered) {
      classNames.push(styles.imageBordered);
    }

    if (height) {
      inlineStyles.height = height;
    }

    if (width) {
      inlineStyles.width = width;
    }

    return (
      <img className={classNames.join(' ')} style={inlineStyles} src={src} />
    );
  }
}

Image.defaultProps = {
  width: null,
  height: null,
};

export default Image;
