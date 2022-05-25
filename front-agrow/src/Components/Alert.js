
import {useEffect} from "react";

const Alert = ({level, msg, alerts, setAlerts}) => {

    const deleteSelf = () => {
        let beenFound = false
        let tempAlerts = [...alerts]
        for (let i = 0; i < tempAlerts.length && !beenFound; i++) {
            if (tempAlerts[i].msg === msg && tempAlerts[i].level === level) {
                beenFound = true
                tempAlerts.splice(i, 1)
            }

        }
        setAlerts(tempAlerts)
    }

    useEffect(() => {
        const deletion = async () => {
            await new Promise((resolve) => {
                setTimeout(resolve, 4000)
            })
            deleteSelf()
        }
        deletion()
    }, [])

    return (
        <div className={"m-3 alert alert-dismissible fade show " + level} role="alert">
            <span>{msg}</span>
            <button type="button" className="btn-close" onClick={() => deleteSelf()} aria-label="Close"></button>
        </div>
    )
}
export default Alert
