<template>
  <div
    class="shadow"
    style="padding: 2em"
  >
    <p>Feel free to drop me a line using the form below! I generally will reply within 1 business day. I look forward to connecting with you.</p>
    <form
      name="contactForm"
      @submit.prevent="submit()"
    >
      <div class="form-group">
        <label for="fName">First Name:</label>
      </div>
    
      <div class="form-group">
        <input
          v-model="formData.fName"
          class="form-input"
          id="fName"
          name="fName"
          :disabled="formDisabled"
          required
        >
      </div>
    
      <div class="form-group">
        <label for="lName">Last Name:</label>
      </div>
    
      <div class="form-group">
        <input
          v-model="formData.lName"
          class="form-input"
          id="lName"
          name="lName"
          :disabled="formDisabled"
          required
        >
      </div>
    
      <div class="form-group">
        <label for="_replyto">Email:</label>
      </div>
    
      <div class="form-group">
        <input
          v-model="formData._replyto"
          class="form-email"
          type="email"
          :disabled="formDisabled"
          required
          id="_replyto"
          name="_replyto"
        >
      </div>
    
      <div class="form-group">
        <label for="body">Message:</label>
      </div>
    
      <div class="form-group">
        <textarea
          v-model="formData.body"
          id="body"
          name="body"
          class="form-message"
          :disabled="formDisabled"
          required
        />
      </div>
    
      <div class="form-group">
        <label for="validation">What color is the sky on a clear day?</label>
      </div>
    
      <div class="form-group">
        <input
          v-model="formData.validation"
          class="form-input"
          id="validation"
          name="validation"
          :disabled="formDisabled"
          required
        >
      </div>
    
      <div class="form-group">
        <input
          type="submit"
          value="Send"
          :disabled="formDisabled"
        >
      </div>
    </form>
    <p :class="{errorText: error}">
      {{ message }}
    </p>
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
          const url = 'https://submit-form.com/bec5c59a-c529-4097-b121-5059403ada83'
          let body = {
            Email:    this.formData._replyto,
            Message:  this.formData.body,
            Name:     this.formData.fName + ' ' + this.formData.lName,
           _redirect: false
          }
          let requestOptions = {
            body: JSON.stringify(body),
            headers: {
              'Access-Control-Allow-Origin': '*', 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            method: "POST"
          }
          fetch(url, requestOptions).then((data) => {
            this.message = 'Form submitted. I look forward to connecting with you!'
            this.formDisabled = true
          }).catch((err) => {
            this.error = true
            this.message = 'There was an error processing the form, please try again or contact the webmaster @ contact(dot)gharahi[dot]c0m.'
            console.log(err)
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
	width:200px;
	height:20px;
}
</style>
