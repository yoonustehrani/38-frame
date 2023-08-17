<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ورود به حساب</title>
    <script src="https://accounts.google.com/gsi/client?hl=fa" async></script>
    @vite('resources/css/app.css')
</head>
<body class="overflow-hidden bg-shark bg-no-repeat bg-center bg-cover">
    <section class="h-full w-full overflow-x-hidden overflow-y-auto bg-black/80 flex justify-center items-center">
        <div class="bg-x-green/40 rounded-2xl w-11/12 md:w-1/2 xl:w-1/3 py-6 flex flex-col items-center gap-8 font-iran-sans px-4">
            <img width="100" src="/images/logo-300w.webp" alt="">
            {{-- <h1 class="text-center text-3xl font-bold">ورود به ۳۸ فریم</h1> --}}
            <div class="flex flex-col w-full lg:w-4/5 px-2 gap-2">
                <label for="email" class="text-white">ایمیل یا شماره تلفن :</label>
                <input id="email" class="text-left input bg-slate-50 hover:outline-none [direction:ltr] placeholder-shown:[direction:rtl] placeholder:text-right shadow-md w-full py-3 px-4" type="text" placeholder="ایمیل یا شماره تلفن خود را وارد کنید.">
                <button type="button" class="mt-2 py-2 bg-x-yellow text-xl rounded-lg flex justify-center gap-2">
                    <span>ادامه</span>
                    <svg height="30" viewBox="0 0 64 64" width="30" xmlns="http://www.w3.org/2000/svg">
                        <path d="m59.99 31.25h-51.58l8.78-8.78-1.42-1.41-11.19 11.19 11.19 11.19 1.42-1.41-8.78-8.78h51.58z"/>
                    </svg>
                </button>
            </div>
            <div class="w-full lg:w-4/5 flex flex-col justify-center items-center mt-3">
                <hr class="w-full border-gray-400/20">
                <span style="background: #34473A" class="-mt-3 block w-fit px-2 text-slate-50 text-sm rounded-full">و یا می توانید از گزینه های زیر استفاده کنید</span>
            </div>
            <div id="buttonDiv"></div> 
        </div>
    </section>
    <script>
        async function handleCredentialResponse(response) {
            let data = {
                token: response.credential
            }
            await fetch('http://localhost:8000/api/auth/google', {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: "follow", // manual, *follow, error
                referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            });
            // return response.json()
        }
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "{{ config('services.google.client_id') }}",
            callback: handleCredentialResponse,
            auto_select: true,
            context: "signin", // "signup" | "signin"
            itp_support: true
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { 
                theme: "filled_black",
                size: "large",
                shape: "pill",
                text: "signup_with",
                locale: "fa",
            }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
          document.getElementById('email').addEventListener('keyup', function() {
            google.accounts.id.cancel()
          });
        }
    </script>
    {{--
    <script>
        window.onGoogleLibraryLoad = () => {
         google.accounts.id.initialize({
           ...
         });
         google.accounts.id.prompt();
        };
    </script>
    --}}
    {{-- TODO --}}
    <script>
        function onNextButtonClicked() {
          google.accounts.id.cancel();
          showPasswordPage();
        }
    </script>
    {{-- TODO --}}
    <script>
        function onSignout() {
          google.accounts.id.disableAutoSelect();
        }
    </script>
</body>
</html>
{{-- Referrer-Policy: no-referrer-when-downgrade. --}}