import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav"
        "aside main"`, //wider than 1024px
      }}
    >
      <GridItem bg="orange" area={"nav"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem bg="pink" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem bg="green" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
