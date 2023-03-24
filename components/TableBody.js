
export default function TableBody({ data, handleDeleteButton, search }) {
    return (
        <tbody>
            {data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            }).map((item, _) => (
                <tr key={item.id} spellCheck="false">
                    <td contentEditable="true">{item.id}</td>
                    <td contentEditable="true">{item.name}</td>
                    <td contentEditable="true">{item.email}</td>
                    <td contentEditable="true">{item.address.city}</td>
                    <td contentEditable="true">{item.phone}</td>
                    <td contentEditable="true">{item.website}</td>
                    <td contentEditable="true">{item.company.name}</td>
                    <td><button type="button" onClick={() => handleDeleteButton(item.id)}>Delete</button></td>
                </tr> 
            ))}
        </tbody>
    )
}