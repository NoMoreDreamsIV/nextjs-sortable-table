import { useState } from "react";

export default function TableHead({ columns, handleSorting }) {
    const [sortField, setSortField] = useState('');
    const [order, setOrder] = useState('asc');

    const handleSortingChange = (column) => {
        const sortOrder =
            column === sortField && order === "asc" ? "desc" : "asc";
        setSortField(column);
        setOrder(sortOrder);
        handleSorting(column, sortOrder);
    };

    return (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.key} onClick={() => handleSortingChange(column.key)}>
                        {column.label}
                        <span>↕</span>
                    </th>
                ))}
                <th>Actions</th>
            </tr>
        </thead>
    )
}