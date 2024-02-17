import { Style } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';

function Search({text, onSearchActive, onSearchInactive}) {
    return (
        <div className="search" onClick={onSearchActive} onSuspend={onSearchInactive}>
            <SearchIcon />
            <input type="search" placeholder={text}></input>
        </div>
    )
}

export default Search;