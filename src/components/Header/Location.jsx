import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Location({city, onHover, onUnHover}) {
    return (
        <div className="location" onMouseEnter={onHover} onMouseLeave={onUnHover}>
            <FmdGoodIcon className="location-left" /> 
            <a href="#">{city}</a>
            <KeyboardArrowDownIcon />
        </div>
    )
}
export default Location;