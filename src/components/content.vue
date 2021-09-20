<template>
    <div class="content">
        <div>
            <h2>Create Entry</h2>
            <button id="button" class="trigger"  v-on:click="openModal()">
                <span> Create </span>
            </button>        
        </div> 

        <input type="text" id="myInput" placeholder="Search ..." title="Type in a name" v-model="filterNames">
        <div>
            <select class="sortClass" id="sortBy">
                <option class="sort-option" selected value="name">Name</option>
                <option class="sort-option" value="birthday">Birthday</option>
            </select>
            <select class="sortClass" id="sortType">
                <option class="sort-option" selected value="asc">Asc</option>
                <option class="sort-option" value="desc">Desc</option>
            </select>           
            <div>
                <button id="button" class="sort">
                    <span> Sort </span>
                </button>
            </div>
        </div>

        <div style="overflow-x: auto;">
            <table id="myTable">
                <th id="tno">No.</th>
                <th id="tlname">Last Name</th>
                <th id="tfname">First Name</th>
                <th id="temail">Email</th>
                <th id="tgender">Gender</th>
                <th id="tbirthday">Birthday</th> 
                <th id="tphoto">Image</th>
                <th id="tdelete">DeleteItem</th>   
                <tbody id="employeesTableBody">
                    <tr v-for="input in inputs" :key="input.id">
                        <td>{{ input.id }}</td>
                        <td>{{ input.lastName }}</td>
                        <td>{{ input.firstName }}</td>
                        <td>{{ input.email }}</td>
                        <td>{{ input.gender }}</td>
                        <td>{{ dateMoment(input.birthday) }}</td>
                        <td>{{ input.image }}</td>
                        <td>
                            <div>
                            <input type="button" 
                            class="delete-button fa fa-remove" 
                            id="deleteButton" value="X" 
                            v-on:click="deleteEmployee(input.id)">
                            <img src="../assets/edit.png" 
                                width=30  style="padding-top: 25px"
                                v-on:click="openEditModal()"
                                v-if="input.id != 0"/>                          
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import axios from "axios";
import moment from 'moment';

export default {
    data () {
        return {
            inputs: [],
            filterNames: "",
            lastName: "",
            firstName: "",
            email: "",
            gender: "",
            birthday: "",
            image: "",
        };
    },
    methods: {
        openModal () {
            var modal = document.getElementById("modal");
            modal.style.display = "block";
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }, 
        openEditModal () {
            var modal = document.getElementById("modalEdit");
            modal.style.display = "block";
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            };
        }, 
        dateMoment (input) {
            var date = input.split("T");
            console.log(date[0]);
            date[0] = moment(date[0]).format('MMM DD YYYY');
            return date[0];
        },
        readData() {
            axios
            .get("https://localhost:44348/Employee/GetData")
            .then((response) => {
            this.inputs = response.data;
                console.log(this.inputs);
            });
        },
        updateClick(id) {
            axios
            .put(`https://localhost:44348/Employee/Edit?id=${id}`, 
            `firstName=${this.firstName}&lastName=${this.lastName}&email=${this.email}&gender=${this.gender}&birthday=${this.birthday}&image=${this.image}`
            )
            .then((response) => {
            console.log(response.data);
            location.reload();
            });
        },
        deleteEmployee(id) {
            if (!confirm("Are you sure ?")) {
                return;
            }
            console.log(id);
            axios.delete(`https://localhost:44348/Employee/Delete?id=${id}`);
            location.reload();
        }
    },
    mounted() {
        this.readData();
    }
}

</script>


<style scoped src="../styles/content.css"></style>