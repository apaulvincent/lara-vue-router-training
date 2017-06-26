<template>
    <div class="container">
        <div class="columns">
            <div class="column">

                <div class="message" v-for="(status, index) in statuses" :key="index">
                    <div class="message-header">
                        <p>{{status.user.name}}</p>
                        <p>{{ status.created_at | ago | uppercase }}</p>
                    </div>

                    <div class="message-body">
                        <p class="is-pulled-left">
                        {{ status.body }}                            
                        </p>
                        <button @click="onDelete(status)" class="button is-warning is-pulled-right">Delete</button>
                        <div class="is-clearfix"></div>
                    </div>
                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>

            </div>
        </div>
    </div>
</template>

<script>

import moment from 'moment'
import AddToStream from '../components/AddToStream'
import Status from '../models/Status'

export default {
    data() {
        return {
            statuses: []            
        }
    },
    components: {
        AddToStream
    },
    filters: {
        ago(date) {
            return moment(date).fromNow();
        },
        uppercase(text) {
            return text.toUpperCase();
        }
    },
    methods: {
        postedOn (status) {
            return moment(status.created_at).fromNow();
        },
        addStatus (status) {
            console.log(status.data)
            this.statuses.unshift(status.data)
            window.scrollTo(0, 0)
        },
        onDelete (status) {
            Status.delete(status.id)
            const statusIndex = this.statuses.indexOf(status)
            this.statuses.splice(statusIndex, 1)
        }
    },
    created() {
        Status.all(statuses => this.statuses = statuses)
    }
}
</script>
