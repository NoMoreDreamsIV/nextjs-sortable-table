import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import TableBody from "../components/TableBody";
import TableHead from "../components/TableHead";


export default function Table() {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => setTableData(data))
    }, []);

    const columns = [
        { key: 'id', label: 'ID' },
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'address.city', label: 'City' },
        { key: 'phone', label: 'Phone' },
        { key: 'website', label: 'Website' },
        { key: 'company.name', label: 'Company' },
    ]

    const handleDeleteButton = (id) => {
        const newData = [...tableData];

        const index = tableData.findIndex((data) => data.id === id);
        newData.splice(index, 1);

        setTableData(newData);
    }

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
                        numeric: true,
                    }) * (sortOrder === 'asc' ? 1 : -1)
                );
            });
            setTableData(sorted);
        }
    };

    return (
        <>
            <div className="table-container">
                <SearchBar />
                <h1>Sortable Table</h1>
                <table className="table">
                    <TableHead columns={columns} handleSorting={handleSorting} />
                    <TableBody data={tableData} handleDeleteButton={handleDeleteButton} />
                </table>
            </div>
        </>
    )
}