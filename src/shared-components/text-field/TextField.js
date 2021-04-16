import React from "react";
import { FormControl, FormGroup, TextField } from "@material-ui/core";
import PizzaPlanetComponent from "../../components/pizza-planet/PizzaPlanet";

export default class TextFieldComponent extends PizzaPlanetComponent {
  render() {
    const {
      inputProps,
      type,
      required,
      ...restProps
    } = this.props;
    return (
      <FormGroup {...restProps}>
        {this.props.label && (
          <FormControl 
            {...restProps}
          >
            {required ? `${restProps.label} *` : restProps.label}
          </FormControl>
        )}
        <TextField 
            type={type}
            InputProps={inputProps}
            fullWidth
        />
      </FormGroup>
    );
  }
}
