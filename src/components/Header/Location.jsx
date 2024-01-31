import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Location({city}) {
    return (
        <div className="location">
            <FmdGoodIcon /> 
            <a href="#">{city}</a>
            <KeyboardArrowDownIcon />
        </div>
    )
}
export default Location;