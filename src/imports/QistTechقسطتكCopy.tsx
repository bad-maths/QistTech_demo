import svgPaths from "./svg-ung4zrmwy6";
import imgImageWithFallback from "figma:asset/e00bf7114b6ea80bf69ce6ddc57b233029780ac3.png";
import imgImageWithFallback1 from "figma:asset/6a84242b19c7c5b10ee252a033afc8f53c6d6607.png";
import imgImageWithFallback2 from "figma:asset/332fffa0dc008fb4908fe7e323fbe0339df3ebd2.png";
import { imgGroup, imgGroup1 } from "./svg-onpj5";

function FinancialInsightCard() {
  return <div className="absolute bg-[rgba(212,175,55,0.05)] blur-3xl filter left-[246.6px] rounded-[3.6829e+07px] size-[127.989px] top-[1.1px]" data-name="FinancialInsightCard" />;
}

function Badge() {
  return (
    <div className="bg-[#d4af37] h-[26.188px] relative rounded-[3.6829e+07px] shrink-0 w-[58.927px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[58.927px]">
        <p className="font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f4c5c] text-[12px] text-nowrap whitespace-pre" dir="auto">
          محدّث
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0e1e25] text-[14px] text-nowrap top-[0.1px] tracking-[-0.35px] whitespace-pre" dir="auto">
        نظرة مالية
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        تحليل ذكي لقدراتك
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[35.98px] relative shrink-0 w-[91.357px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[6.485e_-5px] h-[35.98px] items-start relative w-[91.357px]">
        <Heading3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2039_796)" id="Icon">
          <path d={svgPaths.p2fa98500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
        <defs>
          <clipPath id="clip0_2039_796">
            <rect fill="white" height="15.9836" width="15.9836" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-gradient-to-b from-[#d4af37] relative rounded-[32px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] shrink-0 size-[31.984px] to-[#b8941f]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center pl-[0.017px] pr-0 py-0 relative size-[31.984px]">
        <Icon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[35.98px] relative shrink-0 w-[131.333px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7.992px] h-[35.98px] items-center relative w-[131.333px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[35.98px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[35.98px] items-center justify-between relative w-full">
          <Badge />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#d4af37] h-[26.188px] relative rounded-[3.6829e+07px] shrink-0 w-[58.481px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[58.481px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f4c5c] text-[12px] text-nowrap whitespace-pre">+12%</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2039_821)" id="Icon">
          <path d="M7.99182 1.33197V14.6517" id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p26416fc0} id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
        <defs>
          <clipPath id="clip0_2039_821">
            <rect fill="white" height="15.9836" width="15.9836" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#f2f4f5] relative rounded-[24px] shrink-0 size-[27.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[27.988px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.992px] h-[27.988px] items-center left-[17.08px] pl-[32.122px] pr-0 py-0 top-[17.08px] w-[126.583px]" data-name="Container">
      <Badge1 />
      <Container4 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-[17.08px] top-[57.06px] w-[126.583px]" data-name="Paragraph">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        القدرة الشرائية
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[27.988px] left-[43.41px] top-0 w-[83.177px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0e1e25] text-[20px] text-nowrap top-[-0.9px] whitespace-pre">750,000</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-[17.05px] top-[8.78px] w-[22.363px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        ر.س
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[27.988px] left-[17.08px] top-[77.05px] w-[126.583px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-[17.08px] top-[109.04px] w-[126.583px]" data-name="Paragraph">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        بناءً على راتبك
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[142.121px] left-[172.75px] rounded-[16px] top-0 w-[160.745px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container5 />
      <Paragraph1 />
      <Container6 />
      <Paragraph2 />
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#d4af37] h-[26.188px] relative rounded-[3.6829e+07px] shrink-0 w-[51.209px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[51.209px]">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f4c5c] text-[12px] text-nowrap whitespace-pre">-8%</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.984px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2039_802)" id="Icon">
          <path d={svgPaths.p2905dd00} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p395e6340} id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p11f30840} id="Vector_3" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
        <defs>
          <clipPath id="clip0_2039_802">
            <rect fill="white" height="15.9836" width="15.9836" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f2f4f5] relative rounded-[24px] shrink-0 size-[27.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[27.988px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute box-border content-stretch flex gap-[7.992px] h-[27.988px] items-center left-[17.08px] pl-[39.41px] pr-0 py-0 top-[17.08px] w-[126.6px]" data-name="Container">
      <Badge2 />
      <Container8 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-[17.08px] top-[57.06px] w-[126.6px]" data-name="Paragraph">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        الهدف الشهري
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[27.988px] left-[69.35px] top-0 w-[57.246px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0e1e25] text-[20px] text-nowrap top-[-0.9px] whitespace-pre">4,200</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-[42.99px] top-[8.78px] w-[22.363px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        ر.س
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[27.988px] left-[17.08px] top-[77.05px] w-[126.6px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-[17.08px] top-[109.04px] w-[126.6px]" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-600" dir="auto">
        قسط مناسب
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[142.121px] left-0 rounded-[16px] top-0 w-[160.762px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container9 />
      <Paragraph3 />
      <Container10 />
      <Paragraph4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[142.121px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container11 />
    </div>
  );
}

function FinancialInsightCard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.984px] h-[194.085px] items-start left-[21.09px] top-[21.09px] w-[333.496px]" data-name="FinancialInsightCard">
      <Container3 />
      <Container12 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute h-[236.273px] left-0 rounded-[24px] top-[545px] w-[375.669px]" data-name="Card">
      <div className="h-[236.273px] overflow-clip relative rounded-[inherit] w-[375.669px]">
        <FinancialInsightCard />
        <FinancialInsightCard1 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[15.984px] top-[1.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2387cb80} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d="M12.6537 7.99182H3.32993" id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-[52.924px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.98px] relative w-[52.924px]">
        <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[20px] left-[19.98px] not-italic text-[#0f4c5c] text-[14px] text-nowrap top-[0.1px] whitespace-pre" dir="auto">
          المزيد
        </p>
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[161.36px] size-[19.997px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2039_765)" id="Icon">
          <path d={svgPaths.p193ab540} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p12240680} id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_2039_765">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28.006px] relative shrink-0 w-full" data-name="Heading 2">
      <Icon4 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0e1e25] text-[18px] text-nowrap top-[-0.81px] tracking-[-0.45px] whitespace-pre" dir="auto">
        أفضل عروض التمويل
      </p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-600" dir="auto">
        معدلات تنافسية
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-[181.359px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.996px] h-[48.002px] items-start relative w-[181.359px]">
        <Heading2 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[48.002px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container13 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p14a202c0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-[-0.45%_78.4%_65.99%_8.12%] mask-position-[-0.477px,_0px_-0.662px,_-0.004px] mask-size-[20.92px_14.198px,_20.34px_13.443px]" data-name="Group" style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
        <g id="Group">
          <path d={svgPaths.p5c37400} fill="url(#paint0_linear_2039_771)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2039_771" x1="10.1734" x2="10.1734" y1="13.4381" y2="-0.00146755">
            <stop stopColor="#82C341" />
            <stop offset="0.0078125" stopColor="#82C341" />
            <stop offset="0.0117" stopColor="#81C241" />
            <stop offset="0.0156" stopColor="#80C241" />
            <stop offset="0.0195" stopColor="#80C241" />
            <stop offset="0.0234" stopColor="#7FC141" />
            <stop offset="0.0273" stopColor="#7FC141" />
            <stop offset="0.0312" stopColor="#7EC142" />
            <stop offset="0.0352" stopColor="#7EC042" />
            <stop offset="0.0391" stopColor="#7DC042" />
            <stop offset="0.043" stopColor="#7DC042" />
            <stop offset="0.0469" stopColor="#7CBF42" />
            <stop offset="0.0508" stopColor="#7CBF42" />
            <stop offset="0.0547" stopColor="#7BBF42" />
            <stop offset="0.0586" stopColor="#7BBE42" />
            <stop offset="0.0625" stopColor="#7ABE42" />
            <stop offset="0.0664" stopColor="#7ABE42" />
            <stop offset="0.0703" stopColor="#79BD42" />
            <stop offset="0.0742" stopColor="#79BD42" />
            <stop offset="0.0781" stopColor="#78BD42" />
            <stop offset="0.082" stopColor="#78BC43" />
            <stop offset="0.0859" stopColor="#77BC43" />
            <stop offset="0.0898" stopColor="#77BC43" />
            <stop offset="0.0938" stopColor="#76BB43" />
            <stop offset="0.0977" stopColor="#75BB43" />
            <stop offset="0.1016" stopColor="#75BB43" />
            <stop offset="0.1055" stopColor="#74BA43" />
            <stop offset="0.1094" stopColor="#74BA43" />
            <stop offset="0.1133" stopColor="#73BA43" />
            <stop offset="0.1172" stopColor="#73B943" />
            <stop offset="0.1211" stopColor="#72B943" />
            <stop offset="0.125" stopColor="#72B943" />
            <stop offset="0.1289" stopColor="#71B843" />
            <stop offset="0.1328" stopColor="#71B843" />
            <stop offset="0.1367" stopColor="#70B844" />
            <stop offset="0.1406" stopColor="#70B744" />
            <stop offset="0.1445" stopColor="#6FB744" />
            <stop offset="0.1484" stopColor="#6FB744" />
            <stop offset="0.1523" stopColor="#6EB644" />
            <stop offset="0.1562" stopColor="#6EB644" />
            <stop offset="0.1602" stopColor="#6DB644" />
            <stop offset="0.1641" stopColor="#6DB544" />
            <stop offset="0.168" stopColor="#6CB544" />
            <stop offset="0.1719" stopColor="#6CB544" />
            <stop offset="0.1758" stopColor="#6BB544" />
            <stop offset="0.1797" stopColor="#6BB444" />
            <stop offset="0.1836" stopColor="#6AB444" />
            <stop offset="0.1875" stopColor="#6AB445" />
            <stop offset="0.1914" stopColor="#69B345" />
            <stop offset="0.1953" stopColor="#69B345" />
            <stop offset="0.1992" stopColor="#68B345" />
            <stop offset="0.2031" stopColor="#68B245" />
            <stop offset="0.207" stopColor="#67B245" />
            <stop offset="0.2109" stopColor="#67B245" />
            <stop offset="0.2148" stopColor="#66B145" />
            <stop offset="0.2188" stopColor="#66B145" />
            <stop offset="0.2227" stopColor="#65B145" />
            <stop offset="0.2266" stopColor="#65B045" />
            <stop offset="0.2305" stopColor="#64B045" />
            <stop offset="0.2344" stopColor="#64B045" />
            <stop offset="0.2383" stopColor="#63AF46" />
            <stop offset="0.2422" stopColor="#63AF46" />
            <stop offset="0.2461" stopColor="#62AF46" />
            <stop offset="0.25" stopColor="#62AE46" />
            <stop offset="0.2539" stopColor="#61AE46" />
            <stop offset="0.2578" stopColor="#61AE46" />
            <stop offset="0.2617" stopColor="#60AD46" />
            <stop offset="0.2656" stopColor="#60AD46" />
            <stop offset="0.2695" stopColor="#5FAD46" />
            <stop offset="0.2734" stopColor="#5FAC46" />
            <stop offset="0.2773" stopColor="#5EAC46" />
            <stop offset="0.2812" stopColor="#5EAC46" />
            <stop offset="0.2852" stopColor="#5DAB46" />
            <stop offset="0.2891" stopColor="#5DAB46" />
            <stop offset="0.293" stopColor="#5CAB47" />
            <stop offset="0.2969" stopColor="#5CAA47" />
            <stop offset="0.3008" stopColor="#5BAA47" />
            <stop offset="0.3047" stopColor="#5BAA47" />
            <stop offset="0.3086" stopColor="#5AA947" />
            <stop offset="0.3125" stopColor="#5AA947" />
            <stop offset="0.3164" stopColor="#59A947" />
            <stop offset="0.3203" stopColor="#58A947" />
            <stop offset="0.3242" stopColor="#58A847" />
            <stop offset="0.3281" stopColor="#57A847" />
            <stop offset="0.332" stopColor="#57A847" />
            <stop offset="0.3359" stopColor="#56A747" />
            <stop offset="0.3398" stopColor="#56A747" />
            <stop offset="0.3438" stopColor="#55A748" />
            <stop offset="0.3477" stopColor="#55A648" />
            <stop offset="0.3516" stopColor="#54A648" />
            <stop offset="0.3555" stopColor="#54A648" />
            <stop offset="0.3594" stopColor="#53A548" />
            <stop offset="0.3633" stopColor="#53A548" />
            <stop offset="0.3672" stopColor="#52A548" />
            <stop offset="0.3711" stopColor="#52A448" />
            <stop offset="0.375" stopColor="#51A448" />
            <stop offset="0.3789" stopColor="#51A448" />
            <stop offset="0.3828" stopColor="#50A348" />
            <stop offset="0.3867" stopColor="#50A348" />
            <stop offset="0.3906" stopColor="#4FA348" />
            <stop offset="0.3945" stopColor="#4FA248" />
            <stop offset="0.3984" stopColor="#4EA249" />
            <stop offset="0.4023" stopColor="#4EA249" />
            <stop offset="0.4062" stopColor="#4DA149" />
            <stop offset="0.4102" stopColor="#4DA149" />
            <stop offset="0.4141" stopColor="#4CA149" />
            <stop offset="0.418" stopColor="#4CA049" />
            <stop offset="0.4219" stopColor="#4BA049" />
            <stop offset="0.4258" stopColor="#4BA049" />
            <stop offset="0.4297" stopColor="#4A9F49" />
            <stop offset="0.4336" stopColor="#4A9F49" />
            <stop offset="0.4375" stopColor="#499F49" />
            <stop offset="0.4414" stopColor="#499E49" />
            <stop offset="0.4453" stopColor="#489E49" />
            <stop offset="0.4492" stopColor="#489E4A" />
            <stop offset="0.4531" stopColor="#479D4A" />
            <stop offset="0.457" stopColor="#479D4A" />
            <stop offset="0.4609" stopColor="#469D4A" />
            <stop offset="0.4648" stopColor="#469C4A" />
            <stop offset="0.4688" stopColor="#459C4A" />
            <stop offset="0.4727" stopColor="#459C4A" />
            <stop offset="0.4766" stopColor="#449C4A" />
            <stop offset="0.4805" stopColor="#449B4A" />
            <stop offset="0.4844" stopColor="#439B4A" />
            <stop offset="0.4883" stopColor="#439B4A" />
            <stop offset="0.4922" stopColor="#429A4A" />
            <stop offset="0.4961" stopColor="#429A4A" />
            <stop offset="0.5" stopColor="#419A4A" />
            <stop offset="0.5039" stopColor="#41994B" />
            <stop offset="0.5078" stopColor="#40994B" />
            <stop offset="0.5117" stopColor="#40994B" />
            <stop offset="0.5156" stopColor="#3F984B" />
            <stop offset="0.5195" stopColor="#3F984B" />
            <stop offset="0.5234" stopColor="#3E984B" />
            <stop offset="0.5273" stopColor="#3E974B" />
            <stop offset="0.5312" stopColor="#3D974B" />
            <stop offset="0.5352" stopColor="#3D974B" />
            <stop offset="0.5391" stopColor="#3C964B" />
            <stop offset="0.543" stopColor="#3C964B" />
            <stop offset="0.5469" stopColor="#3B964B" />
            <stop offset="0.5508" stopColor="#3A954B" />
            <stop offset="0.5547" stopColor="#3A954C" />
            <stop offset="0.5586" stopColor="#39954C" />
            <stop offset="0.5625" stopColor="#39944C" />
            <stop offset="0.5664" stopColor="#38944C" />
            <stop offset="0.5703" stopColor="#38944C" />
            <stop offset="0.5742" stopColor="#37934C" />
            <stop offset="0.5781" stopColor="#37934C" />
            <stop offset="0.582" stopColor="#36934C" />
            <stop offset="0.5859" stopColor="#36924C" />
            <stop offset="0.5898" stopColor="#35924C" />
            <stop offset="0.5938" stopColor="#35924C" />
            <stop offset="0.5977" stopColor="#34914C" />
            <stop offset="0.6016" stopColor="#34914C" />
            <stop offset="0.6055" stopColor="#33914C" />
            <stop offset="0.6094" stopColor="#33904D" />
            <stop offset="0.6133" stopColor="#32904D" />
            <stop offset="0.6172" stopColor="#32904D" />
            <stop offset="0.6211" stopColor="#318F4D" />
            <stop offset="0.625" stopColor="#318F4D" />
            <stop offset="0.6289" stopColor="#308F4D" />
            <stop offset="0.6328" stopColor="#308F4D" />
            <stop offset="0.6367" stopColor="#2F8E4D" />
            <stop offset="0.6406" stopColor="#2F8E4D" />
            <stop offset="0.6445" stopColor="#2E8E4D" />
            <stop offset="0.6484" stopColor="#2E8D4D" />
            <stop offset="0.6523" stopColor="#2D8D4D" />
            <stop offset="0.6562" stopColor="#2D8D4D" />
            <stop offset="0.6602" stopColor="#2C8C4E" />
            <stop offset="0.6641" stopColor="#2C8C4E" />
            <stop offset="0.668" stopColor="#2B8C4E" />
            <stop offset="0.6719" stopColor="#2B8B4E" />
            <stop offset="0.6758" stopColor="#2A8B4E" />
            <stop offset="0.6797" stopColor="#2A8B4E" />
            <stop offset="0.6836" stopColor="#298A4E" />
            <stop offset="0.6875" stopColor="#298A4E" />
            <stop offset="0.6914" stopColor="#288A4E" />
            <stop offset="0.6953" stopColor="#28894E" />
            <stop offset="0.6992" stopColor="#27894E" />
            <stop offset="0.7031" stopColor="#27894E" />
            <stop offset="0.707" stopColor="#26884E" />
            <stop offset="0.7109" stopColor="#26884E" />
            <stop offset="0.7148" stopColor="#25884F" />
            <stop offset="0.7188" stopColor="#25874F" />
            <stop offset="0.7227" stopColor="#24874F" />
            <stop offset="0.7266" stopColor="#24874F" />
            <stop offset="0.7305" stopColor="#23864F" />
            <stop offset="0.7344" stopColor="#23864F" />
            <stop offset="0.7383" stopColor="#22864F" />
            <stop offset="0.7422" stopColor="#22854F" />
            <stop offset="0.7461" stopColor="#21854F" />
            <stop offset="0.75" stopColor="#21854F" />
            <stop offset="0.7539" stopColor="#20844F" />
            <stop offset="0.7578" stopColor="#20844F" />
            <stop offset="0.7617" stopColor="#1F844F" />
            <stop offset="0.7656" stopColor="#1F8350" />
            <stop offset="0.7695" stopColor="#1E8350" />
            <stop offset="0.7734" stopColor="#1D8350" />
            <stop offset="0.7773" stopColor="#1D8250" />
            <stop offset="0.7812" stopColor="#1C8250" />
            <stop offset="0.7852" stopColor="#1C8250" />
            <stop offset="0.7891" stopColor="#1B8250" />
            <stop offset="0.793" stopColor="#1B8150" />
            <stop offset="0.7969" stopColor="#1A8150" />
            <stop offset="0.8008" stopColor="#1A8150" />
            <stop offset="0.8047" stopColor="#198050" />
            <stop offset="0.8086" stopColor="#198050" />
            <stop offset="0.8125" stopColor="#188050" />
            <stop offset="0.8164" stopColor="#187F51" />
            <stop offset="0.8203" stopColor="#177F51" />
            <stop offset="0.8242" stopColor="#177F51" />
            <stop offset="0.8281" stopColor="#167E51" />
            <stop offset="0.832" stopColor="#167E51" />
            <stop offset="0.8359" stopColor="#157E51" />
            <stop offset="0.8398" stopColor="#157D51" />
            <stop offset="0.8438" stopColor="#147D51" />
            <stop offset="0.8477" stopColor="#147D51" />
            <stop offset="0.8516" stopColor="#137C51" />
            <stop offset="0.8555" stopColor="#137C51" />
            <stop offset="0.8594" stopColor="#127C51" />
            <stop offset="0.8633" stopColor="#127B51" />
            <stop offset="0.8672" stopColor="#117B51" />
            <stop offset="0.8711" stopColor="#117B52" />
            <stop offset="0.875" stopColor="#107A52" />
            <stop offset="0.8789" stopColor="#107A52" />
            <stop offset="0.8828" stopColor="#0F7A52" />
            <stop offset="0.8867" stopColor="#0F7952" />
            <stop offset="0.8906" stopColor="#0E7952" />
            <stop offset="0.8945" stopColor="#0E7952" />
            <stop offset="0.8984" stopColor="#0D7852" />
            <stop offset="0.9023" stopColor="#0D7852" />
            <stop offset="0.9062" stopColor="#0C7852" />
            <stop offset="0.9102" stopColor="#0C7752" />
            <stop offset="0.9141" stopColor="#0B7752" />
            <stop offset="0.918" stopColor="#0B7752" />
            <stop offset="0.9219" stopColor="#0A7653" />
            <stop offset="0.9258" stopColor="#0A7653" />
            <stop offset="0.9297" stopColor="#097653" />
            <stop offset="0.9336" stopColor="#097653" />
            <stop offset="0.9375" stopColor="#087553" />
            <stop offset="0.9414" stopColor="#087553" />
            <stop offset="0.9453" stopColor="#077553" />
            <stop offset="0.9492" stopColor="#077453" />
            <stop offset="0.9531" stopColor="#067453" />
            <stop offset="0.957" stopColor="#067453" />
            <stop offset="0.9609" stopColor="#057353" />
            <stop offset="0.9648" stopColor="#057353" />
            <stop offset="0.9688" stopColor="#047353" />
            <stop offset="0.9727" stopColor="#047253" />
            <stop offset="0.9766" stopColor="#037254" />
            <stop offset="0.9805" stopColor="#037254" />
            <stop offset="0.9844" stopColor="#027154" />
            <stop offset="0.9883" stopColor="#027154" />
            <stop offset="0.9922" stopColor="#017154" />
            <stop offset="0.9961" stopColor="#007054" />
            <stop offset="1" stopColor="#007054" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[-0.46%_78.41%_65.99%_8.12%]" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[-0.46%_78.41%_65.99%_8.12%]" data-name="Group">
      <ClipPathGroup />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[-0.46%_78.41%_65.99%_8.12%]" data-name="Group">
      <Group1 />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-[-2.15%_78.34%_65.74%_7.81%]" data-name="Clip path group">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[-2.15%_78.34%_65.74%_7.81%]" data-name="Group">
      <ClipPathGroup1 />
    </div>
  );
}

function Surface1() {
  return (
    <div className="absolute bottom-[-0.27%] contents left-0 right-0 top-[-2.15%]" data-name="surface1">
      <Group3 />
      <div className="absolute bottom-[13.31%] left-0 right-[85.64%] top-[40.33%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
          <path d={svgPaths.p6214c80} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.3%_68.77%_13.79%_16.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 18">
          <path d={svgPaths.p1df8d480} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.8%_52.14%_13.82%_33.94%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <path d={svgPaths.p2c2cde80} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.48%_39.85%_-0.27%_58.31%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p9e9d280} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[93.48%_42.38%_-0.27%_55.79%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path d={svgPaths.p378e4030} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.4%_15.49%_14.03%_52.02%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 19">
          <path d={svgPaths.p3aa05a00} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.76%_8.38%_51.91%_88.41%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p232abb12} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.41%_4.53%_13.81%_86.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
          <path d={svgPaths.pc2ef700} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-[14.04%] left-[98.36%] right-0 top-[37.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 19">
          <path d={svgPaths.p17d7a00} fill="var(--fill-0, #004433)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[39px] left-[-16px] overflow-clip top-[51px] w-[151px]" data-name="شعار البنك الأهلي التجاري – SVG">
      <Surface1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[169.93px] size-[139.977px] top-[-45.07px]">
      <Svg />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[19.98px] left-0 overflow-clip top-0 w-[249.564px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0e1e25] text-[14px] text-nowrap top-[0.1px] tracking-[-0.35px] whitespace-pre" dir="auto">
        البنك الأهلي
      </p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#d4af37] h-[26.188px] left-0 rounded-[3.6829e+07px] top-[23.98px] w-[62.425px]" data-name="Badge">
      <div className="h-[26.188px] overflow-clip relative rounded-[inherit] w-[62.425px]">
        <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] left-[13.09px] not-italic text-[#0f4c5c] text-[12px] text-nowrap top-[5.09px] whitespace-pre" dir="auto">
          الأفضل
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow h-[50.163px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.163px] relative w-full">
        <Frame5 />
        <Heading4 />
        <Badge3 />
      </div>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="h-[50.163px] relative shrink-0 w-[341.522px]" data-name="HomeScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.988px] h-[50.163px] items-center relative w-[341.522px]">
        <Icon5 />
        <Container15 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-gray-600" dir="auto">
        المعدل
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46.93px] not-italic text-[#0e1e25] text-[14px] text-center text-nowrap top-[0.1px] translate-x-[-50%] whitespace-pre">3.5%</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(242,244,245,0.7)] box-border content-stretch flex flex-col gap-[1.989px] h-[53.953px] items-start left-[233.01px] pb-0 pt-[7.992px] px-[7.992px] rounded-[32px] top-0 w-[108.507px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-gray-600" dir="auto">
        المدة
      </p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[20px] left-[46.51px] not-italic text-[#0e1e25] text-[14px] text-center top-[0.1px] translate-x-[-50%] w-[45px]" dir="auto">
        25 سنة
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[rgba(242,244,245,0.7)] box-border content-stretch flex flex-col gap-[1.989px] h-[53.953px] items-start left-[116.52px] pb-0 pt-[7.992px] px-[7.992px] rounded-[32px] top-0 w-[108.507px]" data-name="Container">
      <Paragraph8 />
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-gray-600" dir="auto">
        شهرياً
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46.74px] not-italic text-[#0f4c5c] text-[14px] text-center text-nowrap top-[0.1px] translate-x-[-50%] whitespace-pre">5,200</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.989px] h-[53.953px] items-start left-0 pb-0 pt-[7.992px] px-[7.992px] rounded-[32px] top-0 w-[108.524px]" data-name="Container">
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function HomeScreen1() {
  return (
    <div className="h-[53.953px] relative shrink-0 w-[341.522px]" data-name="HomeScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[53.953px] relative w-[341.522px]">
        <Container16 />
        <Container17 />
        <Container18 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[35.98px] h-[174px] items-start pb-[1.098px] pl-[17.081px] pr-[1.098px] pt-[17.081px] relative rounded-[24px] shrink-0 w-[376px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
      <HomeScreen />
      <HomeScreen1 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p14a202c0} id="Vector" stroke="var(--stroke-0, #4B5563)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[19.98px] left-0 overflow-clip top-0 w-[249.564px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#0e1e25] text-[14px] text-nowrap top-[0.1px] tracking-[-0.35px] whitespace-pre" dir="auto">
        بنك الراجحي
      </p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-[#d4af37] h-[26.188px] left-0 rounded-[3.6829e+07px] top-[23.98px] w-[98.337px]" data-name="Badge">
      <div className="h-[26.188px] overflow-clip relative rounded-[inherit] w-[98.337px]">
        <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] left-[13.09px] not-italic text-[#0f4c5c] text-[12px] text-nowrap top-[5.09px] whitespace-pre" dir="auto">
          معدل منخفض
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow h-[50.163px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[50.163px] relative w-full">
        <Heading5 />
        <Badge4 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[2.16%_-0.01%_0.14%_0.01%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 53">
        <g id="Group">
          <path d={svgPaths.p335e1500} fill="var(--fill-0, #221AFB)" id="Vector" />
          <path d={svgPaths.p1c8c5480} fill="var(--fill-0, #221AFB)" id="Vector_2" />
          <path d={svgPaths.p3bb8be00} fill="var(--fill-0, #221AFB)" id="Vector_3" />
          <path d={svgPaths.p1ee684f0} fill="var(--fill-0, #221AFB)" id="Vector_4" />
          <path d={svgPaths.p20ec4b00} fill="var(--fill-0, #221AFB)" id="Vector_5" />
          <path d={svgPaths.p3053ef00} fill="var(--fill-0, #221AFB)" id="Vector_6" />
          <path d={svgPaths.pabb9280} fill="var(--fill-0, #221AFB)" id="Vector_7" />
          <path d={svgPaths.p577e5a0} fill="var(--fill-0, #221AFB)" id="Vector_8" />
          <path d={svgPaths.p1dc62c00} fill="var(--fill-0, #221AFB)" id="Vector_9" />
          <path d={svgPaths.p148fd200} fill="var(--fill-0, #221AFB)" id="Vector_10" />
          <path d={svgPaths.p257c8980} fill="var(--fill-0, #221AFB)" id="Vector_11" />
          <path d={svgPaths.p31322580} fill="var(--fill-0, #221AFB)" id="Vector_12" />
          <path d={svgPaths.p19fbf280} fill="var(--fill-0, #221AFB)" id="Vector_13" />
          <path d={svgPaths.p1e72df00} fill="var(--fill-0, #221AFB)" id="Vector_14" />
          <path d={svgPaths.p1d500b00} fill="var(--fill-0, #221AFB)" id="Vector_15" />
          <path d={svgPaths.pd67f500} fill="var(--fill-0, #221AFB)" id="Vector_16" />
          <path d={svgPaths.p17047e00} fill="var(--fill-0, #221AFB)" id="Vector_17" />
          <path d={svgPaths.p14b4200} fill="var(--fill-0, #221AFB)" id="Vector_18" />
          <path d={svgPaths.p278b8c80} fill="var(--fill-0, #221AFB)" id="Vector_19" />
          <path d={svgPaths.p3b538c80} fill="var(--fill-0, #221AFB)" id="Vector_20" />
          <path d={svgPaths.p1eab5d00} fill="var(--fill-0, #221AFB)" id="Vector_21" />
          <path d={svgPaths.p281b0600} fill="var(--fill-0, #221AFB)" id="Vector_22" />
          <path d={svgPaths.p38a30200} fill="var(--fill-0, #221AFB)" id="Vector_23" />
          <path d={svgPaths.p20dca174} fill="var(--fill-0, #221AFB)" id="Vector_24" />
        </g>
      </svg>
    </div>
  );
}

function X39U7Tlw00000148636920449813617690000003798258439039256462() {
  return (
    <div className="absolute contents inset-[2.16%_-0.01%_0.14%_0.01%]" data-name="_x39_u7Tlw_00000148636920449813617690000003798258439039256462_">
      <Group4 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="h-[54px] relative shrink-0 w-[151px]" data-name="شعار مصرف الراجحي الجديد – SVG">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[54px] overflow-clip relative rounded-[inherit] w-[151px]">
        <X39U7Tlw00000148636920449813617690000003798258439039256462 />
      </div>
    </div>
  );
}

function HomeScreen2() {
  return (
    <div className="h-[50.163px] relative shrink-0 w-[341.522px]" data-name="HomeScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.988px] h-[50.163px] items-center relative w-[341.522px]">
        <Icon6 />
        <Container19 />
        <Svg1 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-gray-600" dir="auto">
        المعدل
      </p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46.93px] not-italic text-[#0e1e25] text-[14px] text-center text-nowrap top-[0.1px] translate-x-[-50%] whitespace-pre">3.2%</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[rgba(242,244,245,0.7)] box-border content-stretch flex flex-col gap-[1.989px] h-[53.953px] items-start left-[233.01px] pb-0 pt-[7.992px] px-[7.992px] rounded-[32px] top-0 w-[108.507px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-gray-600" dir="auto">
        المدة
      </p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[20px] left-[46.51px] not-italic text-[#0e1e25] text-[14px] text-center top-[0.1px] translate-x-[-50%] w-[45px]" dir="auto">
        20 سنة
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[rgba(242,244,245,0.7)] box-border content-stretch flex flex-col gap-[1.989px] h-[53.953px] items-start left-[116.52px] pb-0 pt-[7.992px] px-[7.992px] rounded-[32px] top-0 w-[108.507px]" data-name="Container">
      <Paragraph14 />
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-center text-gray-600" dir="auto">
        شهرياً
      </p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[46.74px] not-italic text-[#0f4c5c] text-[14px] text-center text-nowrap top-[0.1px] translate-x-[-50%] whitespace-pre">5,450</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[1.989px] h-[53.953px] items-start left-0 pb-0 pt-[7.992px] px-[7.992px] rounded-[32px] top-0 w-[108.524px]" data-name="Container">
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function HomeScreen3() {
  return (
    <div className="h-[53.953px] relative shrink-0 w-[341.522px]" data-name="HomeScreen">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[53.953px] relative w-[341.522px]">
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[35.98px] h-[174px] items-start pb-[1.098px] pl-[17.081px] pr-[1.098px] pt-[17.081px] relative rounded-[24px] shrink-0 w-[382px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.1)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
      <HomeScreen2 />
      <HomeScreen3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[11.988px] h-[360.507px] items-start relative shrink-0 w-full" data-name="Container">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.984px] h-[424.493px] items-start left-[-1px] top-[953px] w-[375.669px]" data-name="Container">
      <Container14 />
      <Container23 />
    </div>
  );
}

function HomeScreen4() {
  return <div className="absolute bg-[rgba(212,175,55,0.2)] blur-3xl filter left-[215.69px] rounded-[3.6829e+07px] size-[159.991px] top-0" data-name="HomeScreen" />;
}

function HomeScreen5() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] blur-2xl filter left-0 rounded-[3.6829e+07px] size-[127.989px] top-[13.93px]" data-name="HomeScreen" />;
}

function HomeScreen6() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[141.915px] left-[-375.68px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.05)] w-[375.684px]" data-name="HomeScreen" />;
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[15.743px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2039_780)" id="Icon" opacity="0.879248">
          <path d={svgPaths.p372d1b00} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31196" />
          <path d="M13.1196 1.31196V3.93589" id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31196" />
          <path d="M14.4316 2.62392H11.8077" id="Vector_3" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31196" />
          <path d={svgPaths.p1d490e80} id="Vector_4" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.31196" />
        </g>
        <defs>
          <clipPath id="clip0_2039_780">
            <rect fill="white" height="15.7435" width="15.7435" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[47.985px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[24px] left-[23.73px] not-italic text-[16px] text-white top-[-1.9px] tracking-[-0.4px] w-[90px]" dir="auto">
        احسب قدرتك الشرائية
      </p>
      <Icon7 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[39.959px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.1px] w-[154px]" dir="auto">
        اكتشف كم يمكنك الاقتراض بسهولة
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5.985px] h-[93.93px] items-start left-0 top-0 w-[164.827px]" data-name="Container">
      <Heading6 />
      <Paragraph18 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-[#d4af37] blur-md filter left-0 opacity-50 rounded-[24px] size-[59.956px] top-0" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="h-[27.988px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
            <path d={svgPaths.p18df5a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.17px_-12.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 3">
            <path d="M1.16619 1.16619H10.4957" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[66.67%] right-[33.33%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1.17px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
            <path d="M1.16619 1.16619V5.83094" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_33.29%_58.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[58.33%] left-1/2 right-[49.96%] top-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.63%_58.33%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[41.67%] left-1/2 right-[49.96%] top-[58.33%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[58.33%_66.63%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/2 right-[49.96%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[33.33%] right-[66.63%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1.17px_-9999.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d="M1.16619 1.16619H1.17785" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#d4af37] items-start left-0 pb-0 pt-[15.984px] px-[15.984px] rounded-[24px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)] size-[59.956px] to-[#b8941f] top-0" data-name="Container">
      <Icon8 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute left-[180.81px] size-[59.956px] top-[16.98px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[93.93px] left-[86.93px] top-0 w-[240.766px]" data-name="Container">
      <Container25 />
      <Container28 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[27.988px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p43ddf00} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33238" />
        </g>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[26.188px] relative rounded-[3.6829e+07px] shrink-0 w-[50.952px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[50.952px]">
        <p className="font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre" dir="auto">
          مجاناً
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[27.988px] items-center left-0 top-[32.96px] w-[86.933px]" data-name="Container">
      <Icon9 />
      <Badge5 />
    </div>
  );
}

function HomeScreen7() {
  return (
    <div className="absolute h-[93.93px] left-[23.99px] top-[23.99px] w-[327.699px]" data-name="HomeScreen">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-gradient-to-b from-[#0f4c5c] h-[141.915px] left-0 overflow-clip rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] to-[#0f4c5c] top-[796px] via-50% via-[#0a3540] w-[375.669px]" data-name="Card">
      <HomeScreen4 />
      <HomeScreen5 />
      <HomeScreen6 />
      <HomeScreen7 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[15.984px] top-[1.99px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2387cb80} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d="M12.6537 7.99182H3.32993" id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-[44.83px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.98px] relative w-[44.83px]">
        <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[20px] left-[19.98px] not-italic text-[#0f4c5c] text-[14px] text-nowrap top-[0.1px] whitespace-pre" dir="auto">
          الكل
        </p>
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[104.78px] size-[19.997px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2039_719)" id="Icon">
          <path d={svgPaths.p37351980} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p1d216e00} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_2039_719">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28.006px] relative shrink-0 w-full" data-name="Heading 2">
      <Icon11 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0e1e25] text-[18px] text-nowrap top-[-0.81px] tracking-[-0.45px] whitespace-pre" dir="auto">
        عقارات مميزة
      </p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        مختارة خصيصاً لك
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[48.002px] relative shrink-0 w-[124.782px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.996px] h-[48.002px] items-start relative w-[124.782px]">
        <Heading7 />
        <Paragraph19 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex h-[48.002px] items-center justify-between left-0 top-0 w-[375.684px]" data-name="Container">
      <Button1 />
      <Container31 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute h-[23.993px] left-[15.98px] overflow-clip top-[15.98px] w-[253.835px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0e1e25] text-[16px] text-nowrap top-[-1.9px] whitespace-pre" dir="auto">
        شقة حديثة في برج فاخر
      </p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[84.429px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.001px] items-start overflow-clip relative rounded-[inherit] w-[84.429px]">
        <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
          الرياض، حي المال
        </p>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[13.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2039_710)" id="Icon">
          <path d={svgPaths.p1873da80} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16619" />
          <path d={svgPaths.p33dce740} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16619" />
        </g>
        <defs>
          <clipPath id="clip0_2039_710">
            <rect fill="white" height="13.9943" width="13.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.996px] h-[16.001px] items-center left-[15.98px] pl-[151.416px] pr-0 py-0 top-[51.96px] w-[253.835px]" data-name="Container">
      <Text4 />
      <Icon12 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="absolute h-[25.587px] left-0 top-0 w-[31.59px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[16px] not-italic text-[#0e1e25] text-[16px] text-center text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre">220</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="absolute h-[25.587px] left-0 top-[25.59px] w-[31.59px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[25.6px] left-[15.87px] not-italic text-[16px] text-center text-gray-600 top-[-1.8px] tracking-[0.16px] translate-x-[-50%] w-[15px]" dir="auto">
        م²
      </p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[31.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] relative w-[31.59px]">
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(15,76,92,0.1)] h-[51.175px] relative shrink-0 w-[0.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] w-[0.995px]" />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="absolute h-[25.587px] left-0 top-0 w-[29.618px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[15.04px] not-italic text-[#0e1e25] text-[16px] text-center text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre">4</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="absolute h-[25.587px] left-0 top-[25.59px] w-[29.618px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[25.6px] left-[15px] not-italic text-[16px] text-center text-gray-600 text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre" dir="auto">
        غرف
      </p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[29.618px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] relative w-[29.618px]">
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[86.178px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.988px] h-[51.175px] items-start relative w-[86.178px]">
        <Container34 />
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-600" dir="auto">
        السعر
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[27.988px] left-[26.36px] top-0 w-[101.527px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0f4c5c] text-[20px] text-nowrap top-[-0.9px] whitespace-pre">1,650,000</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-0 top-[8.78px] w-[22.363px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        ر.س
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-full" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[47.985px] relative shrink-0 w-[127.886px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.996px] h-[47.985px] items-start relative w-[127.886px]">
        <Paragraph24 />
        <Container38 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex h-[51.175px] items-end justify-between left-[15.98px] top-[83.95px] w-[253.835px]" data-name="Container">
      <Container37 />
      <Container39 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[68.79px] size-[15.984px] top-[10.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.32993 7.99182H12.6537" id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p31551400} id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white h-[35.998px] left-[15.98px] rounded-[16px] top-[147.11px] w-[253.835px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#0f4c5c] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[24px] left-[92.76px] not-italic text-[#0f4c5c] text-[16px] text-nowrap top-[4.1px] whitespace-pre" dir="auto">
        عرض التفاصيل
      </p>
      <Icon13 />
    </div>
  );
}

function FeaturedPropertyCard() {
  return (
    <div className="absolute h-[199.092px] left-[1.1px] top-[217.08px] w-[285.802px]" data-name="FeaturedPropertyCard">
      <Heading8 />
      <Container33 />
      <Container40 />
      <Button2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[191.992px] left-0 top-0 w-[285.802px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container41() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[191.992px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.1)] w-[285.802px]" data-name="Container" />;
}

function Icon14() {
  return (
    <div className="h-[15.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p2df19500} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col items-start left-[11.99px] pb-0 pt-[9.998px] px-[9.998px] rounded-[3.6829e+07px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] size-[35.98px] top-[11.99px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#d4af37] h-[26.188px] left-[11.99px] rounded-[3.6829e+07px] top-[153.82px] w-[59.236px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[59.236px]">
        <p className="font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f4c5c] text-[12px] text-nowrap whitespace-pre" dir="auto">
          حصري
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function FeaturedPropertyCard1() {
  return (
    <div className="absolute h-[191.992px] left-[1.1px] overflow-clip top-[1.1px] w-[285.802px]" data-name="FeaturedPropertyCard">
      <ImageWithFallback />
      <Container41 />
      <Button3 />
      <Badge6 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-white h-[417.272px] relative rounded-[24px] shrink-0 w-[287.997px]" data-name="Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[417.272px] overflow-clip relative rounded-[inherit] w-[287.997px]">
        <FeaturedPropertyCard />
        <FeaturedPropertyCard1 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[23.993px] left-[15.98px] overflow-clip top-[15.98px] w-[253.835px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0e1e25] text-[16px] text-nowrap top-[-1.9px] whitespace-pre" dir="auto">
        فيلا عصرية مع حديقة
      </p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[67.382px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.001px] items-start overflow-clip relative rounded-[inherit] w-[67.382px]">
        <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
          جدة، حي البحر
        </p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[13.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2039_710)" id="Icon">
          <path d={svgPaths.p1873da80} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16619" />
          <path d={svgPaths.p33dce740} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16619" />
        </g>
        <defs>
          <clipPath id="clip0_2039_710">
            <rect fill="white" height="13.9943" width="13.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.996px] h-[16.001px] items-center left-[15.98px] pl-[168.463px] pr-0 py-0 top-[51.96px] w-[253.835px]" data-name="Container">
      <Text7 />
      <Icon15 />
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="absolute h-[25.587px] left-0 top-0 w-[31.59px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[16.5px] not-italic text-[#0e1e25] text-[16px] text-center text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre">350</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="absolute h-[25.587px] left-0 top-[25.59px] w-[31.59px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[25.6px] left-[15.87px] not-italic text-[16px] text-center text-gray-600 top-[-1.8px] tracking-[0.16px] translate-x-[-50%] w-[15px]" dir="auto">
        م²
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[31.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] relative w-[31.59px]">
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(15,76,92,0.1)] h-[51.175px] relative shrink-0 w-[0.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] w-[0.995px]" />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="absolute h-[25.587px] left-0 top-0 w-[29.618px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[14.54px] not-italic text-[#0e1e25] text-[16px] text-center text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre">5</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="absolute h-[25.587px] left-0 top-[25.59px] w-[29.618px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[25.6px] left-[15px] not-italic text-[16px] text-center text-gray-600 text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre" dir="auto">
        غرف
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[29.618px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] relative w-[29.618px]">
        <Paragraph27 />
        <Paragraph28 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[86.178px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.988px] h-[51.175px] items-start relative w-[86.178px]">
        <Container43 />
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-600" dir="auto">
        السعر
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[27.988px] left-[26.36px] top-0 w-[101.527px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0f4c5c] text-[20px] text-nowrap top-[-0.9px] whitespace-pre">2,800,000</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-0 top-[8.78px] w-[22.363px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        ر.س
      </p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[47.985px] relative shrink-0 w-[127.886px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.996px] h-[47.985px] items-start relative w-[127.886px]">
        <Paragraph29 />
        <Container47 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[51.175px] items-end justify-between left-[15.98px] top-[83.95px] w-[253.835px]" data-name="Container">
      <Container46 />
      <Container48 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[68.79px] size-[15.984px] top-[10.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.32993 7.99182H12.6537" id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p31551400} id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-white h-[35.998px] left-[15.98px] rounded-[16px] top-[147.11px] w-[253.835px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#0f4c5c] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[24px] left-[92.76px] not-italic text-[#0f4c5c] text-[16px] text-nowrap top-[4.1px] whitespace-pre" dir="auto">
        عرض التفاصيل
      </p>
      <Icon16 />
    </div>
  );
}

function FeaturedPropertyCard2() {
  return (
    <div className="absolute h-[199.092px] left-[1.1px] top-[217.08px] w-[285.802px]" data-name="FeaturedPropertyCard">
      <Heading9 />
      <Container42 />
      <Container49 />
      <Button4 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[191.992px] left-0 top-0 w-[285.802px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container50() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[191.992px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.1)] w-[285.802px]" data-name="Container" />;
}

function Icon17() {
  return (
    <div className="h-[15.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p2df19500} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col items-start left-[11.99px] pb-0 pt-[9.998px] px-[9.998px] rounded-[3.6829e+07px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] size-[35.98px] top-[11.99px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#d4af37] h-[26.188px] left-[11.99px] rounded-[3.6829e+07px] top-[153.82px] w-[49.34px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[49.34px]">
        <p className="font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f4c5c] text-[12px] text-nowrap whitespace-pre" dir="auto">
          مميز
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function FeaturedPropertyCard3() {
  return (
    <div className="absolute h-[191.992px] left-[1.1px] overflow-clip top-[1.1px] w-[285.802px]" data-name="FeaturedPropertyCard">
      <ImageWithFallback1 />
      <Container50 />
      <Button5 />
      <Badge7 />
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[417.272px] relative rounded-[24px] shrink-0 w-[287.997px]" data-name="Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[417.272px] overflow-clip relative rounded-[inherit] w-[287.997px]">
        <FeaturedPropertyCard2 />
        <FeaturedPropertyCard3 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[23.993px] left-[15.98px] overflow-clip top-[15.98px] w-[253.835px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0e1e25] text-[16px] text-nowrap top-[-1.9px] whitespace-pre" dir="auto">
        شقة فاخرة في وسط المدينة
      </p>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[90.654px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.001px] items-start overflow-clip relative rounded-[inherit] w-[90.654px]">
        <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
          الرياض، حي النخيل
        </p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[13.994px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_2039_710)" id="Icon">
          <path d={svgPaths.p1873da80} id="Vector" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16619" />
          <path d={svgPaths.p33dce740} id="Vector_2" stroke="var(--stroke-0, #D4AF37)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16619" />
        </g>
        <defs>
          <clipPath id="clip0_2039_710">
            <rect fill="white" height="13.9943" width="13.9943" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex gap-[3.996px] h-[16.001px] items-center left-[15.98px] pl-[145.19px] pr-0 py-0 top-[51.96px] w-[253.835px]" data-name="Container">
      <Text10 />
      <Icon18 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="absolute h-[25.587px] left-0 top-0 w-[31.59px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[16px] not-italic text-[#0e1e25] text-[16px] text-center text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre">180</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="absolute h-[25.587px] left-0 top-[25.59px] w-[31.59px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[25.6px] left-[15.87px] not-italic text-[16px] text-center text-gray-600 top-[-1.8px] tracking-[0.16px] translate-x-[-50%] w-[15px]" dir="auto">
        م²
      </p>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[31.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] relative w-[31.59px]">
        <Paragraph30 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(15,76,92,0.1)] h-[51.175px] relative shrink-0 w-[0.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] w-[0.995px]" />
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="absolute h-[25.587px] left-0 top-0 w-[29.618px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.6px] left-[15.04px] not-italic text-[#0e1e25] text-[16px] text-center text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre">3</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="absolute h-[25.587px] left-0 top-[25.59px] w-[29.618px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[25.6px] left-[15px] not-italic text-[16px] text-center text-gray-600 text-nowrap top-[-1.8px] tracking-[0.16px] translate-x-[-50%] whitespace-pre" dir="auto">
        غرف
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[29.618px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[51.175px] relative w-[29.618px]">
        <Paragraph32 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[51.175px] relative shrink-0 w-[86.178px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[11.988px] h-[51.175px] items-start relative w-[86.178px]">
        <Container52 />
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="content-stretch flex h-[16.001px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-gray-600" dir="auto">
        السعر
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[27.988px] left-[26.36px] top-0 w-[101.527px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[#0f4c5c] text-[20px] text-nowrap top-[-0.9px] whitespace-pre">1,250,000</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[16.001px] items-start left-0 top-[8.78px] w-[22.363px]" data-name="Text">
      <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre" dir="auto">
        ر.س
      </p>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[27.988px] relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[47.985px] relative shrink-0 w-[127.886px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[3.996px] h-[47.985px] items-start relative w-[127.886px]">
        <Paragraph34 />
        <Container56 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex h-[51.175px] items-end justify-between left-[15.98px] top-[83.95px] w-[253.835px]" data-name="Container">
      <Container55 />
      <Container57 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-[68.79px] size-[15.984px] top-[10.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.32993 7.99182H12.6537" id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          <path d={svgPaths.p31551400} id="Vector_2" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white h-[35.998px] left-[15.98px] rounded-[16px] top-[147.11px] w-[253.835px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#0f4c5c] border-[1.098px] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
      <p className="absolute font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[24px] left-[92.76px] not-italic text-[#0f4c5c] text-[16px] text-nowrap top-[4.1px] whitespace-pre" dir="auto">
        عرض التفاصيل
      </p>
      <Icon19 />
    </div>
  );
}

function FeaturedPropertyCard4() {
  return (
    <div className="absolute h-[199.092px] left-[1.1px] top-[217.08px] w-[285.802px]" data-name="FeaturedPropertyCard">
      <Heading10 />
      <Container51 />
      <Container58 />
      <Button6 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[191.992px] left-0 top-0 w-[285.802px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container59() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] h-[191.992px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.1)] w-[285.802px]" data-name="Container" />;
}

function Icon20() {
  return (
    <div className="h-[15.984px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[16.6%_8.33%_12.5%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13">
            <path d={svgPaths.p2df19500} id="Vector" stroke="var(--stroke-0, #0F4C5C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33197" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col items-start left-[11.99px] pb-0 pt-[9.998px] px-[9.998px] rounded-[3.6829e+07px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)] size-[35.98px] top-[11.99px]" data-name="Button">
      <Icon20 />
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#d4af37] h-[26.188px] left-[11.99px] rounded-[3.6829e+07px] top-[153.82px] w-[50.249px]" data-name="Badge">
      <div className="box-border content-stretch flex gap-[4px] h-[26.188px] items-center justify-center overflow-clip px-[13.098px] py-[5.098px] relative rounded-[inherit] w-[50.249px]">
        <p className="font-['Inter:Medium','Noto_Sans_Arabic:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#0f4c5c] text-[12px] text-nowrap whitespace-pre" dir="auto">
          جديد
        </p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)]" />
    </div>
  );
}

function FeaturedPropertyCard5() {
  return (
    <div className="absolute h-[191.992px] left-[1.1px] overflow-clip top-[1.1px] w-[285.802px]" data-name="FeaturedPropertyCard">
      <ImageWithFallback2 />
      <Container59 />
      <Button7 />
      <Badge8 />
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[417.272px] relative rounded-[24px] shrink-0 w-[287.997px]" data-name="Card">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[417.272px] overflow-clip relative rounded-[inherit] w-[287.997px]">
        <FeaturedPropertyCard4 />
        <FeaturedPropertyCard5 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(15,76,92,0.05)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute box-border content-stretch flex gap-[15.984px] h-[425.264px] items-start left-[-23.99px] overflow-clip pr-0 py-0 top-[63.99px] w-[423.669px]" data-name="Container">
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[489.25px] left-[-20px] top-[41px] w-[375.669px]" data-name="Container">
      <Container32 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[1149.5px] left-0 top-[256px] w-[376.473px]" data-name="Container">
      <Card />
      <Container24 />
      <Card3 />
      <Container61 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[219.998px] left-0 top-0 w-[376.473px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container63() {
  return <div className="absolute h-[219.998px] left-0 top-0 w-[376.473px]" data-name="Container" />;
}

function Container64() {
  return <div className="absolute bg-gradient-to-b from-[#0f4c5c] h-[219.998px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[376.473px]" data-name="Container" />;
}

function Container65() {
  return (
    <div className="absolute h-[219.998px] left-0 top-0 w-[376.473px]" data-name="Container">
      <ImageWithFallback3 />
      <Container63 />
      <Container64 />
    </div>
  );
}

function Container66() {
  return <div className="absolute bg-[rgba(212,175,55,0.2)] blur-3xl filter left-[210.84px] opacity-[0.503] rounded-[3.6829e+07px] size-[127.989px] top-[39.99px]" data-name="Container" />;
}

function Container67() {
  return <div className="absolute bg-[rgba(212,175,55,0.1)] blur-2xl filter left-[56.46px] opacity-[0.997] rounded-[3.6829e+07px] size-[95.988px] top-[79.99px]" data-name="Container" />;
}

function Container68() {
  return <div className="absolute bg-[rgba(255,255,255,0.05)] blur-3xl filter left-[141.19px] opacity-[0.503] rounded-[3.6829e+07px] size-[159.991px] top-[20.01px]" data-name="Container" />;
}

function Container69() {
  return (
    <div className="absolute left-[276.7px] rounded-[16px] size-[79.896px] top-[36.48px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(212,175,55,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute left-[31.02px] rounded-[3.6829e+07px] size-[49.916px] top-[97.64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[3.6829e+07px]" />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[11.1px] size-[19.997px] top-[11.1px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2039_813)" id="Icon">
          <path d={svgPaths.p1d71f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_2039_813">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[14.989px] relative shrink-0 w-[6.191px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.989px] relative w-[6.191px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-nowrap text-white top-[0.1px] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#d4af37] items-center justify-center left-[25.09px] pl-[0.017px] pr-0 py-0 rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)] size-[19.997px] to-[#b8941f] top-[-2.9px]" data-name="Text">
      <Text13 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] left-[44.15px] rounded-[16px] size-[42.189px] top-[-0.1px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon21 />
      <Text14 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[11.1px] size-[19.997px] top-[11.1px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2039_700)" id="Icon">
          <path d={svgPaths.p56aaf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p19276000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_2039_700">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[14.989px] relative shrink-0 w-[5.934px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[14.989px] relative w-[5.934px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[10px] text-nowrap text-white top-[0.1px] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex from-[#d4af37] items-center justify-center left-[25.09px] rounded-[3.6829e+07px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)] size-[19.997px] to-[#b8941f] top-[-2.9px]" data-name="Text">
      <Text15 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.15)] left-[-0.01px] rounded-[16px] size-[42.189px] top-[-0.1px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[1.098px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon22 />
      <Text16 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[36px] left-[0.01px] top-[2.01px] w-[89px]" data-name="Container">
      <Button8 />
      <Button9 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="absolute left-[82.34px] size-[18px] top-[6.02px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M15.75 15.75L12.495 12.495" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p126da180} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white h-[30px] left-[99.01px] rounded-[24px] top-[9.01px] w-[107px]">
      <Icon23 />
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[normal] left-[74.34px] not-italic text-[16px] text-[rgba(75,85,99,0.7)] text-nowrap text-right top-[5.02px] translate-x-[-100%] whitespace-pre" dir="auto">
        ابحث
      </p>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[19.98px] relative shrink-0 w-[55.154px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.98px] relative w-[55.154px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.1px] tracking-[-0.35px] whitespace-pre">QistTech</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[16.001px] relative shrink-0 w-[55.154px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.001px] items-start relative w-[55.154px]">
        <p className="font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#d4af37] text-[12px] text-nowrap whitespace-pre" dir="auto">
          قسط تك
        </p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[35.98px] relative shrink-0 w-[55.154px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[1.907e_-6px] h-[35.98px] items-start relative w-[55.154px]">
        <Text17 />
        <Text18 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[19.997px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_2039_693)" id="Icon">
          <path d="M8.33196 9.99835H11.6647" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d="M8.33196 6.66557H11.6647" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p32ba6880} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p1770c218} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
          <path d={svgPaths.p317353c0} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66639" />
        </g>
        <defs>
          <clipPath id="clip0_2039_693">
            <rect fill="white" height="19.9967" width="19.9967" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container73() {
  return (
    <div className="bg-gradient-to-b from-[#d4af37] relative rounded-[32px] shadow-[0px_0px_24px_0px_rgba(212,175,55,0.25)] shrink-0 size-[39.993px] to-[#b8941f]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[39.993px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex gap-[7.992px] h-[39.993px] items-center left-[225.35px] top-0 w-[103.139px]" data-name="Container">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[39.993px] relative shrink-0 w-[328.488px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.993px] relative w-[328.488px]">
        <Container71 />
        <Frame4 />
        <Container74 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[67px] left-[0.01px] top-[0.18px] w-[330px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Regular','Noto_Sans_Arabic:Regular',sans-serif] font-normal leading-[28px] left-1/2 not-italic text-[20px] text-center text-white top-[calc(50%-28.5px)] tracking-[-0.45px] translate-x-[-50%] w-[226px]" dir="auto">
        تواصل أسرع. تمويل أذكى. تجربة أسهل
      </p>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[67px] relative rounded-[16px] shrink-0 w-[328px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[67px] relative w-[328px]">
        <Heading11 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[219.998px] items-start left-0 pb-0 pl-[23.993px] pr-0 pt-[23.993px] top-0 w-[376.473px]" data-name="Container">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[219.998px] left-0 overflow-clip top-0 w-[376.473px]" data-name="Container">
      <Container65 />
      <Container66 />
      <Container67 />
      <Container68 />
      <Container69 />
      <Container70 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return <div className="absolute bg-[rgba(212,175,55,0.1)] blur-2xl filter left-[33.65px] rounded-[3.6829e+07px] size-[103.984px] top-[-8px]" data-name="Container" />;
}

function Container80() {
  return <div className="absolute bg-[rgba(15,76,92,0.1)] blur-xl filter left-[218.69px] rounded-[3.6829e+07px] size-[85.009px] top-[6.6px]" data-name="Container" />;
}

function Container81() {
  return <div className="absolute bg-[rgba(212,175,55,0.3)] left-[94.12px] opacity-[0.503] rounded-[3.6829e+07px] size-[7.992px] top-[80px]" data-name="Container" />;
}

function Container82() {
  return <div className="absolute bg-[rgba(15,76,92,0.2)] left-[125.48px] opacity-[0.792] rounded-[3.6829e+07px] size-[5.985px] top-[74.02px]" data-name="Container" />;
}

function Container83() {
  return <div className="absolute bg-[rgba(212,175,55,0.25)] left-[243px] opacity-[0.997] rounded-[3.6829e+07px] size-[7.992px] top-[76.01px]" data-name="Container" />;
}

function Container84() {
  return <div className="absolute bg-[rgba(15,76,92,0.3)] left-[276.37px] opacity-[0.708] rounded-[3.6829e+07px] size-[5.985px] top-[70.01px]" data-name="Container" />;
}

function Icon25() {
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

function Container85() {
  return (
    <div className="absolute h-[111.988px] left-0 overflow-clip top-[144.01px] w-[376.473px]" data-name="Container">
      <Container79 />
      <Container80 />
      <Container81 />
      <Container82 />
      <Container83 />
      <Container84 />
      <Icon25 />
    </div>
  );
}

function HomeScreen8() {
  return (
    <div className="bg-gray-50 h-[2041px] relative shrink-0 w-full" data-name="HomeScreen">
      <Container62 />
      <Container78 />
      <Container85 />
    </div>
  );
}

function AppCustomer() {
  return (
    <div className="absolute bg-gray-50 content-stretch flex flex-col h-[2043px] items-start left-0 top-0 w-[376px]" data-name="AppCustomer">
      <HomeScreen8 />
    </div>
  );
}

export default function QistTechCopy() {
  return (
    <div className="bg-[#f2f4f5] relative size-full" data-name="QistTech (قسط تك) (Copy)">
      <AppCustomer />
    </div>
  );
}