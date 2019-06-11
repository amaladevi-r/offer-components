import CardNetworkFilter from "../CardNetworkFilter.js";
import {CardNetwork} from "../../CardNetwork.js";
import Offer from "../../../model/Offer.js";
import {createCCContext} from "../../../../helpers/__tests__/TestUtils.js";

describe("Card fee type filter", function() {
    it("should get domains from offer", function() {
        const offerData = {
            cpId: 1,
            cardNetworkList: ["VISA", "MASTER"]
        };
        expect(new CardNetworkFilter().getDomainsFromOffer(new Offer({offerData, context: createCCContext()}))).
            toEqual([new CardNetwork("VISA"), new CardNetwork("MASTER")]);
    });
});