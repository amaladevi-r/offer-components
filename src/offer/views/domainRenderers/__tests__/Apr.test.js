import {shallow} from "enzyme";
import React from "react";
import sinon from "sinon";

import Apr from "../Apr.js";
import AprDomain from "../../../domain/Apr.js";

describe("Apr renderer", function () {
    it("should render text as range", function() {
        const domain = new AprDomain();
        sinon.stub(domain, "getInterestRateTenure").returns("PER_ANNUM");
        sinon.stub(domain, "isRange").returns(true);
        sinon.stub(domain, "getMinValue").returns(10.0);
        sinon.stub(domain, "getMaxValue").returns(12.0);
        const wrapper = shallow(React.createElement(Apr, {domain}));
        expect(wrapper.find("div[children=\"10% - 12% p.a\"]").length).toBe(1);
    });

    it("should render text as single value", function() {
        const domain = new AprDomain();
        sinon.stub(domain, "getInterestRateTenure").returns("PER_MONTH");
        sinon.stub(domain, "isRange").returns(false);
        sinon.stub(domain, "getSingleValue").returns(10.0);
        sinon.stub(domain, "getCount").returns(1);
        const wrapper = shallow(React.createElement(Apr, {domain}));
        expect(wrapper.find("div[children=\"10% p.m\"]").length).toBe(1);
    });

    it("should render text as comma separated when more than one apr present", function() {
        const domain = new AprDomain();
        sinon.stub(domain, "getInterestRateTenure").returns("PER_MONTH");
        sinon.stub(domain, "isRange").returns(false);
        sinon.stub(domain, "getCount").returns(3);
        sinon.stub(domain, "getValues").returns([12.0, 13.0, 14.0]);
        const wrapper = shallow(React.createElement(Apr, {domain}));
        expect(wrapper.find("div").children().at(0).text()).toBe("12% ,13% ,14%  p.m");
    });
});
