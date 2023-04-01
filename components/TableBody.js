
export default function TableBody({ data, handleDeleteButton, handleInfoButton, search }) {
    return (
        <tbody>
            {data.filter((item) => {
                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
            }).map((item, _) => (
                <tr key={item.id} spellCheck="false">
                    <td>{item.id}</td>
                    <td contentEditable="true">{item.name}</td>
                    <td contentEditable="true">{item.email}</td>
                    <td contentEditable="true">{item.address.city}</td>
                    <td contentEditable="true">{item.phone}</td>
                    <td contentEditable="true">{item.website}</td>
                    <td contentEditable="true">{item.company.name}</td>
                    <td className="buttons-td">
                        <button type="button" onClick={() => handleDeleteButton(item.id)}>Delete</button>
                        <button type="button" onClick={() => handleInfoButton(item.id)} className="info-button">Info</button>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}