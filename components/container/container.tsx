'use client'
interface ContainerProps {
    children: React.ReactNode
}

const Container = ({
    children
}:ContainerProps) => {
    return ( 
        <div className="h-full w-full max-w-7xl px-4 md:px-20">
            {children}
        </div>
     );
}
 
export default Container;