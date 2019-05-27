import React from "react";
import PropTypes from "prop-types";

import OffersModel from "../../model/OffersModel";
import Context from "../../../helpers/Context.js";
import {getItemRendererFor} from "../domainRenderers";
import Style from "./OfferTableViewMobileLayout.scss";

export default class OfferTableViewMobileLayout extends React.PureComponent  {

    static propTypes = {
        offersModel: PropTypes.instanceOf(OffersModel).isRequired,
        context: PropTypes.instanceOf(Context).isRequired
    }

    getConfiguration() {
        return {
            "CC"    : {
                "logoType": "CreditCard_Image",
                "rowsTypes": {
                    1: ["CreditCard_Name"],
                    2: ["AnnualFee_FirstYear"],
                    3: ["Rewards_OneLiner"]
                },
                "ctaButtonRowPosition": "2"                
            }
        };
    }

    renderOfferRow(offer) {
        const config = this.getConfiguration()[this.props.context.getProductType()];

        function getLogoRenderer(){
            return getItemRendererFor(config.logoType, offer);
        }

        function getRatingsRenderer(){
            return getItemRendererFor("ReviewsSummary_Rating", offer);
        }

        function getRowsRenderer() {
            const rows = [];
            Object.entries(config.rowsTypes).forEach(function([rowNumber, itemTypes]) {
                const itemsDiv = itemTypes.map((itemType) => getItemRendererFor(itemType, offer));
                rows.push((
                    <div className={`row-${rowNumber}`}>
                        {itemsDiv}
                    </div>
                ));
            })

            return rows;
        }

        return (
            <div key={`row-${offer.getId()}`}>
                {getLogoRenderer()}
                {getRatingsRenderer()}
                {getRowsRenderer()}
                <div> 
                    {this.renderCTAButton()}
                </div>
            </div>
        );
    }

    render() {
        const offerRows = [];
        this.props.offersModel.getOffersMap().forEach((offer) => {
            offerRows.push(this.renderOfferRow(offer));
        });

        return (
            <div className={Style.offerSection}>{offerRows}</div>
        );
    }

    renderCTAButton() {
        return (
                <a onClick={this.applyNowHandler}>
                    APPLY NOW
                </a>
        );
    }

    applyNowHandler() {
        //implement this
        return;
    }

} 
