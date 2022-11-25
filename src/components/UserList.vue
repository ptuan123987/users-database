<template>
    <div class="">
        <h2>User List</h2>
        <table v-if="loading == false" border="1" >
            <tr v-for="user in users" :key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
        </table>
        <div v-else>Loading...</div>
    <ul>
        <li v-for="page in 20" :key="page" @click="changePage(page)">{{page}}</li>
    </ul>    
    </div>
    
</template>
<script>
import { mapActions,mapState } from 'vuex';

    export default {
        
        mounted() {
            this.getUsers()
        },
        computed : {
            ...mapState(['users','loading','page'])
        },
        methods : {
            ...mapActions(['getUsers','changePage'])
        },
        // watch : khi nó thay đổi thì làm gì 
        watch : {
            page() {
                this.getUsers()
            }
        }
    }
</script>
<style scoped>
</style>