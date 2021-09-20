<template>

    <div id="modal" class="mymodal">
        <div class="modal-content">
            <span class="close-button" v-on:click="closeModal()">&times;</span>
            <h1>Hello, Add a new entry in the table!</h1>
            <div action="/action_page.php">
                <input type="text" id="lname" name="lastname" v-model="lastName" placeholder="Your last name.."/>
                <input type="text" id="fname" name="firstname" v-model="firstName" placeholder="Your name.."/>                                
                <input type="text" id="email" name="email" v-model="email" placeholder="Your email.."/>  

                <label for="Gender">Gender</label>            
                <select id="gender" name="gender" v-model="gender">
                    <option value="male">male</option>
                    <option value="female">female</option> 
                </select>
            
                <label for="birthday">Birthday</label>            
                <input type="date" id="birthday" name="birthday" v-model="birthday" max="2005-12-31"/>
            
                <label for="photo">Add Photo</label>
                <input type="file" id="file-id" name="file_name">
                
                <input type="submit" id="add-employee-button" value="Submit" @click="addEmployeeMember">
            </div>
        </div>
    </div>
</template>

<style scoped src="../styles/modal.css"></style>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
    data () {
        return {
            lastName: "",
            firstName: "",
            email: "",
            gender: "",
            birthday: "",
            image: "",
        };
    },
    methods: {
        moment: moment,
        closeModal () {
            var modal = document.getElementById("modal");
            modal.style.display = "none";
        },
        addEmployeeMember() {
             this.birthday = moment(this.birthday);
            
            if (this.lastName === "") {
                alert("Enter Last Name");
                return false;
            }
            if (this.firstName === "") {
                alert("Enter First Name");
                return false;
            }
            if (this.email === "") {
                alert("Enter Email");
                return false;
            }
            if (this.gender === "") {
                alert("Enter Gender");
                return false;
            }
            if (this.birthday === "") {
                alert("Enter Birthday");
                return false;
            }
            axios.post(
                "https://localhost:44348/Employee/CreateEmployee",
                `firstName=${this.firstName}&lastName=${this.lastName}&email=${this.email}&gender=${this.gender}&birthday=${this.birthday}&image=${this.image}`
                ).then(res => {
                console.log(res);
                location.reload();
            });
        }
    }
}

</script>
