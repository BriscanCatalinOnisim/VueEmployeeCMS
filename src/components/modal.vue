<template>

    <div class="modal">
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

export default {
    methods: {
        closeModal () {
            var modal = document.getElementById("modal");
            modal.style.display = "none";
        },
    }
}

</script>

