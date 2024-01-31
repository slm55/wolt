import SearchIcon from '@mui/icons-material/Search';

function Search({text}) {
    return (
        <div className="search">
            <SearchIcon />
            <input type="search" placeholder={text}></input>
        </div>
    )
}

export default Search;