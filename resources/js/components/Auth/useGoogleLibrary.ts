import { useEffect, useState } from "react";

export default function useGoogleLibrary(renderArea: HTMLDivElement | null, callback: ((response: google.accounts.id.CredentialResponse) => void)) {
    const [googleLibraryLoaded, setGoogleLibraryLoaded] = useState(false);
    const [googleAuthInitialized, setGoogleAuthInitialized] = useState(false);
    const src = "https://accounts.google.com/gsi/client?hl=fa"
    useEffect(() => {
        // Load the Google Library asynchronously
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.defer = true;
    
        script.onload = () => {
          setGoogleLibraryLoaded(true);
        };
    
        document.body.appendChild(script);
    
        return () => {
          // Cleanup if the component unmounts
          document.body.removeChild(script);
        };
    }, []);
    useEffect(() => {
        if (renderArea && googleAuthInitialized) {
            console.log(renderArea);
            google.accounts.id.renderButton(renderArea, {
                type: "standard",
                theme: "filled_black",
                size: "large",
                shape: "pill",
                text: "signup_with",
                locale: "fa"
            });
        }
    }, [renderArea, googleAuthInitialized])
    useEffect(() => {
        if (googleLibraryLoaded) {
            google.accounts.id.initialize({
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
                callback: callback,
                auto_select: true,
                context: "signin", // "signup" | "signin"
                itp_support: true
            });
            google.accounts.id.prompt(() => {
                setGoogleAuthInitialized(true)
            })
        }
    }, [googleLibraryLoaded]);

    return googleLibraryLoaded
}