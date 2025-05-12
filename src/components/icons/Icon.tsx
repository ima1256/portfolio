import React, { ReactNode } from 'react';
import GradientDefs from './GradientDefs.tsx';
import { GradientMapKeys } from './gradients';

// Define the types for the props
interface IconProps {
  size?: number; // Default size is 200
  className?: string;
  color?: string;
  gradientId?: GradientMapKeys; // Ensuring that gradientId is a valid key in GradientMapKeys
  children?: ReactNode; // Children can be any React element or node
  viewBox?: string; // Optional, default is '0 0 24 24'
}

const Icon = ({
  size = 200,
  className = '',
  color = 'black',
  gradientId = 'main',
  children,
  viewBox = '0 0 24 24',
}: IconProps) => {
  // If gradientId exists, it will use the gradient as a fill color; otherwise, fallback to a solid color.
  const fillColor = gradientId ? `url(#${gradientId})` : color;

  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {gradientId && <GradientDefs gradientId={gradientId} />}{' '}
      {/* Render GradientDefs if gradientId exists */}
      <g fill={fillColor}>{children}</g> {/* Render children with fill color */}
    </svg>
  );
};

export default Icon;
