document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");
    const tableBody = document.getElementById("table-body");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const firstName = document.getElementById("fname").value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const dob = document.getElementById("dob").value;
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("nation").value;
        const gender = document.querySelector('input[name="userGender"]:checked').value;

        if (!firstName || !lastName || !dob || !email || !phone || !country) {
            alert("Please fill out all fields.");
            return;
        }

        const fullName = `${firstName} ${lastName}`;
        addRowToTable(fullName, dob, phone, gender, country);

      
        form.reset();
    });

    function addRowToTable(name, dob, phone, gender, country) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${dob}</td>
            <td>${phone}</td>
            <td>${gender}</td>
            <td>${country}</td>
            <td>
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
            </td>
        `;

        
        row.querySelector(".btn-delete").addEventListener("click", function () {
            row.remove();
        });

     
        row.querySelector(".btn-edit").addEventListener("click", function () {
            editRow(row);
        });

        tableBody.appendChild(row);
    }

    function editRow(row) {
        const cells = row.getElementsByTagName("td");

     
        const nameParts = cells[0].innerText.split(" ");
        const dob = cells[1].innerText;
        const phone = cells[2].innerText;
        const gender = cells[3].innerText;
        const country = cells[4].innerText;

        document.getElementById("fname").value = nameParts[0];
        document.getElementById("lname").value = nameParts[1] || "";
        document.getElementById("dob").value = dob;
        document.getElementById("phone").value = phone;
        document.getElementById("nation").value = country;

        const genderInput = document.querySelector(`input[name="userGender"][value="${gender}"]`);
        if (genderInput) genderInput.checked = true;

        row.remove();
    }
});