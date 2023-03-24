
export default function SearchBar({ setSearch }) {
    
    return (
        <div className="search-bar">
            <form>
                <input 
                    type='text' 
                    placeholder='Search' 
                    onChange={(event) => setSearch(event.target.value)}
                />
            </form>
        </div>
    )
}