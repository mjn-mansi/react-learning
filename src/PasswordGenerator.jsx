import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charcterAllowed, setCharacterAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);


    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if (numberAllowed) str += "0123456789";
        if (charcterAllowed) str += "!@-_./*^";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charcterAllowed, setPassword]);


    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        // passwordRef.current?.setSelectionRange(0, 3)
        window.navigator.clipboard.writeText(password)
    }, [password]);


    useEffect(() => {
        generatePassword()
    }, [length, numberAllowed, charcterAllowed, setPassword]);

    return (
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800'>
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder='Password' readOnly ref={passwordRef} />
                <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
            </div>

            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} />
                    <label htmlFor="" className='text-white'>Length {length}</label>
                </div>

                <div className='flex items-center gap-x-1'>
                    <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'
                        onChange={() => {
                            setNumberAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="numberInput" className='text-white'>Allow number</label>
                </div>

                <div className='flex items-center gap-x-1'>
                    <input type="checkbox" defaultChecked={charcterAllowed} id='characterInput'
                        onChange={() => {
                            setCharacterAllowed((prev) => !prev)
                        }}
                    />
                    <label htmlFor="characterInput" className='text-white'>Allow character</label>
                </div>
            </div>
        </div>
    )
}

export default PasswordGenerator