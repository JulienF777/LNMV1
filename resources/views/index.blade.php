@extends($layout)

@section('css')
<link rel="stylesheet" href="/css/styles.css">
@endsection

@section('content')
<script type='module'>
  let t = {!! $projets !!};
  localStorage.setItem('projets', JSON.stringify(t));
</script>
<div class="content" id="content">
<div class="intro" >
  
  <h1>IUT de Lens</h1>
    <h1>5 Janvier 2023</h1>
    
    
    <h2>La nuit MMI</h2>
    <p>Événement communautaire pour le BUT MMI de Lens</p>
    <h1>19h - 23h</h1>


    <img alt="lune" src="images/lune.png">

    <section class="buttons">
      <a href="/afficherqrcode" id="buttonresa">Je réserve mon billet</a>
    </section>
</div>

<!-- <div class="round">
  <img src="images/17.jpg">
</div> -->

<!-- concept -->
<div class="elements">
  <div class="toggle-overlay">
    <h2>Voir les projets</h2>
  </div>

<!-- programme -->
<div>
    <a href="/publish">
    <h2>Je présente mon projet</h2>
    </a>
  </div>

  </div>
  </div>



</div>
</div>
</div>

<!-- overlay -->
<div class="overlay"></div>

<!-- menu projets -->
<div class="project-menu">
  <!-- menu items -->
  <a href="#" class="menu-item">Web</a>
  <a href="#" class="menu-item">Vidéo</a>
  <a href="#" class="menu-item">Image</a>
  <a href="#" class="menu-item">Son</a>

  <!-- Create the "retour" menu item -->
  <a href="#" class="menu-item retour"><i class='bx bx-chevron-right'></i></a>
</div>

<div class="mentions">
  <a href="mentions">mentions légales</a>
</div>

<!-- projects ON-->
<div class="grid">
</div>

@endsection