import * as React from "react";
import { SVGProps } from "react";

const SvgFlow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} {...props}>
    <g fill="none" fillRule="nonzero">
      <path
        fill="#79C9FC"
        d="M30 29a5 5 0 0 0 5-5c0-9.389-7.611-17-17-17S1 14.611 1 24s7.611 17 17 17c1.333 0 2.645-.153 3.915-.453-2.405-1.215-4.364-2.686-5.87-4.416-1.939-2.228-3.276-5.058-4.016-8.475A7 7 0 1 1 25 24c.001 2.125 2.705 5 5.001 5Z"
      />
      <path
        fill="#FFC445"
        d="M18 19a5 5 0 0 0-5 5c0 9.389 7.611 17 17 17s17-7.611 17-17S39.389 7 30 7c-1.333 0-2.645.153-3.915.453 2.405 1.215 4.51 2.569 5.87 4.416C33.937 14.563 37 20.813 37 24a7 7 0 0 1-14 0c-.023-2.344-2.704-5-5-5Z"
      />
    </g>
  </svg>
);

export default SvgFlow;
