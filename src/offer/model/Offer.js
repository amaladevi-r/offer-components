import * as Domains from "../domain";

export default class Offer {

    constructor(offerData) {
        this._offer = {};
        this._offer.cpId = offerData.cpId;
        this._offer.bank = new Domains.Bank(offerData.bank);
        this._offer.fuelSurchargeWaiver = new Domains.TextAndAdditionalInfo(offerData.fuelSurchargeWaiver);
        this._offer.lifeTimeFree = getBool(offerData.lifeTimeFree);
        this._offer.reducedFee = new Domains.CreditCardAnnualFee(offerData.reducedFee);
        this._offer.feeWaiver = getBool(offerData.feeWaiver);
        this._offer.loungeAccess =  getBool(offerData.loungeAccess);
        this._offer.cardName = new Domains.TextAndAdditionalInfo(offerData.cardName);
        this._offer.cardUrl = new Domains.SimpleString(offerData.cardUrl);
        this._offer.firstYearFee = new Domains.CreditCardAnnualFee(offerData.firstYearFee);
        this._offer.secondYearOnwards = new Domains.CreditCardAnnualFee(offerData.secondYearOnwardsAnnualFee);
        this._offer.usp = new Domains.Usp(offerData.usp);
        this._offer.reviewsSummary = new Domains.ReviewsSummary(offerData.cardId, offerData.bank && offerData.bank.id);
        this._offer.cardCategoryList = new Domains.CardCategoryList(offerData.cardCategoryList);
        this._offer.cardNetworkList = new Domains.CardNetworkList(offerData.cardNetworkList);
        this._offer.cardFeeTypeList = new Domains.CardFeeTypeList(offerData.cardFeeTypeList);
        this._offer.rewards = new Domains.TextAndAdditionalInfoList(offerData.rewards);
        this._offer.joiningPerks = new Domains.TextAndAdditionalInfoList(offerData.joiningPerks);
    }

    getId() {
        return this._offer.cpId;
    }

    getBank() {
        return this._offer.bank;
    }

    getCardName() {
        return this._offer.cardName;
    }

    getCardUrl() {
        return this._offer.cardUrl;
    }

    getFirstYearFee() {
        return this._offer.firstYearFee;
    }

    getSecondYearOnwards() {
        return this._offer.secondYearOnwards;
    }

    getUsp() {
        return this._offer.usp;
    }

    getReviewsSummary() {
        return this._offer.reviewsSummary;
    }

    getCardCategoryList() {
        return this._offer.cardCategoryList;
    }

    getCardNetworkList() {
        return this._offer.cardNetworkList;
    }

    getCardFeeTypeList() {
        return this._offer.cardFeeTypeList;
    }

    getReducedFee() {
        return this._offer.reducedFee;
    }

    getLifeTimeFree() {
        return this._offer.lifeTimeFree;
    }

    getFeeWaiver() {
        return this._offer.feeWaiver;
    }

    getLoungeAccess() {
        return this._offer.loungeAccess;
    }

    getRewards() {
        return this._offer.rewards;
    }

    getJoiningPerks() {
        return this._offer.joiningPerks;
    }

    getFuelSurchargeWaiver() {
        return this._offer.fuelSurchargeWaiver;
    }
}

const getBool = function(value) {
    return value == "true" || value == true;
};