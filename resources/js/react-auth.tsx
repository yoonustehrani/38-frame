import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Auth from './components/Auth'

interface AuthPageWindow extends Window {
    onGoogleLibraryLoad: any;
}
declare let window: AuthPageWindow;

const authElement = document.getElementById('react-auth')

if(authElement) {
    let runCount = 0
    const reactRoot = createRoot(authElement)
    const GOOGLE_CLIENT_ID = authElement.getAttribute('data-google-client-id') ?? ''
    type handleFunction = (response: google.accounts.id.CredentialResponse) => void
    function GetGoogleLibrary(handleCredentialResponse?: handleFunction) {
        return {
            run: () => new Promise<typeof google.accounts.id>((resolve, reject) => {
                if (runCount != 0) reject('Cannot call for run more than once')
                window.onGoogleLibraryLoad = function () {
                    google.accounts.id.initialize({
                        client_id: GOOGLE_CLIENT_ID,
                        callback: async function handleCredentialResponse(response: google.accounts.id.CredentialResponse) {
                            let data = {
                                token: response.credential
                            }
                            await fetch('http://localhost:8000/api/auth/google', {
                                method: "POST",
                                mode: "cors",
                                cache: "no-cache",
                                credentials: "same-origin",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                redirect: "follow",
                                referrerPolicy: "no-referrer",
                                body: JSON.stringify(data),
                            });
                        },
                        auto_select: true,
                        context: "signin", // "signup" | "signin"
                        itp_support: true
                    });
                    google.accounts.id.prompt()
                    resolve(google.accounts.id)
                }
            })
        }
    }
    reactRoot.render(
        <StrictMode>
            <Auth GetGoogleLibrary={GetGoogleLibrary}/>
        </StrictMode>
    )
}