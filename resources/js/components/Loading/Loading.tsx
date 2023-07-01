import { ReactNode, Suspense } from "react";

function Loading({children}: {children: ReactNode}) {
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            {children}
        </Suspense>
    );
}

export default Loading;