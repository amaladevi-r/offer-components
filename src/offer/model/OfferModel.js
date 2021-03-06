import * as Domains from "../domain";

export default class OfferModel {

    constructor({offerData, context}) {
        this.offerData = offerData;
        this.context = context;
        this.offer = this._instantiateOffer();
    }

    _instantiateOffer() {
        return  {
            id: this.offerData.cpId,
            bank: new Domains.Bank(this.offerData.bank),
            cardName: new Domains.TextAndAdditionalInfo(this.offerData.cardName),
            fuelSurchargeWaiver: new Domains.TextAndAdditionalInfo(this.offerData.fuelSurchargeWaiver),
            cardUrl: new Domains.SimpleString(this.offerData.cardUrl),
            firstYearFee: new Domains.CreditCardAnnualFee(this.offerData.firstYearFee),
            reducedFee: new Domains.CreditCardAnnualFee(this.offerData.reducedFee),
            secondYearOnwards: new Domains.CreditCardAnnualFee(this.offerData.secondYearOnwardsAnnualFee),
            usp: new Domains.Usp(this.offerData.usp),
            lifeTimeFree: getBool(this.offerData.lifeTimeFree),
            feeWaiver: getBool(this.offerData.feeWaiver),
            loungeAccess: getBool(this.offerData.loungeAccess),
            reviewsSummary: new Domains.ReviewsSummary(this.offerData.cardId, this.offerData.bank && this.offerData.bank.id),
            cardCategoryList: new Domains.CardCategoryList(this.offerData.cardCategoryList),
            cardNetworkList: new Domains.CardNetworkList(this.offerData.cardNetworkList),
            cardFeeTypeList: new Domains.CardFeeTypeList(this.offerData.cardFeeTypeList),
            rewards: new Domains.TextAndAdditionalInfoList(this.offerData.rewards),
            joiningPerks: new Domains.TextAndAdditionalInfoList(this.offerData.joiningPerks)
        };
    }

    getId() {
        return this.offer.id;
    }

    getBank() {
        return this.offer.bank;
    }

    getCardName() {
        return this.offer.cardName;
    }

    getCardUrl() {
        return this.offer.cardUrl;
    }

    getFirstYearFee() {
        return this.offer.firstYearFee;
    }

    getSecondYearOnwards() {
        return this.offer.secondYearOnwards;
    }

    getUsp() {
        return this.offer.usp;
    }

    getReviewsSummary() {
        return this.offer.reviewsSummary;
    }

    getCardCategoryList() {
        return this.offer.cardCategoryList;
    }

    getCardNetworkList() {
        return this.offer.cardNetworkList;
    }

    getCardFeeTypeList() {
        return this.offer.cardFeeTypeList;
    }

    getReducedFee() {
        return this.offer.reducedFee;
    }

    getLifeTimeFree() {
        return this.offer.lifeTimeFree;
    }

    getFeeWaiver() {
        return this.offer.feeWaiver;
    }

    getLoungeAccess() {
        return this.offer.loungeAccess;
    }

    getRewards() {
        return this.offer.rewards;
    }

    getJoiningPerks() {
        return this.offer.joiningPerks;
    }

    getFuelSurchargeWaiver() {
        return this.offer.fuelSurchargeWaiver;
    }
}

const getBool = function(value) {
    return value == "true" || value == true;
};