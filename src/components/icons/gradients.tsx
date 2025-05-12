import React from 'react';

// === GRADIENT COMPONENTS ===

export const Radial = ({
  id,
  primary,
  secondary,
}: {
  id: string;
  primary: string;
  secondary: string;
}) => (
  <radialGradient id={id} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
    <stop offset="0%" stopColor={primary} stopOpacity="1" />
    <stop offset="100%" stopColor={secondary} stopOpacity="0" />
  </radialGradient>
);

function withComponentMeta<T extends Function>(
  fn: T
): T & {
  static: boolean;
  getName: () => string;
} {
  (fn as any).static = fn.length == 1;
  (fn as any).getName = () => fn.name.toLowerCase();
  return fn as any;
}

export const Main = ({
  id,
  primary,
  secondary,
}: {
  id: string;
  primary: string;
  secondary: string;
}) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor={primary} />
    <stop offset="100%" stopColor={secondary} />
  </linearGradient>
);

// export const RootGradient = () => {};
// RootGradient.static = true;

// RootGradient.getName = () => RootGradient.name.toLowerCase();

// Object.assign(Main, RootGradient);

export const ComplexRainbow = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#ff6ec4" />
    <stop offset="25%" stopColor="#7873f5" />
    <stop offset="50%" stopColor="#4ade80" />
    <stop offset="75%" stopColor="#facc15" />
    <stop offset="100%" stopColor="#f87171" />
  </linearGradient>
);

export const NightSky = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#2c3e50" />
    <stop offset="100%" stopColor="#34495e" />
  </linearGradient>
);

export const Sunset = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#ff7e5f" />
    <stop offset="100%" stopColor="#feb47b" />
  </linearGradient>
);

export const OceanBlue = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#00c6ff" />
    <stop offset="100%" stopColor="#0072ff" />
  </linearGradient>
);

export const Aurora = ({ id }: { id: string }) => (
  <linearGradient id={id} x1="0%" y1="100%" x2="100%" y2="0%">
    <stop offset="0%" stopColor="#00f5a0" />
    <stop offset="100%" stopColor="#00d9f5" />
  </linearGradient>
);

export const Fire = ({ id }: { id: string }) => (
  <radialGradient id={id} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
    <stop offset="0%" stopColor="#ff512f" stopOpacity="1" />
    <stop offset="100%" stopColor="#dd2476" stopOpacity="1" />
  </radialGradient>
);

export const SuperComplex = ({ id }: { id: string }) => (
  <radialGradient
    id={id}
    cx="50%"
    cy="50%"
    r="80%"
    fx="50%"
    fy="50%"
    gradientTransform="rotate(45)"
  >
    <stop offset="0%" stopColor="#ff9a9e" stopOpacity="1" />
    <stop offset="15%" stopColor="#fad0c4" stopOpacity="0.9" />
    <stop offset="30%" stopColor="#fad0c4" stopOpacity="0.8" />
    <stop offset="45%" stopColor="#fbc2eb" stopOpacity="0.7" />
    <stop offset="60%" stopColor="#a18cd1" stopOpacity="0.5" />
    <stop offset="75%" stopColor="#84fab0" stopOpacity="0.3" />
    <stop offset="90%" stopColor="#8fd3f4" stopOpacity="0.2" />
    <stop offset="100%" stopColor="#a6c0fe" stopOpacity="0" />
  </radialGradient>
);

// === GRADIENT MAP ===

const innerGradientMap = {
  main: Main,
  radial: Radial,
  complexRainbow: ComplexRainbow,
  nightSky: NightSky,
  sunset: Sunset,
  oceanBlue: OceanBlue,
  aurora: Aurora,
  fire: Fire,
  superComplex: SuperComplex,
} as const;

// **1. Dynamically generate the type for the keys of `innerGradientMap`**
export type GradientMapKeys = keyof typeof innerGradientMap; // 'main' | 'radial' | 'complexRainbow' | ...

// **2. Dynamically generate the type for the values of `innerGradientMap`**
export type GradientComponent = (typeof innerGradientMap)[GradientMapKeys]; // The type of any component function in the map

// **3. Type the map itself**
type GradientMapType = {
  [K in GradientMapKeys]: GradientComponent;
};

const gradientMap = Object.fromEntries(
  Object.entries(innerGradientMap).map(([key, component]) => [
    key,
    withComponentMeta(component),
  ])
);

let index = 0;
const keys = Object.keys(gradientMap);

Object.defineProperty(gradientMap, 'next', {
  enumerable: false, // don't show in Object.keys
  value: function () {
    const key = keys[index];
    index = (index + 1) % keys.length;
    return key;
  },
});

export { gradientMap };
