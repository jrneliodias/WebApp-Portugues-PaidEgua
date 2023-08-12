export function AcaiLayout({children,className =""}:any) {
    return <div className={`flex flex-col justify-end py-5  my-auto  mb-20 ${className}`}>
        {children}
    </div>;
};