<!DOCTYPE html>
<html lang="en" dir="ltr">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>LaravelBoilerplate</title>
        @include('shared._head_scripts')

    </head>

    <body>
        <div id="app">

            @include('shared._navbar')

            @yield('content')

            @include('shared._flashes')
        </div>
        @include('shared._bottom_scripts')
    </body>

</html>
