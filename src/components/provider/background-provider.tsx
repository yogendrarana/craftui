import React from 'react'

const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            className="absolute h-[100vh] w-full inset-0 -z-100
            bg-white 
            bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
            bg-[size:30px_50px] 
            dark:bg-neutral-900"
        >
            {children}
        </div>

    )
}

export default BackgroundProvider;