import React from "react";
import PropTypes from "prop-types";

import CreditCardAnnualFee from "../../domain/CreditCardAnnualFee.js";
import Style from "./../../../styles/Offer-A/CreditCardAnnualFee.scss";

export class FirstYearFeeItemRenderer extends React.PureComponent {
    
    static propTypes = {
        domain: PropTypes.shape({
            firstYearFee: PropTypes.instanceOf(CreditCardAnnualFee).isRequired,
            reducedFee: PropTypes.instanceOf(CreditCardAnnualFee)
        }).isRequired
    }

    render() {
        return <React.Fragment>
            <strong className={[Style.textValue, Style.textWithIcon, Style.offerSprite, Style.bbiconsRsOne].join(" ")}>${this.props.domain.firstYearFee.getCurrentFee()}</strong>
            <div className={Style.textValueScondary}>1<sup>st</sup> Year Fee</div>
        </React.Fragment>;
    }
}

export class GenericFeeRenderer extends React.PureComponent {
    static propTypes = {
        domain: PropTypes.instanceOf(CreditCardAnnualFee).isRequired
    }

    render() {
        return <div>
            ${this.props.domain.getCurrentFee()} <br />
        </div>;
    }
}