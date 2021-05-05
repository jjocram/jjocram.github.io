<template>
  <section class="hero is-dark">

    <div class="hero-body">
      <div class="columns is-vcentered">
        <div class="column is-narrow">
          <figure class="image is-128x128 ">
            <img class="is-rounded" src="@/assets/IMG_0132.png" alt="My dog, an irish terrier">
          </figure>
          <figure class="image is-128x128">
            <img class="is-rounded" src="@/assets/IMG_1871.png" alt="Me">
          </figure>
        </div>
        <div class="column is-narrow">
          <p class="title">Marco Ferrati</p>
          <p class="subtitle">Portfolio website</p>
        </div>
      </div>
    </div>

    <div class="hero-foot">
        <nav class="tabs is-centered">
          <div class="container">
            <ul>
              <li><a href="https://gitlab.com/jjocram" target="_blank">GitLab&ensp;<i class="fa fa-gitlab" aria-hidden="true"></i></a></li>
              <li><a href="https://github.com/jjocram" target="_blank">GitHub&ensp;<i class="fa fa-github" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/in/marco-ferrati-347346118/" target="_blank">LinkedIn&ensp;<i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/FerratiMarco" target="_blank">Twitter&ensp;<i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </nav>
      </div>

  </section>
</template>

<script>
export default {
  name: 'Header',
}
</script>
