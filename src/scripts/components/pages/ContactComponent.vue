<template>
    <div class="shadow" style="padding: 2em">
        <p>Feel free to drop me a line using the form below! I generally will reply within 1 business day. I look forward to connecting with you.</p>
        <form name="contactForm"
              v-on:submit.prevent="submit()">
    
            <div class="form-group">
                <label for="fName">First Name:</label>
            </div>
    
            <div class="form-group">
                <input class="form-input"
                       v-model="formData.fName"
                       name="fName"
                       v-bind:disabled="formDisabled"
                       required>
            </div>
    
            <div class="form-group">
                <label for="lName">Last Name:</label>
            </div>
    
            <div class="form-group">
                <input class="form-input"
                       v-model="formData.lName"
                       name="lName"
                       v-bind:disabled="formDisabled"
                       required>
            </div>
    
            <div class="form-group">
                <label for="_replyto">Email:</label>
            </div>
    
            <div class="form-group">
                <input class="form-email"
                       v-model="formData._replyto"
                       type="email"
                       v-bind:disabled="formDisabled"
                       required
                       name="_replyto">
            </div>
    
            <div class="form-group">
                <label for="body">Message:</label>
            </div>
    
            <div class="form-group">
                <textarea name="body"
                          v-model="formData.body"
                          class="form-message"
                          v-bind:disabled="formDisabled"
                          required></textarea>
            </div>
    
            <div class="form-group">
                <label for="validation">What color is the sky on a clear day?</label>
            </div>
    
            <div class="form-group">
                <input class="form-input"
                       v-model="formData.validation"
                       name="validation"
                       v-bind:disabled="formDisabled"
                       required>
            </div>
    
            <div class="form-group">
                <input type="submit"
                       value="Send"
                       v-bind:disabled="formDisabled">
            </div>
    
            
            </form>
            <p v-bind:class="{errorText: error}">{{message}}</p>
        </div>
</template>

<script>
export default {
  data: () => {
    return {
      message: '',
      formData: {
        fName: '',
        lName: '',
        _replyto: '',
        body: '',
        validation: ''
      },
      formDisabled: false,
      error: false,
      submit: function () {
        if (this.formData.validation.toLowerCase() !== 'blue') {
          this.error = true
          this.message = 'Invalid answer to spam dectection message.'
        } else {
          this.message = ''
          this.error = false
          var url = 'https://formspree.io/kushagharahi@gmail.com'
          var params = {
            Email: this.formData._replyto,
            Message: this.formData.body,
            Name: this.formData.fName + ' ' + this.formData.lName
          }
          this.$http.post(url, params, { 'Access-Control-Allow-Origin': true }).then((success) => {
            this.message = 'Form submitted. I look forward to connecting with you!'
            this.formDisabled = true
          }, (err) => {
            this.error = true
            this.message = 'There was an error processing the form, please try again or contact the webmaster @ kushagharahi(dot)gmail.com. Error: '
            this.message += err
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
.form-group {
	padding: 5px;
}

.form-message {
	width:100%;
	height:200px;
}
.form-input {
	width:200px;
	height:20px;
}

.form-email {
	width:300px;
	height:20px;
}
</style>
