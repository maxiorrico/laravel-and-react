<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title> Test React</title>
    <link rel="stylesheet" href="{{ url("/css/app.css")}}">
</head>
<body>

    <div id="example">
        Hola React !!
    </div>

    <script src="{{ url("/js/app.js")}}"></script>
</body>
</html>