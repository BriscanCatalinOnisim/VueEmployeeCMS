<template>
    <div style="overflow-x: auto;">
        <table id="myTable">
            <!-- <thead>
                <tr>
                    <th v-for="header in headers" :key="header">
                        {{header}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="items.length === 0">
                    <td>No data</td>
                </tr>
                <tr v-else v-for="item in items" :key="item.no">
                    <td>{{item.no}}</td>
                    <td>{{item.lastname}}</td>
                    <td>{{item.firstname}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.gender}}</td>
                    <td>{{item.birthday}}</td>
                    <td>{{item.image}}</td>
                </tr>
            </tbody> -->

            <th id="tlname">Last Name</th>
            <th id="tfname">First Name</th>
            <th id="temail">Email</th>
            <th id="tgender">Gender</th>
            <th id="tbirthday">Birthday</th> 
            <th id="tphoto">Image</th>
            <th id="tdelete">DeleteItem</th>   
            <tbody id="employeesTableBody"></tbody>
        </table>
    </div>
</template>

// <script>
// var overall = new Vue({
//     el: '#myTable',
//     data: {
//       headers: [
//         "no", "lastname", "firstname", "email", "gender", "birthday", "image"
//       ],
//       items: []
//     },
//     methods: {
//       add: function(item) {
//         this.items.push(item);// = item;
//       }
//     }
//   });
// </script>


<style scoped src="../styles/table.css"></style>