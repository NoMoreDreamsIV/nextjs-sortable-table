import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import TableBody from "../components/TableBody";
import TableHead from "../components/TableHead";
import UserInfoMenu from "../components/UserInfoMenu";


export default function Table() {
    const [tableData, setTableData] = useState([]);
    const [search, setSearch] = useState('');
    const [userInfo, setUserInfo] = useState(null);
    const [userPosts, setUserPosts] = useState(null);

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

    const handleInfoButton = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((userInfo) => setUserInfo(userInfo));

        if (setUserPosts !== null) setUserPosts(null);
    }

    const handlePostsButton = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then((response) => response.json())
            .then((userPosts) => setUserPosts(userPosts));
    }

    const handleSorting = (sortField, sortOrder) => {
        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {
                if (sortField) {
                    const aVal = sortField.split('.').reduce((obj, key) => obj[key], a);
                    const bVal = sortField.split('.').reduce((obj, key) => obj[key], b);
                    if (aVal < bVal) {
                        return sortOrder === 'asc' ? -1 : 1;
                    } if (aVal > bVal) {
                        return sortOrder === 'asc' ? 1 : -1;
                    }
                } return 0;
            });
            setTableData(sorted);
        }
    };

    return (
        <>
            <div className="table-container">
                <SearchBar  setSearch={setSearch}/>
                <h1>Sortable Table</h1>
                <table className="table">
                    <TableHead columns={columns} handleSorting={handleSorting} />
                    <TableBody 
                        data={tableData} handleDeleteButton={handleDeleteButton} handleInfoButton={handleInfoButton} search={search} 
                    />
                </table>
                <UserInfoMenu userInfo={userInfo} userPosts={userPosts} handlePostsButton={handlePostsButton}/>
            </div>
        </>
    )
}