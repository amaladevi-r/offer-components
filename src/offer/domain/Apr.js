//@flow

type AprValueType = {
    value?: number,
    minValue?: number,
    maxValue?: number,
    cashless?: boolean
}
export const interestRateTenureTypes = {
    PER_ANNUM: "PER_ANNUM",
    PER_MONTH: "PER_MONTH"
};

export type InterestRateTenureType = $Keys<typeof interestRateTenureTypes>;

type AprListValueType = {
    aprs?: Array<AprValueType>,
    interestRateTenure?: InterestRateTenureType,
    conditions?: string
}

export default class Apr {
    aprList: AprListValueType
    constructor(value: AprListValueType) {
        this.aprList = value;
    }

    getCount(): number {
        return this.aprList.aprs == undefined ? 0 : this.aprList.aprs.length;
    }

    getFirst(): ?AprValueType {
        if (this.aprList.aprs != undefined) {
            return this.aprList.aprs[0];
        }
        return undefined;
    }

    getConditions(): ?string {
        return this.aprList.conditions;
    }

    getInterestRateTenure(): ?InterestRateTenureType {
        return this.aprList.interestRateTenure;
    }

    isRange(): boolean {
        if (this.getFirst() != undefined 
                && this.aprList.aprs != undefined 
                && this.aprList.aprs[0].minValue != undefined && this.aprList.aprs[0].maxValue != undefined) {
            return true;
        }
        return false;
    }

    getMinValue(): ?number {
        if (!this.isRange() || this.aprList.aprs == undefined) {
            return undefined;
        }
        return this.aprList.aprs[0].minValue;
    }

    getMaxValue(): ?number {
        if (!this.isRange() || this.aprList.aprs == undefined) {
            return undefined;
        }
        return this.aprList.aprs[0].maxValue;
    }

    getSingleValue(): ?number {
        if (this.aprList.aprs == undefined) {
            return undefined;
        }
        return this.aprList.aprs[0].value;
    }

    getValues(): Array<?number> {
        if (this.aprList.aprs == undefined) {
            return [];
        }
        return this.aprList.aprs.map((apr) => apr.value);
    }
}