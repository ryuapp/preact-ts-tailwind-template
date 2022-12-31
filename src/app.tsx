import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'

export function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="m-0 m-0 mt-20 max-w-7xl p-2 text-center">
            <div className="flex justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="h-32 p-2 transition hover:brightness-125" alt="Vite logo" />
                </a>
                <a href="https://preactjs.com" target="_blank">
                    <img src={preactLogo} class="h-32 p-2 transition hover:brightness-125" alt="Preact logo" />
                </a>
            </div>
            <h1 className="my-2 text-2xl">Vite + Preact</h1>
            <div className="p-2">
                <button
                    className="my-2 rounded-lg border bg-zinc-900 py-2 px-3 transition hover:bg-zinc-800"
                    onClick={() => setCount((count) => count + 1)}
                >
                    count is {count}
                </button>
                <p>
                    Edit <code>src/app.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="text-zinc-300">Click on the Vite and Preact logos to learn more</p>
        </div>
    )
}
