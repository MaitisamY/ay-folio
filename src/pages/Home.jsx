/* eslint-disable react/no-unknown-property */
import { lazy, Suspense } from 'react'
const Header = lazy(() => import('../partials/Header'))
const Main = lazy(() => import('../partials/Main'))

export default function Home() {
    return (
        <Suspense 
            fallback={
                <div className="loading-screen">
                    <div className="loader"></div>
                </div>
            }
        >
        <Header />
        <Main>
            
        </Main>
        </Suspense>
    )
}