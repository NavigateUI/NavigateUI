'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const codestr = `
export const Progress4 = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500); // Set the delay to adjust the animation
    }, []);
    const ProgressNumber = 80; // adjust the number to increase the progress number
    return (
    <div className="flex w-[300px] flex-col  gap-2">
        <div className={\`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300\`}>
            <div style={{ width: \`\${loaded ? ProgressNumber : '0'}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500\`}></div>
        </div>
        <span style={{ marginLeft: \`\${ProgressNumber - 7}%\` }} className="flex text-lg font-medium  text-sky-500">{ProgressNumber}% </span>
    </div>
    );
};
`;

const Progress4 = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500); // Set the delay to adjust the animation
    }, []);
    const ProgressNumber = 80; // adjust the number to increase the progress number
    return (
        <CodeBox codeStr={codestr}>
            <div className="flex w-[300px] flex-col mx-auto gap-2">
                <div className={`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300`}>
                    <div style={{ width: `${loaded ? ProgressNumber : '0'}%` }} className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500`}></div>
                </div>
                <span style={{ marginLeft: `${ProgressNumber - 7}%` }} className="flex text-lg font-medium  text-sky-500">
                    {ProgressNumber}%
                </span>
            </div>
        </CodeBox>
    );
};

export default Progress4;
