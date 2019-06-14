import Apr from "../Apr.js";

describe("Apr", function() {
    
    it("should get APR count and first value", function() {  
        const aprListValue = {
            aprs: [
                {
                    value: 10.0
                }
            ],
            interestRateTenure: "PER_MONTH"
        };
        const aprDomain = new Apr(aprListValue);
        expect(aprDomain.getCount()).toBe(1);
        expect(aprDomain.getFirst()).toEqual({value: 10.0});

        expect(new Apr({aprs:null}).getFirst()).toBe(undefined);
    });

    it("should get if apr is range or single value", function() {
        expect(new Apr({
            aprs: [
                {
                    minValue: 10.0,
                    maxValue: 12.0
                }
            ],
            interestRateTenure: "PER_MONTH"
        }).isRange()).toEqual(true);

        expect(new Apr({
            aprs: [
                {
                    value: 10.0
                }
            ],
            interestRateTenure: "PER_MONTH"
        }).isRange()).toEqual(false);

        expect(new Apr({
            aprs: [
                {
                    value: 10.0
                },
                {
                    value: 12.0
                }
            ],
            interestRateTenure: "PER_MONTH"
        }).isRange()).toEqual(false);
    });

    it("should get values", function() {
        const aprDomain = new Apr({
            aprs: [
                {
                    value: 10.0
                },
                {
                    value: 12.0
                }
            ],
            interestRateTenure: "PER_MONTH"
        });
        expect(aprDomain.getValues()).toEqual([10.0, 12.0]);
    });
});