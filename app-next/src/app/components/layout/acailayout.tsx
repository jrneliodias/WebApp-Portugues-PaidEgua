export function AcaiLayout({children,className =""}:any) {
    return <div className={`flex flex-col place-self-end justify-end py-5 h-full mb-20 ${className}`}>
        {children}
    </div>;
};