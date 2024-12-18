import Generic from "./Generic.js"
import it600Repeater from "./it600Repeater.js"
import it600WC from "./it600WC.js"
import SAU2AG1ZC from "./SAU2AG1ZC.js"
import SQ610 from "./SQ610.js"
import SQ610RF from "./SQ610RF.js"
import UGE600 from "./UGE600.js"

const devices = {
    Generic,
    it600Repeater,
    it600WC,
    SAU2AG1ZC,
    SQ610,
    SQ610RF,
    UGE600,
    from({ client, data }) {
        const model = (data.sBasicS?.ModelIdentifier || data.sGateway?.ModelIdentifier || 'Generic').split('-').join('')
        return (devices[model] || devices.Generic).from({ client, data })
    }
}
export default devices