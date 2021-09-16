<template>
    <inertia-table 
    :data="users" 
    id="id" 
    :order="order" 
    :filters="filters" 
    :columns="columns" 
    routeName="users" 
    createLink="users.create" 
    @item-selected="show">
    </inertia-table>

    <!-- <div style="overflow-x: auto;">
        <table id="myTable">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">
                        {{header}}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="a in assignedApplications" :key="a.no">
                    <td>{{a.no}}</td>
                    <td>{{a.lastname}}</td>
                    <td>{{a.firstname}}</td>
                    <td>{{a.email}}</td>
                    <td>{{a.gender}}</td>
                    <td>{{a.birthday}}</td>
                    <td>{{a.image}}</td>
                </tr>
            </tbody>
            <th id="tlname">Last Name</th>
            <th id="tfname">First Name</th>
            <th id="temail">Email</th>
            <th id="tgender">Gender</th>
            <th id="tbirthday">Birthday</th> 
            <th id="tphoto">Image</th>
            <th id="tdelete">DeleteItem</th>   
            <tbody id="employeesTableBody"></tbody>
        </table>
    </div> -->
</template>

<script>

// var app = new Vue({
//     el: '#myTable',
//     data: {
//         assignedApplications: [
//             { no: 1, lastname: "Catalin", firstname: "Briscan", email: "cata.briscan@gmail.com", gender: "male", birthday: "12 November, 1999", image: "" },
//             { no: 2, lastname: "Ovi", firstname: "Briscan", email: "ovi.briscan@gmail.com", gender: "male", birthday: "12 December, 1999", image: "" },
//         ],
//         headers: [
//             "no", "lastname", "firstname", "email", "gender", "birthday", "image"
//         ],
//         items: []
//     },
//     methods: {
//         update: function() {
//             let newData = [
//                 { no: 3, lastname: "Ovi12", firstname: "Briscan12", email: "ovi.briscan@gmail.com", gender: "male", birthday: "12 December, 1976", image: "" },
//                 { no: 4, lastname: "Ovi34", firstname: "Briscan34", email: "ovi.briscan@gmail.com", gender: "male", birthday: "12 December, 1943", image: "" },
//                 { no: 5, lastname: "Ovi56", firstname: "Briscan56", email: "ovi.briscan@gmail.com", gender: "male", birthday: "12 December, 1991", image: "" },
//             ];
//             this.mergeInNewData(newData);
//         },
//         mergeInNewData(newData) {
//             for (let i = 0; i < newData.length; i++) {
//                 let changedData = newData[i];
//                 for (let j = 0; j < this.assignedApplications.length; j++) {
//                     if (this.assignedApplications[j].no === changedData.no) {
//                         this.assignedApplications[j].lastname = changedData.lastname;
//                         this.assignedApplications[j].firstname = changedData.firstname;
//                         this.assignedApplications[j].email = changedData.email;
//                         this.assignedApplications[j].gender = changedData.gender;
//                         this.assignedApplications[j].birthday = changedData.birthday;
//                         this.assignedApplications[j].image = changedData.image;
//                     } else {
//                         this.assignedApplications.push(changedData);
//                     }
//                 }
//             }
//         }
//     }
//   });
</script>


<style scoped src="../styles/table.css"></style>