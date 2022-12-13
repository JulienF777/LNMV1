@extends('layouts.app')

@section('css')
  <link href="/css/publish.css" rel="stylesheet">
@endsection

@section('content')
  <div class="publish">
  <h3>Envie de faire partie de La Nuit MMI ?</h3>
  <span class="callToAction">Partagez Votre Projet</span>
  
  <form action='/publishT' method='POST' enctype="multipart/form-data">
    <input type='text' name='nom' placeholder='Nom de votre Projet' class="champsform">
    @csrf
    <label class="file"><i class='bx bx-upload'></i>Charger une image<input type="file" id="file" name="img" accept="image/*"></label>
    <input class="champsform" type='number' name='anneeReal' placeholder='Année de Réalisation de votre Projet' min="1990" max="2023" >
    <input class="champsform" type='text' name='lien' placeholder='Lien vers votre projet ou réseaux' required>
    <select name="genre" class="select" required>
      <option value="-1">--Le genre de votre projet--</option>
      <option value="web">Web</option>
      <option value="videos">Videos</option>
      <option value="images">Images</option>
    </select>
    <label class="anonyme" for="anonyme"><input type="checkbox" id="anonyme" name="anonyme" value="anonyme"> Poster anonymement</label>
    <input type='submit' name='publish' value='Publier'>
  </form>
  </div>
@endsection