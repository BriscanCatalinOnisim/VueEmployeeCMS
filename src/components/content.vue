<template>
    <div class="content">
        <div>
            <h2>Create Entry</h2>
            <button id="button" class="trigger" style="vertical-align:middle" v-on:click="openModal()">
                <span> Create </span>
            </button>        
        </div> 

        <input type="text" id="myInput" onkeyup="sortNames()" placeholder="Search for names ..." title="Type in a name">
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
    </div>
</template>

<script>
export default {
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
    },
 };
</script>


<style scoped src="../styles/content.css"></style>