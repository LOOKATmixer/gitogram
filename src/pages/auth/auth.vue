<template>
  <div class="auth">
    <div class="g-container">
      <icon class="logo" name="logo"/>
      <p class="auth__description">
        More than just one repository.
        <br>
        This is our digital world.
      </p>
      <Button class="auth__button" @click="getCode">
        <div>Authorize with github</div>
        <icon class="mark" name="logoGithub"/>
      </Button>
      <img src="../../assets/mac.png" alt="Device" class="auth__image">
    </div>
    <div class="auth__footer">
      &copy; Gitogram from Loftschool
    </div>
  </div>
</template>

<script>
import icon from '../../icons/icon'
import Button from '../../components/button/button'
import env from '../../../env'

export default {
  name: 'Auth',
  components: {
    icon,
    Button
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status public_repo read:user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('https://webdev-api.loftschool.com/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code: code,
            clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json()
        localStorage.setItem('token', token)
        await this.$router.replace({ name: 'Main' })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style src="./auth.scss" lang="scss" scoped></style>
