import React from 'react';

interface HeartLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fill?: string;
}

export const HeartLogo: React.FC<HeartLogoProps> = ({
  className = 'w-8 h-8',
  fill = '#ffffff',
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="50 110 410 280"
      role="img"
      aria-label="Heart logo"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1fa5d3" />
          <stop offset="55%" stopColor="#6f9fe6" />
          <stop offset="100%" stopColor="#b79cff" />
        </linearGradient>
      </defs>
      <g fill={fill}>
        <path d="M188 137 C215 134 248 136 270 158 C290 180 298 212 316 258 C333 302 353 334 385 356 C402 366 420 369 437 370 L437 372 C410 373 385 371 360 351 C336 332 322 300 307 262 C290 220 274 188 252 167 C234 151 210 142 188 137 Z" />
        <path d="M437 371 C400 361 370 347 330 345 C290 343 250 354 205 363 C150 372 90 352 72 305 C62 268 90 232 140 222 C175 216 200 228 208 247 C196 234 170 229 142 234 C102 244 79 272 82 303 C90 338 140 357 200 353 C250 346 290 336 335 338 C375 341 405 358 437 371 Z" />
      </g>
    </svg>
  );
};

export default HeartLogo;

