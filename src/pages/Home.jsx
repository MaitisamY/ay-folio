import { lazy, Suspense } from 'react'
const Header = lazy(() => import('../partials/Header'))

export default function Home() {
    return (
        <Suspense 
            fallback={
                <div class="loading-screen">
                    <div class="loader"></div>
                </div>
            }
        >
        <Header />
        </Suspense>
    )
}