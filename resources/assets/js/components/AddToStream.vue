<template>
    <div class="message">
            <div class="message-header">
                Add message...
            </div>
            <div class="message-body">
                <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
                    <p class="control">
                        <textarea class="textarea" placeholder="Say something..." v-model="form.body"></textarea>
                        <span class="help is-danger" v-if="form.errors.has('body')">
                            {{ form.errors.get('body') }}
                        </span>
                    </p>
                    <br>
                    <p class="control">
                        <button class="button is-primary" :disabled="form.errors.any()">Submit</button>
                    </p>
                </form>
            </div>        
    </div>
</template>


<script>
import Form from '../utils/Form'
import Errors from '../utils/Errors'

export default {
    data() {
        return {
            form: new Form({'body': ''})
        }
    },
    methods: {
        onSubmit(){
            this.form.submit('post', '/statuses')
                .then(status => this.$emit('completed', status))
        }
    }
}
</script>

<style>


</style>