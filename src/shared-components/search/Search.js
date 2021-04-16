import { Grid, InputAdornment, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab"
import PizzaPlanetComponent from "../../components/pizza-planet/PizzaPlanet";

export default class SearchComponent extends PizzaPlanetComponent {
    render() {
      return (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            md={8}
            sm={12}
            xs={12}
          >
            <Autocomplete
              id="autocomplete-search"
              freeSolo
              disableClearable
              options={this.props?.options.map((option) => option)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  margin="normal"
                  variant="standard"
                  InputProps={{ 
                    ...params.InputProps, 
                    type: 'search',
                    startAdornment: (
                      <InputAdornment position={"start"}>
                        <Search />
                      </InputAdornment>
                    ), 
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
      );
    }
  }
  