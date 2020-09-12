<template>
  <div>
    <div class="navMobileBG">
      <router-link
        style="width:85%"
        to="/"
        class="navMobileTitle"
      >
        {{ mobilePageTitle }}
      </router-link>
    </div>
    <input
      v-model="mobileMenu"
      class="navMenu"
      type="checkbox"
    >
    <label for="navMenu" />
    <ul class="nav">
      <li>
        <router-link
          class="navTitle"
          to="/"
        >
          kusha.me
        </router-link>
      </li>
      <li>
        <router-link
          class="navLink"
          active-class="active"
          to="/"
          exact
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link
          class="navLink"
          active-class="active"
          to="/blog"
        >
          Blog
        </router-link>
      </li>
      <li>
        <router-link
          class="navLink"
          active-class="active"
          to="/projects"
        >
          Projects
        </router-link>
      </li>
      <li>
        <router-link
          class="navLink"
          active-class="active"
          to="/resume"
        >
          Resume
        </router-link>
      </li>
      <li>
        <router-link
          class="navLink"
          active-class="active"
          to="/contact"
        >
          Contact
        </router-link>
      </li>
      <li>
        <social-icon
          name="github"
          class="socialIcon"
          link="http://github.com/kushagharahi"
          target="_blank"
        />
      </li>
      <li>
        <social-icon
          name="twitter"
          class="socialIcon"
          link="http://twitter.com/KKUUSSHHAA"
          target="_blank"
        />
      </li>
      <li>
        <social-icon
          name="linkedin"
          class="socialIcon"
          link="http://linkedin.com/in/kushagharahi"
          target="_blank "
        />
      </li>
    </ul>
  </div>
</template>


<script>
import SocialIcon from './SocialIconComponent.vue'
export default {
  components: {
    SocialIcon
  },
  data: () => {
    return {
      mobilePageTitle: '',
      mobileMenu: false
    }
  },
  watch: {
    '$route' (to, from) {
      this.mobilePageTitle = document.title
      if (this.mobileMenu) {
        this.mobileMenu = !this.mobileMenu
      }
    }
  }
}
</script>

<style lang="scss">
@import '~res/style/scss/_vars.scss';

.nav, .navMobileBG {
  background-color: $primary-color;
  position: fixed;
  top: 0;
  width: 100%;    
  overflow: hidden;
  margin: 0;
  padding: 0; 
}

.nav {
  list-style: none;
}

.navMobileBG {
  height: 40px;
  margin-bottom:0px;
  text-align: center;
  display: none;
}

.navTitle, .navLink {
  float: left;
  display: block;
  color: $nav-text-color;
  text-decoration:none;
    &:hover {
      text-decoration: none;
    }
}

.navTitle {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 20px;
}

.navMobileTitle {
  margin: 5px;
  font-size: 20px;
  text-decoration:none;
  display: none;
  color: white;
}

.navLink {
  padding: 10px;
  &:hover {
    background-color: #111;
  }
  &.active {
    background-color: $secondary-color;
  }
}

.socialIcon {
  float: right;
  padding: 5px;
}

.socialIcon > img {
  height: 24px;
  width: 24px;
}

.navMenu[type="checkbox"], .navMenu[type=checkbox] + label  {
  height: 20px;
  width: 20px;
  margin: 10px;
  position: fixed;
  top: 0;
  left: 0;
}
.navMenu[type=checkbox] + label {
  z-index: 0;
}

.navMenu[type="checkbox"] {
  z-index: 1;
  opacity: 0;
}

.navMenu[type=checkbox] + label {
  background: url('~res/img/menu.svg');
  background-size:100%;
  display: none;
}
.navMenu[type=checkbox]:checked + label {
  background: url('~res/img/close.svg');
  background-size:100%;
}

.navMenu[type=checkbox]:checked + label + .nav{
  display: block;
}

@media screen and (max-width : $mobileMaxWidth) {
  .navMobileBG, .navMobileTitle, .navMenu[type=checkbox] + label {
    display: inline-block;
  }

  .nav, .navTitle {
    display: none;
  }

  .nav {
    border-bottom: 1px solid rgba(0,0,0,0.15);
    box-shadow: 0 8px 10px rgba(0,0,0,0.15);
    top: 40px;
  }

  .navLink, .socialIcon {
    float: none;
  }

  .socialIcon {
    padding: 0px;
  }

  .socialIcon {
    display: block;
    padding: 5px;
  }

  .socialIcon > img {
    padding-left: 5px;
  }
}

</style>
