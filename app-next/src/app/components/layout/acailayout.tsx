export function AcaiLayout({children,className =""}:any) {
    return <div className={`flex flex-col place-self-end justify-end py-5 w-full my-auto  mb-20 ${className}`}>
        {children}
    </div>;
};