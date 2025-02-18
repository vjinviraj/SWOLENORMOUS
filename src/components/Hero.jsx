import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Swole<span className='text-blue-400'>normous</span></h1>
            </div>
            <p className='text-sm md:text-base font-light '>I hereby acknowledge that I may experience <span className='text-blue-400 font-medium '>significant physical changes</span>  and accept all associated risks. I understand that these changes could impact my daily life and self-perception, and I am prepared to manage these <span className='text-blue-400 font-medium '>challenges</span> responsibly.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}