import { Suspense } from "react";

function Loading({children}) {
    return (
        <Suspense fallback={<p>Loading ...</p>}>
            {children}
        </Suspense>
    );
}

export default Loading;