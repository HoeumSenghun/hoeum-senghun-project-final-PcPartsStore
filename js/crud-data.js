async function getUser() {

    await fetch('http://localhost:3000/build')
        .then(response => response.json())
        .then(json => {

            let trHeader = `
                <tr>
                    <th>ID</th>
                    <th>Component</th>
                    <th>Selection</th>
                    <th>Shipping</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            `;

            trBody = '';

            if (json?.data?.length > 0) {
                json.data.map((user, index) => {

                    if (index < 10) {

                        trBody += '<tr>';
                        trBody += '<td>' + build?.id + '</td>';
                        trBody += '<td>' + build?.compo + '</td>';
                        trBody += '<td>' + build?.selection_compo + '</td>';
                        trBody += '<td>' + build?.shipping + '</td>';
                        trBody += '<td>' + build?.price + '</td>';
                        trBody += `
                            <td>
                                <button class="button-edit" onClick={handleEditPhoto(${build.id})}>Edit</button>
                                <button class="button-delete">Delete</button>
                            </td>
                            `;
                        trBody += '/<tr>';
                    }

                });

                let displayDataTable = trHeader + trBody;
                document.getElementById('table-user').innerHTML = displayDataTable;

            }

        });

};

getUser();



const handleViewUser = async (id) => {
    await fetch('http://localhost:3000/build/' + id).
        then((response) => response.json()).
        then((json) => {
            document.getElementById('id').value = json?.data.id;
            document.getElementById('compo').value = json?.data.compo;
            document.getElementById('select_compo').value = json?.data.select_compo;
            document.getElementById('shipping').value = json?.data.shipping;
            document.getElementById('price').value = json?.data.price;

        })
}

const handleUpdateUser = () => {

    let newUserInfo = {
        id: document.getElementById('id').value,
        compo: document.getElementById('compo').value,
        select_compo: document.getElementById('select_compo').value,
        shipping: document.getElementById('shipping').value,
        price: document.getElementById('price').value,
    }
}

document.getElementById('btn-update').addEventListener('click').handleUpdateUser;