<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="mostrarInformacion d-none btn masInfo btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Launch demo modal
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Información</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Bienvenido a nuestro stand, aqui mismo encontrarás nuestra
            información de contacto, así como la opción de enviar tu curriculum
            a alguna de las vacantes que tenemos disponibles, si necesitas
            interaBienvenido a nuestro stand, aqui mismo encontrarás nuestra
            información de contacto, así como la opción de enviar tu curriculum
            a alguna de las vacantes que tenemos disponibles, si necesitas
            intera......
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal del video -->
    <div class="row">
      <div class="col-lg-12 col-md-12 mb-4">
        <div class="modal fade" id="modal1" tabindex="-1" role="dialog">
          <div
            class="modal-dialog modal-dialog-centered modal-lg"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-body mb-0 p-0">
                <div
                  class="embed-responsive embed-responsive-16by9 z-depth-1-half"
                >
                  <iframe
                    class="embed-responsive-item"
                    src="https://www.youtube.com/embed/n-dcRhS0B78"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="d-none activadorVideo z-depth-1"
          data-toggle="modal"
          data-target="#modal1"
        ></button>
      </div>
    </div>

    <a-scene
      class="escena"
      inspector="https://cdn.jsdelivr.net/gh/aframevr/aframe-inspector@master/dist/aframe-inspector.min.js"
      cursor="rayOrigin: mouse"
    >
      <a-assets>
        <img
          v-for="cielo in cielos"
          :key="cielo"
          :src="require(`@/assets/${cielo}`)"
          :id="cielo"
          alt=""
        />
        <img src="../assets/arrow.png" id="flecha" alt="" />
        <img src="../assets/youtube.png" id="youtubeLogo" alt="" />
        <img src="../assets/info.png" id="info" alt="" />
        
      </a-assets>

      <a-sky :src="`#${cielo}`" radius="20"></a-sky>

      <!-- Navegación -->
      <!--<a-entity
        geometry="primitive: plane; height: 1; width: 1"
        material="shader: flat; src: #flecha; transparent: true"
        v-for="(navegador, index) in navegadores"
        :key="index"
        :position="navegador.posicion"
        v-on:click="$emit('cambiar', navegador.hacia)"
        :id="navegador.hacia"
        class="link"
        event-set__mouseenter="scale: 1.2 1.2 1"
        event-set__mouseleave="scale: 1 1 1"
        rotation="270 180 0"
      >
      </a-entity>-->

      <!-- Iconos interactivos-->
      <a-entity
        v-if="video"
        v-on:click="mostrarVideo"
        :position="video.posicion"
        id="video"
        class="link"
        geometry="primitive: plane; height: 1; width: 1"
        event-set__mouseenter="scale: 1.2 1.2 1"
        event-set__mouseleave="scale: 1 1 1"
        material="shader: flat; src: #youtubeLogo; transparent: true"
        rotation="-27 70 0"
      >
      </a-entity>
      <a-entity
        v-if="informacion"
        v-on:click="mostrarInformacion"
        :position="informacion.posicion"
        id="informacion"
        class="link"
        geometry="primitive: plane; height: 1; width: 1"
        event-set__mouseenter="scale: 1.2 1.2 1"
        event-set__mouseleave="scale: 1 1 1"
        material="shader: flat; src: #info; transparent: true"
        rotation="-27 107 5"
      >
      </a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  props: ["informacion", "cielo", "navegadores", "botones", "cielos", "video"],
  name: "Escena",
  methods: {
    mostrarVideo: function () {
      let activadorVideo = document.querySelector(".activadorVideo");
      activadorVideo.click();
    },
    mostrarInformacion: function () {
      let mostrarInformacion = document.querySelector(".mostrarInformacion");
      mostrarInformacion.click();
    },
  },
  updated() {},
  mounted() {},
};
</script>

<style>

</style>
