<template>
    <div>
        <p>Feel free to drop me a line using the form below! I generally will reply within 2 business days. I look forward to connecting with you.</p>
        <form name="contactForm"
              novalidate
              v.on:submit="submit(validation)">
    
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
    
            <p v-bind:class="{ errorText: message != '' }"
               v-if="message != ''>{{message}}</p>
        
                <input type="hidden"
                       v-model="formData._subject"
                       name="_subject"
                       value="Contact - Kusha.Me" />
            </form>
        </div>
</template>

<script>
var message = '';
var formData = {};
var formDisabled = false;
module.exports = {
  data: function () {
    return {
      message: message,
      formData: formData,
      formDisaled: formDisabled,
      submit: function () {
        if (formData.validation.toLowerCase() !== 'blue') {
          message = 'Invalid answer to spam dectection message.'
        } else {
          var xhr = new XMLHttpRequest()
          var url = 'https://formspree.io/kushagharahi@gmail.com'
          var params = {
            Email: formData._replyto,
            Message: formData.body,
            Name: formData.fName + ' ' + formData.lName
          }
          xhr.open('POST', url, true)

                    // Send the proper header information along with the request
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

          xhr.send(params)
        }
      }
    }
  }
}
</script>

<style lang="sass">
</style>
