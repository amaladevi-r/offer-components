import React from "react";
import PropTypes from "prop-types";
import {find, isEmpty} from "lodash";
import Select from "react-select";

import Checkbox from "../../../../controls/Checkbox.js";
export default class DropdownFilterRenderer extends React.PureComponent {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.any).isRequired,
        onChange: PropTypes.func.isRequired,
        selectedOptions: PropTypes.arrayOf(PropTypes.any),
        title: PropTypes.string.isRequired
    }

    static defaultProps = {
        selectedOptions: []
    }

    render() {
        const optionsForDropdown = this.props.options.map((option) => {
            return {
                value: this.getValue(option),
                label: this.getLabel(option)
            };
        });
        const selectedOptionsForDropdown = this.props.selectedOptions.map((option) => {
            return {
                value: this.getValue(option),
                label: this.getLabel(option)
            };
        });
        const Option = (props) => {
            return (
                <div ref={props.innerRef} onClick={props.innerProps.onClick}>
                    <Checkbox name={props.data.label} value={props.data.value} 
                        checked={props.isSelected} />
                </div>
            );
        };
        return <div>
            <p>{this.props.title}</p>
            <Select
                value={selectedOptionsForDropdown}
                onChange={this.handleChange}
                options={optionsForDropdown}
                components={{Option}}
                blurInputOnSelect={false}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                isMulti={true}/>
        </div>;
        
    }

    handleChange = (selectedOptions) => {
        if (isEmpty(selectedOptions)) {
            this.props.onChange([]);    
            return;
        }
        const selectedDomains = selectedOptions.reduce((aggr, selectedOption) => {
            const domainOfSelectedOption = find(this.props.options, (option) => this.getValue(option) == selectedOption.value);
            if (!isEmpty(domainOfSelectedOption)) {
                aggr.push(domainOfSelectedOption);
            }
            return aggr;
        }, []);
        this.props.onChange(selectedDomains);
    }

    getTitle() {
        return undefined;
    }

    getValue(domain) {
        return undefined;
    }

    getLabel(domain) {
        return undefined;
    }
}