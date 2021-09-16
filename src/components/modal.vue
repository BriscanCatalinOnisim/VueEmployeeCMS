<template>

    <div id="modal" class="modal">
        <div class="modal-content">
            <span class="close-button" v-on:click="closeModal()">&times;</span>
            <h1>Hello, Add a new entry in the table!</h1>
            <div action="/action_page.php">

                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>                                
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                <input type="text" id="email" name="email" placeholder="Your email.."/>  

                <label for="Gender">Gender</label>            
                <select id="gender" name="gender">
                    <option value="male">male</option>
                    <option value="female">female</option> 
                </select>
            
                <label for="birthday">Birthday</label>            
                <input type="date" id="birthday" name="birthday" max="2005-12-31"/>
            
                <label for="photo">Add Photo</label>
                <input type="file" id="file-id" name="file_name">
                
                <input type="submit" id="add-employee-button" value="Submit">
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    methods: {
        closeModal () {
            var modal = document.getElementById("modal");
            modal.style.display = "none";
        },
        getData() {
            axios
            .get("https://localhost:44364/Home/GetTeam")
            .then(function(response) {
            return response.data.memberList;
            })
            .catch(function(error) {
            console.log(error);
            })
            .then(function(data) {
            for (var i = 0; i < data.length; i++) {
                console.log(data);
                var lastName = data[i].lastName;
                var firstName = data[i].firstName;
                var email = data[i].email;
                var sex = data[i].sex;
                var unixDate = data[i].birthdate;
                var date = new Date(unixDate * 1000);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var table = document.getElementById("myTable");
                var row = table.insertRow();
                row.className = "bottom-row";
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                var cell6 = row.insertCell(5);
                cell1.innerHTML = firstName;
                cell2.innerHTML = lastName;
                cell3.innerHTML = email;
                cell4.innerHTML = sex;
                cell5.innerHTML = day + "/" + month + "/" +  year;
                cell6.innerHTML =
                '<span class="delete-button fa fa-remove" id="deleteButton">';
            }
            });
        },
    }
}

</script>
