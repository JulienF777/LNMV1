@extends('layouts.app')

@section('css')
  <link href="/css/modify.css" rel="stylesheet">
@endsection

@section('content')
<div class="modifyacc">
    <a href="/createur/{{$id}}" class="lienretour">Retour</a>
    <form action='/modifyaccT' method='POST'>
        <input type="text" name='linkedin' placeholder="Lien vers votre compte linkedin">
        <input type="text" name='portfolio' placeholder="Lien vers votre portfolio">
        <input type="submit" value="Envoyer">
    </form>
</div>
@endsection
