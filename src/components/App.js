import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };

  render() {
    return (
      <div style={{ marginTop: "15 px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <br />
        Found: {this.state.images.length} images
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
