<template>
  <div id="view-init">
    <Appbar v-if="!firstTime&&renderCards" />
    <Cards v-if="!firstTime&&renderCards" v-bind:users="users" v-on:openModal="openModal($event)" />
    <div id="noUsersView" v-if="!renderCards">No hay nadie registrado aun.</div>
    <FirstTime v-if="firstTime" />
    <Modal v-if="modalConfig.open" v-bind:user="modalConfig.user" v-on:closeModal="closeModal()" />
  </div>
</template>

<script>
import Cards from "./Cards";
import Appbar from "../../components/Appbar";
import FirstTime from "./FirstTime";
import Modal from "../../components/Modal";
export default {
  name: "Home",
  components: {
    Cards,
    Appbar,
    FirstTime,
    Modal
  },
  data() {
    return {
      firstTime: false,
      renderCards: true,
      modalConfig: {
        open: false,
        user: null
      },
      users: [
        {
          id: 1,
          firstName: "Mario",
          lastName: "Gonzales",
          course: "Backend",
          profile:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut neque. Tenetur dignissimos quisquam praesentium minima error, debitis consequatur! Velit facere id nisi repellat? Dolore nesciunt aut sit provident necessitatibus.",
          campus: "Sede San Juan de Miraflores",
          phone: "977456789",
          email: "mario@asd.com",
          profileUrl: "https://picsum.photos/100/100"
        },
        {
          id: 2,
          firstName: "Yuri",
          lastName: "Sacatoma",
          course: "FrontEnd",
          profile:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut neque. Tenetur dignissimos quisquam praesentium minima error, debitis consequatur! Velit facere id nisi repellat? Dolore nesciunt aut sit provident necessitatibus.",
          campus: "Sede San Juan de Miraflores",
          phone: "977456789",
          email: "yuri@asd.com",
          profileUrl: null
        },
        {
          id: 3,
          firstName: "Luis",
          lastName: "Fernandez",
          course: "Diseno UX",
          profile:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut neque. Tenetur dignissimos quisquam praesentium minima error, debitis consequatur! Velit facere id nisi repellat? Dolore nesciunt aut sit provident necessitatibus.",
          campus: "Sede San Juan de Miraflores",
          phone: "977456789",
          email: "luis@asd.com",
          profileUrl: null
        },
        {
          id: 4,
          firstName: "Camila",
          lastName: "Cordoba",
          course: "Desarrollo de apps",
          profile:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut neque. Tenetur dignissimos quisquam praesentium minima error, debitis consequatur! Velit facere id nisi repellat? Dolore nesciunt aut sit provident necessitatibus.",
          campus: "Sede San Juan de Miraflores",
          phone: "977456789",
          email: "camila@asd.com",
          profileUrl: "https://picsum.photos/100/100"
        },
        {
          id: 5,
          firstName: "Franco",
          lastName: "Ponce",
          course: "Desarrollo de Videojuegos en Unity",
          profile:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut neque. Tenetur dignissimos quisquam praesentium minima error, debitis consequatur! Velit facere id nisi repellat? Dolore nesciunt aut sit provident necessitatibus.",
          campus: "Sede San Juan de Miraflores",
          phone: "977456789",
          email: "franco@asd.com",
          profileUrl: null
        },
        {
          id: 6,
          firstName: "Gabriela",
          lastName: "Vela",
          course: "BackEnd",
          profile:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut neque. Tenetur dignissimos quisquam praesentium minima error, debitis consequatur! Velit facere id nisi repellat? Dolore nesciunt aut sit provident necessitatibus.",
          campus: "Sede San Juan de Miraflores",
          phone: "977456789",
          email: "gabriela@asd.com",
          profileUrl: null
        }
      ]
    };
  },
  methods: {
    openModal(id) {
      this.modalConfig = {
        open: true,
        user: this.users.filter(user => user.id === id)[0]
      };
    },
    closeModal() {
      this.modalConfig = { open: false, user: null };
    }
  }
};
</script>

<style lang="scss" scoped>
#view-init {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > :nth-child(1) {
    margin-bottom: 40px;
  }

  #noUsersView {
    text-align: center;
    font-family: Poppins;
    font-weight: bold;
    font-size: 20px;
    color: #bab8cc;
    @media (min-width: 600px) {
      font-size: 40px;
    }
  }
}
</style>
