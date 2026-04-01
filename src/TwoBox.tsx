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

const xSpaceAtClass: Record<Breakpoint, string> = {
    xs: "xs:px-4",
    sm: "sm:px-4",
    md: "md:px-4",
    lg: "lg:px-4",
    xl: "xl:px-4",
    xxl: "xxl:px-4",
};

const ySpaceAtClass: Record<Breakpoint, string> = {
    xs: "xs:py-0",
    sm: "sm:py-0",
    md: "md:py-0",
    lg: "lg:py-0",
    xl: "xl:py-0",
    xxl: "xxl:py-0",
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


type TwoBoxProps = {
    rowBreakpoint?: Breakpoint;
    box1?: ReactNode;
    box2?: ReactNode;
    box1GoesTop?: boolean;
};


function TwoBox({
    rowBreakpoint = "md",
    box1,
    box2,
    box1GoesTop = true,
}: TwoBoxProps) {

    const box1Order = box1GoesTop ? "" : box1OrderClass[rowBreakpoint];
    const box2Order = box1GoesTop ? "" : box2OrderClass[rowBreakpoint];

    return (
        <div className='w-full flex justify-center items-center bg-blue-600 py-14 '>
            <div className='container px-4'>
                <div className={`flex flex-col ${rowAtClass[rowBreakpoint]} justify-center items-center `}>
                    <div className={`box1 px-0 ${xSpaceAtClass[rowBreakpoint]} ${box1Order}`}>
                        {box1}
                    </div>
                    <div className={`box2 py-4 ${ySpaceAtClass[rowBreakpoint]} px-0 ${xSpaceAtClass[rowBreakpoint]}
                         ${box2Order} `}>
                        {box2}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoBox;
