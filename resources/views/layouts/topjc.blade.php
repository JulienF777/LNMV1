<!DOCTYPE html>
<html>
<head>
    <title>La nuit MMI</title>
    <meta charset="UTF-8">
    <link href="css/normalize.css" rel="stylesheet" type="text/css"/>
    <link href="css/styles.css" rel="stylesheet" type="text/css"/>
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&family=Dosis:wght@200;300;400;500&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">
    @section('css')

    @show
</head>

<body>

@section('topMenu')
  @include('layouts.topMenu')
@show

  <section class="content">
    @yield('content')
  </section>

</body>
<script src="../menu.js"></script>
<script src="../rounds.js" type='module'></script>
<!-- <script src="../main.js"></script>  old thing-->
</html>
