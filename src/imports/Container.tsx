import svgPaths from "./svg-exi8uadae1";

function Container() {
  return <div className="absolute bg-[rgba(212,175,55,0.1)] blur-2xl filter left-[33.65px] rounded-[3.6829e+07px] size-[103.984px] top-[-8px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(15,76,92,0.1)] blur-xl filter left-[218.69px] rounded-[3.6829e+07px] size-[85.009px] top-[6.6px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(212,175,55,0.3)] left-[94.12px] opacity-[0.503] rounded-[3.6829e+07px] size-[7.992px] top-[80px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute bg-[rgba(15,76,92,0.2)] left-[125.48px] opacity-[0.792] rounded-[3.6829e+07px] size-[5.985px] top-[74.02px]" data-name="Container" />;
}

function Container4() {
  return <div className="absolute bg-[rgba(212,175,55,0.25)] left-[243px] opacity-[0.997] rounded-[3.6829e+07px] size-[7.992px] top-[76.01px]" data-name="Container" />;
}

function Container5() {
  return <div className="absolute bg-[rgba(15,76,92,0.3)] left-[276.37px] opacity-[0.708] rounded-[3.6829e+07px] size-[5.985px] top-[70.01px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="absolute h-[111.988px] left-0 top-0 w-[376.473px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 377 112">
        <g clipPath="url(#clip0_2039_688)" id="Icon">
          <path d={svgPaths.p46eca00} fill="var(--fill-0, #F2F4F5)" id="Vector" />
          <path d={svgPaths.p1cef1280} fill="url(#paint0_linear_2039_688)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p28a125f1} fill="url(#paint1_linear_2039_688)" id="Vector_3" opacity="0.2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2039_688" x1="0" x2="376.473" y1="1.00947e-05" y2="1.00947e-05">
            <stop stopColor="#0F4C5C" stopOpacity="0.3" />
            <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="1" stopColor="#0F4C5C" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_2039_688" x1="0" x2="376.473" y1="1.95742e-05" y2="1.95742e-05">
            <stop stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#0F4C5C" stopOpacity="0.3" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0.2" />
          </linearGradient>
          <clipPath id="clip0_2039_688">
            <rect fill="white" height="111.988" width="376.473" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Container6() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Icon />
    </div>
  );
}