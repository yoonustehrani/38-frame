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
    <section 
        class="h-full w-full overflow-x-hidden overflow-y-auto bg-black/80 flex justify-center items-center" 
        id="react-auth"
        data-google-client-id="{{ config('services.google.client_id') }}"
    ></section>
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
    {{-- <script>
        function onNextButtonClicked() {
          google.accounts.id.cancel();
          showPasswordPage();
        }
    </script> --}}
    {{-- TODO --}}
    {{-- <script>
        function onSignout() {
          google.accounts.id.disableAutoSelect();
        }
    </script> --}}
    @viteReactRefresh
    @vite('resources/js/react-auth.tsx')
</body>
</html>
{{-- Referrer-Policy: no-referrer-when-downgrade. --}}