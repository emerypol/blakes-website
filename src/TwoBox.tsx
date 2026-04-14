import type { ReactNode } from 'react';
import './TwoBox.css'

const breakpoints = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
type Breakpoint = typeof breakpoints[number];

const rowAtClass: Record<Breakpoint, string> = {
    xs: "xs:flex-row",
    sm: "sm:flex-row",
    md: "md:flex-row",
    lg: "lg:flex-row",
    xl: "xl:flex-row",
    xxl: "xxl:flex-row",
};


const box1OrderClass = {
    xs: "order-2 xs:order-1",
    sm: "order-2 sm:order-1",
    md: "order-2 md:order-1",
    lg: "order-2 lg:order-1",
    xl: "order-2 xl:order-1",
    xxl: "order-2 xxl:order-1",
} as const;

const box2OrderClass = {
    xs: "order-1 xs:order-2",
    sm: "order-1 sm:order-2",
    md: "order-1 md:order-2",
    lg: "order-1 lg:order-2",
    xl: "order-1 xl:order-2",
    xxl: "order-1 xxl:order-2",
} as const;



const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
};


type TwoBoxProps = {
    rowBreakpoint?: Breakpoint;
    box1?: ReactNode;
    box2?: ReactNode;
    box1GoesTop?: boolean;
    color?: string;
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
};


function TwoBox({
    rowBreakpoint = "md",
    box1,
    box2,
    box1GoesTop = true,
    color = "rgb(37, 99, 235)",
    rounded = "sm",
}: TwoBoxProps) {

    const box1Order = box1GoesTop ? "" : box1OrderClass[rowBreakpoint];
    const box2Order = box1GoesTop ? "" : box2OrderClass[rowBreakpoint];

    return (
        <div className={`w-full flex justify-center items-center ${roundedClasses[rounded]}`} style={{ backgroundColor: color }}>
            <div className='container '>
                <div className={`flex flex-col ${rowAtClass[rowBreakpoint]} justify-center items-center `}>
                    <div className={`flex-1 box1  ${box1Order}`}>
                        {box1}
                    </div>
                    <div className={`flex-1 box2 ${box2Order} `}>
                        {box2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoBox;


/*
At West Coast Irrigation Services, irrigation isn't just what we do—it’s who we are. Our owner, Blake, has been immersed in the industry since birth. Growing up in a family of irrigation professionals, he learned the trade at the side of his grandfather, father, uncles, and cousins. This multi-generational expertise means that when we step onto your property, we bring decades of passed-down knowledge, refined techniques, and a deep-rooted commitment to quality.

*/