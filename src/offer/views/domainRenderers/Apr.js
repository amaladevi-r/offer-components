import React from "react";
import PropTypes from "prop-types";

import AprDomain, {interestRateTenureTypes} from "../../domain/Apr.js";

export default class Apr extends React.PureComponent {
    static propTypes = {
        domain: PropTypes.instanceOf(AprDomain).isRequired
    }
    render() {
        const domain = this.props.domain;
        const interestRateAsText = domain.getInterestRateTenure() == undefined ? "" : textMappingForInterestRate[domain.getInterestRateTenure()];
        if (domain.isRange()) {
            const textRepresentationOfApr = formatRate(domain.getMinValue()) + " - " + formatRate(domain.getMaxValue()) + " " + interestRateAsText;
            return <div>{textRepresentationOfApr}</div>;
        } else if (domain.getCount() == 1) {
            const textRepresentationOfApr = formatRate(domain.getSingleValue()) + " " + interestRateAsText;
            return <div>{textRepresentationOfApr}</div>;
        } else  {
            const textRepresentationOfAprList = domain.getValues().reduce((aggr, value, index) => {
                aggr = aggr + formatRate(value) + " ";
                if (index != domain.getCount() - 1) {
                    aggr = aggr + ",";
                }
                return aggr;
            }, "") + " " + interestRateAsText;
            
            return <div>{textRepresentationOfAprList}</div>;
        }
    }
}


const textMappingForInterestRate = {
    [interestRateTenureTypes.PER_ANNUM]: "p.a",
    [interestRateTenureTypes.PER_MONTH]: "p.m"
};

const formatRate = function(value) {
    return parseInt(value) + "%";
};