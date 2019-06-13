//@flow
import {uniqWith, filter, isEmpty, intersectionWith} from "lodash";

import FilterableDomain from "./FilterableDomain.js";
import OffersModel from "../../model/OffersModel.js";
import Offer from "../../model/Offer.js";

export default class EnumFilter<ED> extends FilterableDomain<ED, OffersModel> {
    getDomainsFromOffer(offer: Offer): ?Array<ED> {
        return undefined;
    }    

    getFilterOptions(offersModel: OffersModel): Array<ED> {
        const filterOptions = offersModel.getOffersMap().reduce((aggr, offer) => {
            aggr.push(...this.getDomainsFromOffer(offer));
            return aggr;
        }, []);
        return uniqWith(filterOptions, comparator);
    }

    filter(offersModel: OffersModel): Promise<OffersModel> {
        if (isEmpty(this.filterCriteria)) {
            return Promise.resolve(offersModel);
        }
        const offers = offersModel.getOffersMap();
        const filteredValues =  filter(offers, (offer) => {
            const domainsInOffer = this.getDomainsFromOffer(offer);
            const matching = intersectionWith(domainsInOffer, this.filterCriteria, comparator);
            return !isEmpty(matching);
        });
        const offersModelFiltered = offersModel.copy(filteredValues);
        return Promise.resolve(offersModelFiltered);
    }
}
const comparator = function(oneVal, othVal) {
    return oneVal.getValue() === othVal.getValue();
};