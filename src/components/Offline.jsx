import unpluggeds from '../../assets/unpluggeds.svg' 
import useOnlineStatus from '../customHooks/useOnlineStatus';

const Offline = () => {
    const onlineStatus = useOnlineStatus
    return(
        <div className="offline">
            <h1>{onlineStatus? '❌' : '🟢'}</h1>
            <h4>Uhh! No..</h4>
            <p><strong>You Look like offline. Please check the Internet.</strong></p>
        </div>
    )
}
export default Offline;
